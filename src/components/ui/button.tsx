'use client'

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
};

export const Button = ({ type, children, className, ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn(
                "px-8 py-2 rounded-sm font-semibold text-white",
                " bg-blue-600 hover:bg-blue-700 transition",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
};