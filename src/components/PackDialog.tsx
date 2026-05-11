import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

export type PackMedia = { type: "image" | "video"; src: string; poster?: string };

export type Pack = {
  name: string;
  tagline: string;
  price: string;
  media: PackMedia[];
  desc: string;
  perfect: string;
  items: string[];
  popular?: boolean;
};

const MediaCarousel = ({ media, alt }: { media: PackMedia[]; alt: string }) => {
  const [idx, setIdx] = useState(0);
  const cur = media[idx];
  const go = (d: number) => setIdx((i) => (i + d + media.length) % media.length);
  return (
    <div className="relative w-full h-full bg-secondary/30">
      {cur.type === "video" ? (
        <video key={cur.src} src={cur.src} poster={cur.poster} controls playsInline className="w-full h-full object-cover" />
      ) : (
        <img key={cur.src} src={cur.src} alt={alt} className="w-full h-full object-cover" />
      )}
      {media.length > 1 && (
        <>
          <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/80 backdrop-blur border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/80 backdrop-blur border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {media.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Media ${i + 1}`} className={`h-1.5 w-6 transition-colors ${i === idx ? "bg-gold" : "bg-background/60 border border-gold/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const PackDialog = ({
  pack,
  open,
  onOpenChange,
  onGetInTouch,
}: {
  pack: Pack | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onGetInTouch?: () => void;
}) => {
  if (!pack) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 gap-0 bg-background border border-gold/30 rounded-none overflow-hidden max-h-[92vh] sm:rounded-none">
        <DialogTitle className="sr-only">{pack.name}</DialogTitle>
        <DialogDescription className="sr-only">{pack.tagline}</DialogDescription>

        <div className="grid md:grid-cols-2 max-h-[92vh] overflow-hidden">
          {/* MEDIA */}
          <div className="relative aspect-square md:aspect-auto md:h-[92vh] overflow-hidden">
            <MediaCarousel media={pack.media} alt={pack.name} />
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="px-3 py-1 bg-background/85 backdrop-blur font-body text-[10px] tracking-luxe uppercase text-gold border border-gold/40">Ready</span>
              {pack.popular && (
                <span className="px-3 py-1 bg-gold font-body text-[10px] tracking-luxe uppercase text-primary-foreground inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" /> Popular
                </span>
              )}
            </div>
          </div>

          {/* DETAILS */}
          <div className="overflow-y-auto p-8 md:p-12 flex flex-col">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <span className="font-body text-[10px] tracking-luxe uppercase text-gold">The Pack</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-3">{pack.name}</h2>
            <p className="font-script text-xl text-gold mb-6">{pack.tagline}</p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-5xl gold-text">{pack.price}</span>
              <span className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground">incl. VAT</span>
            </div>

            <div className="gold-divider mb-8" />

            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-8">{pack.desc}</p>

            <div className="mb-8">
              <div className="font-body text-[10px] tracking-luxe uppercase text-gold mb-2">Perfect For</div>
              <p className="font-body text-sm text-foreground/80">{pack.perfect}</p>
            </div>

            <div className="mb-10">
              <div className="font-body text-[10px] tracking-luxe uppercase text-gold mb-3">What's Included</div>
              <ul className="space-y-3">
                {pack.items.map((it) => (
                  <li key={it} className="flex gap-3 font-body text-sm text-foreground/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center border border-gold/60 shrink-0">
                      <Check className="h-3 w-3 text-gold" strokeWidth={2.5} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => { onGetInTouch?.(); onOpenChange(false); }}
                className="btn-shine flex-1 bg-gold text-primary-foreground hover:bg-gold/90 rounded-2xl font-body text-xs tracking-luxe uppercase h-12 shadow-gold"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1 border-foreground/30 hover:border-gold hover:text-gold rounded-2xl font-body text-xs tracking-luxe uppercase h-12 bg-transparent"
              >
                Continue Browsing
              </Button>
            </div>

            <p className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground mt-6 text-center">
              Personal coaching · Certified · Belgium based
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
