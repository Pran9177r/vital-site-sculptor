"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface Treatment {
  id: string;
  title: string;
  subheader?: string;
  description: string;
}

interface TreatmentTabsProps {
  treatments: Treatment[];
}

export function TreatmentTabs({ treatments }: TreatmentTabsProps) {
  const [activeId, setActiveId] = useState<string>(treatments[0]?.id);

  const activeTreatment = treatments.find((t) => t.id === activeId) || treatments[0];

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
      {/* Mobile Dropdown */}
      <div className="md:hidden relative w-full">
        <select
          value={activeId}
          onChange={(e) => setActiveId(e.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-5 py-4 pr-10 text-base font-semibold text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {treatments.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>

      {/* Desktop Tabs Sidebar */}
      <div className="hidden md:flex flex-col w-1/3 shrink-0 gap-2 border-r border-slate-100 pr-8">
        {treatments.map((t) => {
          const isActive = activeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`group relative flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left transition-all duration-300 ${
                isActive
                  ? "bg-slate-50 text-primary font-semibold shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{t.title}</span>
              {isActive && (
                <motion.div
                  layoutId={`active-tab-${treatments[0].id}`}
                  className="absolute -right-[1px] top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-l-full bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="w-full md:w-2/3 md:pl-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {activeTreatment.title}
            </h3>
            {activeTreatment.subheader && (
              <h4 className="text-lg font-medium text-primary mb-6">
                {activeTreatment.subheader}
              </h4>
            )}
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeTreatment.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
