"use client";

import { useState } from "react";

export function PreviousWorkGallery() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-8 mr-3 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Our Previous Work
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-lg text-black transition-colors hover:bg-zinc-200"
            >
              &times;
            </button>
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-black">
              Our Previous Work
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Video */}
              <div className="flex flex-col">
                <h4 className="mb-3 font-medium text-zinc-700">Video Ad</h4>
                <video
                  src="/WhatsApp%20Video%202026-04-17%20at%2012.06.15%20AM.mp4"
                  controls
                  className="w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
                />
              </div>
              {/* Image */}
              <div className="flex flex-col">
                <h4 className="mb-3 font-medium text-zinc-700">Jeeconnect App Design</h4>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jeeconnect-app.jpg"
                  alt="Jeeconnect App"
                  className="w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
