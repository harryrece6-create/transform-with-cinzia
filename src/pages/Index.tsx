import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Play, Users, Trophy, Heart, Sparkles, ArrowRight, Menu, Globe } from "lucide-react";
import heroImg from "@/assets/hero-coach.jpg";
import storyImg from "@/assets/story-video.jpg";
import packMorning from "@/assets/pack-morning.jpg";
import packHydration from "@/assets/pack-hydration.jpg";
import packTotal from "@/assets/pack-total.jpg";
import { AuthDialog } from "@/components/AuthDialog";

type Lang = "en" | "de" | "sr";

const Monogram = ({ className = "" }: { className?: string }) => (
  <span className={`font-display font-bold inline-flex items-center ${className}`}>
    <span className="gold-text">D</span>
    <span className="mx-0.5 text-foreground/40 italic font-light">/</span>
    <span className="text-foreground italic">B</span>
  </span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gold" />
    <span className="font-body text-xs tracking-luxe uppercase text-gold">{children}</span>
    <span className="h-px w-8 bg-gold" />
  </div>
);

const features = [
  { icon: Trophy, title: "Proven Results", desc: "Real transformations from real clients who showed up and did the work." },
  { icon: Users, title: "Community Driven", desc: "Surround yourself with people who push you higher every single day." },
  { icon: Heart, title: "Personalized Support", desc: "Certified coaching that adapts to your body, your pace, your life." },
  { icon: Sparkles, title: "Expert Guidance", desc: "Everything you need to succeed — structure, nutrition, mindset." },
];

const packs = [
  {
    name: "Morning Kickstart Pack",
    tagline: "Your clean, easy morning reset starts here.",
    price: "€65.75",
    image: packMorning,
    desc: "A strong day starts with a strong morning. This pack puts the focus on breakfast with Formula 1 so you feel more in control, more consistent, and ready to go.",
    perfect: "Busy people who want a simple healthy routine that is easy to stick to.",
    items: ["Formula 1 breakfast support", "A simple, healthy start to your day", "More structure and consistency"],
  },
  {
    name: "Total Results Pack",
    tagline: "Your all-in combo for stronger results, faster.",
    price: "€156.80",
    image: packTotal,
    desc: "The perfect breakfast and hydration combo for people who want to go all-in. Formula 1, the herbal drink and aloe vera work together to support your metabolism and your results from day one.",
    perfect: "People who want the most complete start and the biggest push toward results.",
    items: ["Formula 1 breakfast", "Herbal drink for energy & focus", "Aloe vera for hydration & digestion"],
    popular: true,
  },
  {
    name: "Hydration Boost Pack",
    tagline: "Hydrate better, feel lighter, boost your daily flow.",
    price: "€95.90",
    image: packHydration,
    desc: "Feel sharper and more energized throughout the day. Herbal drink in lemon, peach or raspberry plus aloe vera mango — hydration, detox, energy, fat burning and gut balance in one routine.",
    perfect: "Anyone who wants more energy, better hydration and visible momentum.",
    items: ["Herbal drink (lemon, peach, raspberry)", "Aloe vera mango for hydration", "Detox, energy, and gut balance"],
  },
];

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"register" | "login">("register");
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const openAuth = (mode: "register" | "login") => { setAuthMode(mode); setAuthOpen(true); };
  const langLabel: Record<Lang, string> = { en: "EN", de: "DE", sr: "SR" };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <Monogram className="text-2xl" />
            <span className="hidden sm:block font-body text-[10px] tracking-luxe uppercase text-muted-foreground">Dalila Bahtijarevic · FitLife Coach</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 font-body text-xs tracking-wide-2 uppercase">
            <a href="#coach" className="hover:text-gold transition-colors">Coach</a>
            <a href="#story" className="hover:text-gold transition-colors">Story</a>
            <a href="#why" className="hover:text-gold transition-colors">Why Us</a>
            <a href="#tryout" className="hover:text-gold transition-colors">Try-out</a>
            <a href="#packs" className="hover:text-gold transition-colors">Packs</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-border hover:border-gold/60 font-body text-[10px] tracking-luxe uppercase transition-colors"
              >
                <Globe className="h-3 w-3" /> {langLabel[lang]}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 z-50 bg-background border border-border min-w-[80px] shadow-deep">
                  {(Object.keys(langLabel) as Lang[]).map((l) => (
                    <button key={l} onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 font-body text-[10px] tracking-luxe uppercase hover:bg-secondary hover:text-gold transition-colors ${l === lang ? "text-gold" : ""}`}>
                      {langLabel[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button size="sm" onClick={() => openAuth("login")} variant="outline" className="hidden sm:inline-flex border-foreground/30 hover:border-gold hover:text-gold rounded-none font-body text-[10px] tracking-luxe uppercase bg-transparent">
              Sign In
            </Button>
            <Button size="sm" onClick={() => openAuth("register")} className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-none font-body text-[10px] tracking-luxe uppercase">
              Create Account
            </Button>
            <Menu className="md:hidden h-5 w-5 text-foreground/70" />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="coach" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_52%_52%/0.4),transparent_60%)]" />
          </div>
        </div>

        <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <SectionLabel>Meet Your Coach</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8">
              Prove <br />
              <span className="italic font-normal">Yourself</span> <span className="gold-text">Right.</span>
            </h1>
            <div className="font-script text-3xl text-gold mb-8">Dalila Bahtijarevic</div>
            <p className="font-body text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Join a community dedicated to growth, discipline, and results.
              Your transformation starts with a single decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-none font-body text-xs tracking-luxe uppercase h-14 px-8 shadow-gold">
                <a href="#tryout">Free 3-Day Try-out</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/30 hover:border-gold hover:text-gold rounded-none font-body text-xs tracking-luxe uppercase h-14 px-8 bg-transparent">
                <a href="#packs">Choose Your Pack <ArrowRight className="ml-2 h-3 w-3" /></a>
              </Button>
            </div>
            <div className="mt-16 flex items-center gap-8">
              <div>
                <div className="font-display text-3xl gold-text">25</div>
                <div className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Day Program</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl gold-text">7K+</div>
                <div className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Community</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl gold-text">100%</div>
                <div className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Real Results</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute -inset-4 border border-gold/40" />
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent" />
              <img
                src={heroImg}
                alt="Dalila Bahtijarevic, FitLife coach training in the gym"
                width={1080}
                height={1440}
                className="relative w-full h-full object-cover shadow-deep"
              />
              <div className="absolute -bottom-6 -left-6 bg-background border border-gold/40 px-6 py-4">
                <div className="font-script text-xl text-gold leading-none">Prove yourself</div>
                <div className="font-display italic text-lg leading-tight">right.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="py-10 border-y border-border bg-secondary/40">
        <div className="container mx-auto text-center">
          <p className="font-body text-xs md:text-sm tracking-luxe uppercase text-muted-foreground">
            Strong Body. <span className="text-foreground">Strong Mind.</span> <span className="text-gold">Better Life.</span>
          </p>
        </div>
      </section>

      {/* STORY / VIDEO */}
      <section id="story" className="py-32 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Watch Our Story</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mb-6">See Real <em className="font-normal">Change</em></h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              See how real people are changing their lives one challenge at a time.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto group cursor-pointer">
            <div className="absolute -inset-2 border border-gold/30" />
            <div className="relative aspect-video overflow-hidden">
              <img src={storyImg} alt="Challenge story video" loading="lazy" width={1280} height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button className="h-20 w-20 rounded-full bg-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                </button>
                <span className="mt-6 font-body text-[10px] tracking-luxe uppercase text-foreground/80">Challenge Video</span>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90 font-body text-[10px] tracking-luxe uppercase text-primary-foreground">Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl">Everything you need <br /><em className="font-normal gold-text">to succeed</em></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="group bg-background/60 border-border hover:border-gold/60 transition-all duration-500 p-8 rounded-none relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold transition-all duration-500" />
                <div className="font-display text-5xl gold-text/30 mb-6 opacity-30">0{i + 1}</div>
                <f.icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRY-OUT */}
      <section id="tryout" className="py-32 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(42_52%_52%/0.08),transparent_70%)]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Free 3-Day Try-Out</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              Discover our <br /><em className="font-normal">21 Days Challenge</em>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Follow along for 3 free days via Telegram and see exactly how our challenge works
              while getting to know us and the coaching vibe.
            </p>

            <div className="space-y-5">
              {[
                "Daily Telegram updates so you can follow the rhythm of the challenge.",
                "A first look at our structure, support, and community energy.",
                "A low-threshold way to feel if this is the right start for you.",
              ].map((t, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1 h-5 w-5 border border-gold flex items-center justify-center">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-12 bg-gold text-primary-foreground hover:bg-gold/90 rounded-none font-body text-xs tracking-luxe uppercase h-14 px-10 shadow-gold">
              Try the 3-Day Free Pass
            </Button>
          </div>

          <Card className="bg-secondary/60 border-gold/30 rounded-none p-10 shadow-deep relative">
            <div className="absolute top-0 right-0 px-3 py-1 bg-gold font-body text-[10px] tracking-luxe uppercase text-primary-foreground">I'm Interested</div>
            <div className="font-body text-[10px] tracking-luxe uppercase text-gold mb-3">21 Days Challenge Try-out</div>
            <h3 className="font-display text-3xl mb-2">Follow 3 free days <br /><em className="font-normal">with us on Telegram.</em></h3>
            <div className="gold-divider my-8" />
            <ul className="space-y-4 mb-8">
              {[
                "3 days of Telegram access",
                "Behind-the-scenes look at the challenge flow",
                "Direct feel for our coaching and community",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 font-body text-sm">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="font-script text-xl text-gold">Discipline today. Results tomorrow.</p>
          </Card>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs" className="py-32 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Available Packages</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl">Choose <em className="font-normal gold-text">Your Pack</em></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((p) => (
              <Card key={p.name} className={`relative bg-background border rounded-none overflow-hidden flex flex-col group ${p.popular ? "border-gold shadow-gold lg:-translate-y-4" : "border-border hover:border-gold/40"} transition-all duration-500`}>
                {p.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gold font-body text-[10px] tracking-luxe uppercase text-primary-foreground">Popular</div>
                )}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" width={900} height={700}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur font-body text-[10px] tracking-luxe uppercase text-gold border border-gold/40">Ready</div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl mb-2">{p.name}</h3>
                  <p className="font-body text-sm text-muted-foreground italic mb-6">{p.tagline}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display text-4xl gold-text">{p.price}</span>
                    <span className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground">*</span>
                  </div>

                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">{p.desc}</p>

                  <div className="gold-divider mb-6" />

                  <div className="font-body text-[10px] tracking-luxe uppercase text-gold mb-3">Perfect For</div>
                  <p className="font-body text-sm text-foreground/80 mb-6">{p.perfect}</p>

                  <div className="font-body text-[10px] tracking-luxe uppercase text-gold mb-3">What's Included</div>
                  <ul className="space-y-2 mb-8">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3 font-body text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <Button className={`mt-auto rounded-none font-body text-xs tracking-luxe uppercase h-12 ${p.popular ? "bg-gold text-primary-foreground hover:bg-gold/90" : "bg-foreground text-background hover:bg-gold hover:text-primary-foreground"}`}>
                    Get In Touch
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-10 italic">
            * These are the prices in Belgium. Prices may differ in other countries.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_52%_52%/0.15),transparent_60%)]" />
        </div>
        <div className="container mx-auto text-center max-w-3xl">
          <SectionLabel>Ready to Transform?</SectionLabel>
          <h2 className="font-display text-6xl md:text-7xl mb-8">
            Start Your <br /><em className="font-normal gold-text">Journey Today</em>
          </h2>
          <p className="font-script text-2xl text-gold mb-10">You vs. You.</p>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10">
            One decision is all it takes. Create your account and step into the version of you
            that you've been waiting for.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-none font-body text-xs tracking-luxe uppercase h-14 px-10 shadow-gold">
              Create Account
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/30 hover:border-gold hover:text-gold rounded-none font-body text-xs tracking-luxe uppercase h-14 px-10 bg-transparent">
              Free 3-Day Try-out
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Monogram className="text-xl" />
            <span className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground">Dalila Bahtijarevic · FitLife Coach</span>
          </div>
          <p className="font-script text-lg text-gold">Prove yourself right.</p>
          <p className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground">© 2026 Dalila Bahtijarevic</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
