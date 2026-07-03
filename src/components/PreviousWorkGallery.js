"use client";

import { useState } from "react";

export function PreviousWorkGallery({ items = [] }) {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

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
            <div className={`grid grid-cols-1 gap-8 ${items.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="mb-3 font-medium text-zinc-700">{item.title}</h4>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      className="w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
                    />
                  ) : item.type === 'image' ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
                    />
                  ) : item.type === 'link' ? (
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-40 w-full flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 px-6 text-center shadow-sm transition-all hover:bg-zinc-100 hover:shadow-md"
                    >
                      <span className="text-lg font-semibold text-black">Visit Live Website</span>
                      <span className="mt-2 text-sm text-zinc-500">{item.src}</span>
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
