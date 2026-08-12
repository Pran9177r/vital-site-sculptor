import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-white/10 backdrop-blur-md border border-white/20 relative grid h-full w-full shadow-2xl md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/30" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/30" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/30" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white/30" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-10 lg:p-12 text-white">
					<h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
						{title}
					</h2>
					<p className="text-white/80 max-w-xl text-sm md:text-base lg:text-lg">
						{description}
					</p>
					<div className="grid gap-6 sm:grid-cols-2 mt-8">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-black/20 flex h-full w-full items-center border-t border-white/10 p-6 md:col-span-1 md:border-t-0 md:border-l md:p-8',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-4', className)} {...props}>
			<div className="bg-white/10 rounded-full p-3 text-sun">
				<Icon className="h-5 w-5" />
			</div>
			<div className="flex flex-col pt-1">
				<p className="font-semibold text-white">{label}</p>
				<p className="text-white/80 text-sm leading-relaxed">{value}</p>
			</div>
		</div>
	);
}
