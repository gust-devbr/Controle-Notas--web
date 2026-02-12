import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    className?: string
};

function CardRoot({ className, ...props }: Props) {
    return (
        <div
            className={cn(
                "rounded-xl py-2 border bg-zinc-50 text-zinc-950 shadow-sm",
                className
            )}
            {...props}
        />
    )
};

function Header({ className, ...props }: Props) {
    return (
        <div
            className={cn("flex flex-col space-y-1.5 p-4", className)}
            {...props}
        />
    )
};

function Title({ className, ...props }: Props) {
    return (
        <h3
            className={cn("text-xl font-semibold leading-none", className)}
            {...props}
        />
    )
};

function Description({ className, ...props }: Props) {
    return (
        <p
            className={cn("text-sm text-zinc-500", className)}
            {...props}
        />
    )
};

function Content({ className, ...props }: Props) {
    return (
        <div className={cn("p-4 pt-0", className)} {...props} />
    )
};

function Footer({ className, ...props }: Props) {
    return (
        <div
            className={cn("flex items-center p-4 pt-0", className)}
            {...props}
        />
    )
};

export const Card = Object.assign(CardRoot, {
    Header,
    Title,
    Description,
    Content,
    Footer
});