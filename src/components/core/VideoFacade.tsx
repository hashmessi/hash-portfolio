"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Click-to-load: no YouTube iframe (≈1MB of JS) until the visitor asks for it, so LCP is untouched.
export function VideoFacade({ url, title }: { url: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const id = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/)?.[1];
  if (!id) return null;

  return (
    <div className="relative w-full aspect-video rounded-media overflow-hidden bg-ink">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 460px, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="type-small flex items-center gap-s1 rounded-media bg-paper px-s3 py-s1 text-ink underline decoration-1 underline-offset-[0.22em] group-hover:decoration-2">
              <Play className="w-4 h-4" />
              Play demo
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
export default VideoFacade;
