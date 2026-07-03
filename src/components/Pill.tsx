"use client";

import { useState, useRef, useEffect, useId } from "react";

export function Pill({
  label,
  description,
  dotColor,
}: {
  label: string;
  description: string;
  dotColor?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={pillRef}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-secondary"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        aria-expanded={isOpen}
        aria-controls={isOpen ? popoverId : undefined}
      >
        {dotColor && (
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: dotColor }}
            aria-hidden
          />
        )}
        {label}
      </button>
      {isOpen && (
        <div
          id={popoverId}
          role="tooltip"
          className="absolute left-1/2 top-full z-50 mt-2 w-[calc(100vw-2rem)] max-w-xs -translate-x-1/2 rounded-lg border bg-card p-3 text-sm text-muted-foreground shadow-lg sm:w-72"
        >
          <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t bg-card" />
          <p className="relative">{description}</p>
        </div>
      )}
    </div>
  );
}
