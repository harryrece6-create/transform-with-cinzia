import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Globe, User, Sparkles, Check } from "lucide-react";

type Lang = "en" | "de" | "sr";
type Role = "client" | "coach";
type Mode = "register" | "login";

const t = {
  en: {
    welcome: "Welcome",
    tagline: "Redefine your limits",
    email: "Email address",
    emailPh: "name@example.com",
    password: "Password",
    firstName: "First name",
    firstNamePh: "Your first name",
    joinAs: "I am joining as a…",
    client: "Client",
    coach: "Coach",
    create: "Create Account",
    signIn: "Sign In",
    hasAccount: "Already have an account?",
    noAccount: "New here?",
    signInLink: "Sign in",
    signUpLink: "Create one",
    back: "Back",
    terms: "By creating an account, you agree to our Terms & Privacy.",
    bullets: ["Personal coaching", "Daily structure", "Real community"],
  },
  de: {
    welcome: "Willkommen",
    tagline: "Definiere deine Grenzen neu",
    email: "E-Mail-Adresse",
    emailPh: "name@beispiel.com",
    password: "Passwort",
    firstName: "Vorname",
    firstNamePh: "Dein Vorname",
    joinAs: "Ich registriere mich als…",
    client: "Kunde",
    coach: "Coach",
    create: "Konto erstellen",
    signIn: "Anmelden",
    hasAccount: "Bereits ein Konto?",
    noAccount: "Neu hier?",
    signInLink: "Anmelden",
    signUpLink: "Konto erstellen",
    back: "Zurück",
    terms: "Mit der Erstellung deines Kontos akzeptierst du unsere AGB & Datenschutz.",
    bullets: ["Persönliches Coaching", "Tägliche Struktur", "Echte Community"],
  },
  sr: {
    welcome: "Dobrodošli",
    tagline: "Pomeri svoje granice",
    email: "Email adresa",
    emailPh: "ime@primer.com",
    password: "Lozinka",
    firstName: "Ime",
    firstNamePh: "Tvoje ime",
    joinAs: "Pridružujem se kao…",
    client: "Klijent",
    coach: "Trener",
    create: "Kreiraj nalog",
    signIn: "Prijavi se",
    hasAccount: "Već imaš nalog?",
    noAccount: "Novi si ovde?",
    signInLink: "Prijavi se",
    signUpLink: "Napravi nalog",
    back: "Nazad",
    terms: "Kreiranjem naloga prihvataš naše Uslove i Politiku privatnosti.",
    bullets: ["Lično vođenje", "Dnevna struktura", "Prava zajednica"],
  },
};

const langLabel: Record<Lang, string> = { en: "EN", de: "DE", sr: "SR" };

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: Mode;
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

export const AuthDialog = ({ open, onOpenChange, defaultMode = "register", lang, onLangChange }: AuthDialogProps) => {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [role, setRole] = useState<Role>("client");
  const [showPw, setShowPw] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const c = t[lang];

  const isRegister = mode === "register";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-gold/40 bg-background rounded-none [&>button]:hidden">
        <DialogTitle className="sr-only">{isRegister ? c.create : c.signIn}</DialogTitle>
        <DialogDescription className="sr-only">{c.tagline}</DialogDescription>

        <div className="grid md:grid-cols-2 min-h-[640px]">
          {/* LEFT — Brand panel */}
          <div className="relative hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-secondary via-background to-secondary border-r border-gold/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(42_52%_52%/0.18),transparent_60%)]" />
            <div className="absolute -top-20 -right-20 h-80 w-80 border border-gold/20 rotate-12" />

            <div className="relative">
              <div className="font-display font-bold text-5xl inline-flex items-center">
                <span className="gold-text">D</span>
                <span className="mx-1 text-foreground/40 italic font-light">/</span>
                <span className="text-foreground italic">B</span>
              </div>
              <p className="mt-3 font-body text-[10px] tracking-luxe uppercase text-muted-foreground">
                Dalila Bahtijarevic · FitLife Coach
              </p>
            </div>

            <div className="relative space-y-6">
              <div className="h-px w-12 bg-gold" />
              <h3 className="font-display text-4xl leading-tight">
                Prove <em className="font-normal">yourself</em> <span className="gold-text">right.</span>
              </h3>
              <p className="font-script text-2xl text-gold">{c.tagline}</p>
              <ul className="space-y-3 pt-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 font-body text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative font-body text-[10px] tracking-luxe uppercase text-muted-foreground">
              Strong Body · Strong Mind · <span className="text-gold">Better Life</span>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="relative p-8 md:p-10 flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-2 font-body text-[10px] tracking-luxe uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
                {c.back}
              </button>

              <div className="relative">
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-border hover:border-gold/60 font-body text-[10px] tracking-luxe uppercase transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  {langLabel[lang]}
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 z-10 bg-background border border-border min-w-[80px] shadow-deep">
                    {(Object.keys(langLabel) as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { onLangChange(l); setLangOpen(false); }}
                        className={`w-full text-left px-3 py-2 font-body text-[10px] tracking-luxe uppercase hover:bg-secondary hover:text-gold transition-colors ${l === lang ? "text-gold" : ""}`}
                      >
                        {langLabel[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-gold" />
                <span className="font-body text-[10px] tracking-luxe uppercase text-gold">
                  {isRegister ? c.create : c.signIn}
                </span>
              </div>
              <h2 className="font-display text-4xl">
                {c.welcome}<span className="gold-text">.</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-2">{c.tagline}</p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 flex-1">
              {isRegister && (
                <div className="space-y-2">
                  <Label className="font-body text-[10px] tracking-luxe uppercase text-foreground/70">{c.firstName}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={c.firstNamePh}
                      className="pl-10 h-12 rounded-none bg-secondary/40 border-border focus-visible:border-gold focus-visible:ring-0 font-body"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label className="font-body text-[10px] tracking-luxe uppercase text-foreground/70">{c.email}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder={c.emailPh}
                    className="pl-10 h-12 rounded-none bg-secondary/40 border-border focus-visible:border-gold focus-visible:ring-0 font-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-body text-[10px] tracking-luxe uppercase text-foreground/70">{c.password}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-12 rounded-none bg-secondary/40 border-border focus-visible:border-gold focus-visible:ring-0 font-body"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors"
                  >
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isRegister && (
                <div className="space-y-3">
                  <Label className="font-body text-[10px] tracking-luxe uppercase text-foreground/70">{c.joinAs}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["client", "coach"] as Role[]).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`relative h-12 px-4 font-body text-xs tracking-luxe uppercase border transition-all ${
                          role === r
                            ? "bg-foreground text-background border-foreground shadow-gold"
                            : "bg-transparent text-foreground/70 border-border hover:border-gold/60"
                        }`}
                      >
                        {r === "client" ? c.client : c.coach}
                        {role === r && (
                          <Sparkles className="absolute top-1 right-1 h-3 w-3 text-gold" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-13 py-4 bg-gold text-primary-foreground hover:bg-gold/90 rounded-none font-body text-xs tracking-luxe uppercase shadow-gold"
              >
                {isRegister ? c.create : c.signIn}
              </Button>

              {isRegister && (
                <p className="text-[10px] text-muted-foreground text-center font-body leading-relaxed">
                  {c.terms}
                </p>
              )}
            </form>

            {/* Switch mode */}
            <div className="pt-6 mt-6 border-t border-border text-center">
              <span className="font-body text-[10px] tracking-luxe uppercase text-muted-foreground">
                {isRegister ? c.hasAccount : c.noAccount}{" "}
              </span>
              <button
                onClick={() => setMode(isRegister ? "login" : "register")}
                className="font-body text-[10px] tracking-luxe uppercase text-gold hover:underline underline-offset-4"
              >
                {isRegister ? c.signInLink : c.signUpLink}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
