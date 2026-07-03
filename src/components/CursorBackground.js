"use client";

import { useEffect, useRef } from "react";

export function CursorBackground() {
    const blobRef = useRef(null);

    useEffect(() => {
        let mouseX = -1000;
        let mouseY = -1000;
        let targetX = -1000;
        let targetY = -1000;
        let isTracking = false;

        const handleMouseMove = (e) => {
            const parent = blobRef.current?.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();

            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;

            if (!isTracking) {
                mouseX = targetX;
                mouseY = targetY;
                isTracking = true;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationFrameId;
        const animate = () => {
            mouseX += (targetX - mouseX) * 0.1;
            mouseY += (targetY - mouseY) * 0.1;

            if (blobRef.current) {
                blobRef.current.style.left = `${mouseX}px`;
                blobRef.current.style.top = `${mouseY}px`;
                blobRef.current.style.transform = `translate(-50%, -50%)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0d0d0d]">

            {/* Deep Magenta / Pink Aurora */}
            <div
                className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full mix-blend-screen opacity-[0.45] filter blur-[100px]"
                style={{
                    background: `radial-gradient(circle, #eb0b8b, transparent 65%)`,
                }}
            />

            {/* Warm Yellow / Orange Aurora */}
            <div
                className="absolute top-[20%] -right-[15%] w-[70%] h-[80%] rounded-full mix-blend-screen opacity-[0.4] filter blur-[120px]"
                style={{
                    background: `radial-gradient(circle, #ffae00, transparent 65%)`,
                }}
            />

            {/* Soft interactive cursor blob (Pinkish-magenta) */}
            <div
                ref={blobRef}
                className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen opacity-[0.6] filter blur-[90px] transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle, #ff416c, transparent 65%)`,
                    left: "-1000px",
                    top: "-1000px",
                    transform: "translate(-50%, -50%)"
                }}
            />
        </div>
    );
}
