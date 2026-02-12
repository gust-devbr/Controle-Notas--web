"use client"

import { cn } from "@/lib/utils"

interface InputProps {
    name: string,
    label: string,
    type?: string,
    value?: string | number,
    onChange?: (value: string) => void
    className?: string
};

export function Input({
    name,
    label,
    type,
    value,
    onChange,
    className,
    ...props
}: InputProps) {

    return (
        <input
            name={name}
            placeholder={label}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
                "border border-zinc-800 px-3 py-2 rounded-sm bg-transparent",
                "placeholder:font-semibold placeholder:text-md",
                className,
            )}
            {...props}
        />
    )
};