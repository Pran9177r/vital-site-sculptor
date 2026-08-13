"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MapPin } from "lucide-react";

function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

type MapViewport = {
  center: [number, number]; // [lng, lat]
  zoom: number;
};

type MapContextValue = {
  viewport: MapViewport;
  setViewport: React.Dispatch<React.SetStateAction<MapViewport>>;
  containerBounds: { width: number; height: number };
};

const MapContext = createContext<MapContextValue | null>(null);

function useMap() {
  const context = useContext(MapContext);
  if (!context) throw new Error("useMap must be used within a Map component");
  return context;
}

// Convert Lng/Lat to Mercator projection coordinates
function lngLatToPixel(
  lng: number,
  lat: number,
  centerLng: number,
  centerLat: number,
  zoom: number,
  width: number,
  height: number
) {
  const scale = 256 * Math.pow(2, zoom);
  
  const centerWorldX = ((centerLng + 180) / 360) * scale;
  const centerRad = (centerLat * Math.PI) / 180;
  const centerWorldY =
    ((1 - Math.log(Math.tan(centerRad) + 1 / Math.cos(centerRad)) / Math.PI) / 2) * scale;

  const worldX = ((lng + 180) / 360) * scale;
  const rad = (lat * Math.PI) / 180;
  const worldY =
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * scale;

  const x = width / 2 + (worldX - centerWorldX);
  const y = height / 2 + (worldY - centerWorldY);

  return { x, y };
}

type MapProps = {
  children?: ReactNode;
  className?: string;
  center?: [number, number]; // [lng, lat]
  zoom?: number;
  loading?: boolean;
};

const Map = forwardRef<HTMLDivElement, MapProps>(function Map(
  { children, className, center = [-119.7871, 36.7468], zoom = 11, loading = false },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState<MapViewport>({ center, zoom });
  const [bounds, setBounds] = useState({ width: 800, height: 400 });

  useEffect(() => {
    setViewport({ center, zoom });
  }, [center[0], center[1], zoom]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBounds({ width: rect.width || 800, height: rect.height || 400 });
      }
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Compute tile positions for background map
  const tiles = useMemo(() => {
    const { center: [lng, lat], zoom: z } = viewport;
    const currentZoom = Math.floor(z);
    const scale = 256 * Math.pow(2, currentZoom);
    
    const centerTileX = ((lng + 180) / 360) * Math.pow(2, currentZoom);
    const rad = (lat * Math.PI) / 180;
    const centerTileY =
      ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) *
      Math.pow(2, currentZoom);

    const tileList = [];
    const cols = Math.ceil(bounds.width / 256) + 2;
    const rows = Math.ceil(bounds.height / 256) + 2;

    const startX = Math.floor(centerTileX - cols / 2);
    const startY = Math.floor(centerTileY - rows / 2);

    for (let x = startX; x <= startX + cols; x++) {
      for (let y = startY; y <= startY + rows; y++) {
        const posX = bounds.width / 2 + (x - centerTileX) * 256;
        const posY = bounds.height / 2 + (y - centerTileY) * 256;
        const maxTile = Math.pow(2, currentZoom);
        const tileX = ((x % maxTile) + maxTile) % maxTile;
        const tileY = Math.max(0, Math.min(maxTile - 1, y));

        tileList.push({
          key: `${currentZoom}-${tileX}-${tileY}-${posX}-${posY}`,
          url: `https://basemaps.cartocdn.com/rastertiles/voyager/${currentZoom}/${tileX}/${tileY}.png`,
          x: posX,
          y: posY,
        });
      }
    }

    return tileList;
  }, [viewport, bounds]);

  return (
    <MapContext.Provider value={{ viewport, setViewport, containerBounds: bounds }}>
      <div
        ref={containerRef}
        className={cn(
          "relative h-full w-full overflow-hidden bg-slate-900 select-none",
          className
        )}
      >
        {/* Background Map Tiles */}
        <div className="absolute inset-0 pointer-events-none">
          {tiles.map((tile) => (
            <img
              key={tile.key}
              src={tile.url}
              alt=""
              className="absolute h-[256px] w-[256px] opacity-85 transition-opacity duration-300"
              style={{
                left: `${tile.x}px`,
                top: `${tile.y}px`,
              }}
            />
          ))}
        </div>

        {/* Map Dark / Vignette Overlay for aesthetics */}
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

        {/* Map Markers Overlay */}
        <div className="absolute inset-0 z-20">
          {children}
        </div>
      </div>
    </MapContext.Provider>
  );
});

type MapMarkerProps = {
  longitude: number;
  latitude: number;
  children: ReactNode;
};

type MarkerContextValue = {
  longitude: number;
  latitude: number;
  position: { x: number; y: number };
};

const MarkerContext = createContext<MarkerContextValue | null>(null);

function useMarkerContext() {
  const context = useContext(MarkerContext);
  if (!context) throw new Error("Marker components must be used within MapMarker");
  return context;
}

function MapMarker({ longitude, latitude, children }: MapMarkerProps) {
  const { viewport, containerBounds } = useMap();

  const pos = useMemo(() => {
    return lngLatToPixel(
      longitude,
      latitude,
      viewport.center[0],
      viewport.center[1],
      viewport.zoom,
      containerBounds.width,
      containerBounds.height
    );
  }, [longitude, latitude, viewport, containerBounds]);

  return (
    <MarkerContext.Provider value={{ longitude, latitude, position: pos }}>
      <div
        className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        {children}
      </div>
    </MarkerContext.Provider>
  );
}

type MarkerContentProps = {
  children?: ReactNode;
  className?: string;
};

function MarkerContent({ children, className }: MarkerContentProps) {
  return (
    <div className={cn("relative cursor-pointer", className)}>
      {children || (
        <div className="relative h-6 w-6 rounded-full border-2 border-white bg-amber-500 shadow-xl flex items-center justify-center">
          <MapPin className="h-3.5 w-3.5 text-white" />
        </div>
      )}
    </div>
  );
}

type MarkerTooltipProps = {
  children: ReactNode;
  className?: string;
};

function MarkerTooltip({ children, className }: MarkerTooltipProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 bottom-full mb-3 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:-translate-y-1 z-30 whitespace-nowrap rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl border border-slate-700/80",
        className
      )}
    >
      {children}
      {/* Down Arrow Tip */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
    </div>
  );
}

type MarkerLabelProps = {
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom";
};

function MarkerLabel({ children, className, position = "top" }: MarkerLabelProps) {
  const positionClasses = { top: "bottom-full mb-1", bottom: "top-full mt-1" };
  return (
    <div className={cn("absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-foreground", positionClasses[position], className)}>
      {children}
    </div>
  );
}

export { Map, useMap, MapMarker, MarkerContent, MarkerTooltip, MarkerLabel };
