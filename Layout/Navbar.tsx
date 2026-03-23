"use client";
import { useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavLinkList = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto flex px-6 justify-between items-center">
        <Link
          href="/"
          className="font-bold tracking-tight text-xl hover:text-primary transition-colors"
        >
          MIB<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navbar */}

        <div>
          <div>
            {/* mapping through the navlinks to render them on the web page */}
            <ul className="hidden sm:flex flex-row text-center gap-1 glass rounded-full px-2 py-1 ">
              {NavLinkList.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}

        <div>
          <Button
            size="sm"
            className="hidden sm:block"
          >
            Contact Me
          </Button>
        </div>

        <button className="sm:hidden p-2 text-foreground transition-all"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {IsMobileMenuOpen ? <X size={24 }/> : <Menu size={24}/>}
        </button>
      </nav>
      {/* Mobile Menu Section Navbar */}
      {IsMobileMenuOpen && (
        <div className="sm:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {/* Navbar for mobile menu */}
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NavLinkList.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-lg text-muted-foreground  hover:text-foreground py-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}
