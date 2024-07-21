
import React from "react";
import { cn } from "../../lib/cn";

export const ButtonsCard = ({
    children,
    className,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "w-full bg-white dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
                className
            )}
        >
            <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
            <div className="relative z-40">{children}</div>
        </div>
    );
};
