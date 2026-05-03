import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Play, Menu, Globe, Quote, Leaf, Compass, Flame, Moon, Star, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-coach.jpg";
import storyImg from "@/assets/story-video.jpg";
import packMorning from "@/assets/pack-morning.jpg";
import packHydration from "@/assets/pack-hydration.jpg";
import packTotal from "@/assets/pack-total.jpg";
import test1 from "@/assets/testimonial-1.jpg";
import test2 from "@/assets/testimonial-2.jpg";
import test3 from "@/assets/testimonial-3.jpg";
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

const pillars = [
  { icon: Compass, num: "01", title: "Mindset First", desc: "We start with how you think, because every body change begins in the mind. Clarity, calm, and a quiet kind of confidence." },
  { icon: Flame, num: "02", title: "Move with Purpose", desc: "Workouts shaped around your real life. Strong, simple, repeatable — never punishment, always progress." },
  { icon: Leaf, num: "03", title: "Nourish Gently", desc: "Food that fuels your day instead of ruling it. Honest nutrition, easy rituals, no extreme rules." },
  { icon: Moon, num: "04", title: "Recover & Rise", desc: "Rest is part of the work. Sleep, breath, and soft routines that let your body actually transform." },
];

const stories = [
  { name: "Lara M.", weeks: "12 Weeks", img: test1, quote: "I came for the body. I stayed because I finally feel like myself again.", result: "Calmer mornings · Sleeping through the night" },
  { name: "Mira K.", weeks: "8 Weeks",  img: test2, quote: "Dalila gave me a rhythm I can actually live with. Nothing felt like a diet.", result: "Daily practice · More energy · Real food peace" },
  { name: "Sara V.", weeks: "16 Weeks", img: test3, quote: "It's the first program I didn't quit. The community kept me showing up.", result: "Stronger body · Quieter mind · Habits that last" },
];

const journeys = [
  {
    name: "The Reset",
    duration: "21 Days",
    icon: Leaf,
    price: "€65",
    tone: "Begin softly",
    image: packMorning,
    desc: "A gentle 3-week return to yourself. Mornings, meals, and movement, rebuilt without overwhelm.",
    items: ["Daily morning ritual", "Light guided workouts", "Nutrition foundations", "Telegram check-ins"],
  },
  {
    name: "The Transformation",
    duration: "12 Weeks",
    icon: Star,
    price: "€156",
    tone: "Most chosen",
    image: packTotal,
    popular: true,
    desc: "The full coaching journey. Personalized plan, real results, and a community that walks with you.",
    items: ["1:1 onboarding call", "Personal training plan", "Nutrition & supplement guide", "Weekly coach review", "Private community access"],
  },
  {
    name: "The Glow",
    duration: "6 Weeks",
    icon: Flame,
    price: "€95",
    tone: "Energy reset",
    image: packHydration,
    desc: "Lighter days, brighter skin, calmer gut. A focused boost for energy, hydration and inner balance.",
    items: ["Hydration & herbal protocol", "Gentle daily movement", "Skin & sleep rituals", "Group accountability"],
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
            <a href="#method" className="hover:text-gold transition-colors">Method</a>
            <a href="#stories" className="hover:text-gold transition-colors">Stories</a>
            <a href="#journeys" className="hover:text-gold transition-colors">Journeys</a>
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
                <div className="absolute right-0 top-full mt-1 z-50 bg-background border border-border min-w-[80px] shadow-soft">
                  {(Object.keys(langLabel) as Lang[]).map((l) => (
                    <button key={l} onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 font-body text-[10px] tracking-luxe uppercase hover:bg-secondary hover:text-gold transition-colors ${l === lang ? "text-gold" : ""}`}>
                      {langLabel[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button size="sm" onClick={() => openAuth("login")} variant="outline" className="hidden sm:inline-flex border-foreground/30 hover:border-gold hover:text-gold rounded-2xl font-body text-[10px] tracking-luxe uppercase bg-transparent">
              Sign In
            </Button>
            <Button size="sm" onClick={() => openAuth("register")} className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-2xl font-body text-[10px] tracking-luxe uppercase">
              Create Account
            </Button>
            <Menu className="md:hidden h-5 w-5 text-foreground/70" />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="coach" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sand" />
          <div className="absolute -left-32 top-40 h-96 w-96 blob bg-gold/15 animate-float" />
          <div className="absolute right-10 bottom-20 h-72 w-72 blob bg-clay/30 animate-float" style={{ animationDelay: '2s' }} />
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
              <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-2xl font-body text-xs tracking-luxe uppercase h-14 px-8 shadow-gold">
                <a href="#journeys">Find Your Journey</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/30 hover:border-gold hover:text-gold rounded-2xl font-body text-xs tracking-luxe uppercase h-14 px-8 bg-transparent">
                <a href="#method">My Method <ArrowUpRight className="ml-2 h-3 w-3" /></a>
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
                className="relative w-full h-full object-cover shadow-soft"
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
              <Card key={i} className="group bg-background/60 border-border hover:border-gold/60 transition-all duration-500 p-8 rounded-2xl relative">
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

            <Button size="lg" className="mt-12 bg-gold text-primary-foreground hover:bg-gold/90 rounded-2xl font-body text-xs tracking-luxe uppercase h-14 px-10 shadow-gold">
              Try the 3-Day Free Pass
            </Button>
          </div>

          <Card className="bg-secondary/60 border-gold/30 rounded-2xl p-10 shadow-soft relative">
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
              <Card key={p.name} className={`relative bg-background border rounded-2xl overflow-hidden flex flex-col group ${p.popular ? "border-gold shadow-gold lg:-translate-y-4" : "border-border hover:border-gold/40"} transition-all duration-500`}>
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

                  <Button className={`mt-auto rounded-2xl font-body text-xs tracking-luxe uppercase h-12 ${p.popular ? "bg-gold text-primary-foreground hover:bg-gold/90" : "bg-foreground text-background hover:bg-gold hover:text-primary-foreground"}`}>
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
            <Button size="lg" onClick={() => openAuth("register")} className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-2xl font-body text-xs tracking-luxe uppercase h-14 px-10 shadow-gold">
              Create Account
            </Button>
            <Button size="lg" onClick={() => openAuth("login")} variant="outline" className="border-foreground/30 hover:border-gold hover:text-gold rounded-2xl font-body text-xs tracking-luxe uppercase h-14 px-10 bg-transparent">
              Sign In
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

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} defaultMode={authMode} lang={lang} onLangChange={setLang} />
    </div>
  );
};

export default Index;
