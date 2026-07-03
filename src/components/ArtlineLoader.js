export function ArtlineLoader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <svg
                width="160"
                height="80"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                <defs>
                    <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#eb0b8b" />
                        <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                </defs>
                {/* Faint track */}
                <path
                    d="M100 50 C120 20, 160 20, 160 50 C160 80, 120 80, 100 50 C80 20, 40 20, 40 50 C40 80, 80 80, 100 50"
                    stroke="url(#loader-grad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeOpacity="0.1"
                />
                {/* Animated drawing line */}
                <path
                    d="M100 50 C120 20, 160 20, 160 50 C160 80, 120 80, 100 50 C80 20, 40 20, 40 50 C40 80, 80 80, 100 50"
                    stroke="url(#loader-grad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-artline"
                />
            </svg>
            <div className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase animate-pulse">
                Crafting...
            </div>
        </div>
    );
}
