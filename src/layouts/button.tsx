import { type ReactNode } from "react";

interface ButtonProps {
    variant?: "default" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Button({
    variant = "default",
    size = "md",
    children,
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        default: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
        outline:
            "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100",
        ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100",
        destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </button>
    );
}
