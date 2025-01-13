
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex rounded-full font-bold text-sm bg-neutral-500 px-2 rounded-tl-none bg-white-10 text-white/50",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
