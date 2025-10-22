import { Link, useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/adverts", label: "Adverts" },
    { path: "/shop", label: "Shop" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md">
              Scent Atelier
            </h1>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                  <span
                    className={`text-sm font-medium cursor-pointer transition-colors px-3 py-2 rounded-md hover-elevate ${
                      location === link.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="p-2 rounded-md hover-elevate active-elevate-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4 flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}>
              <span
                className={`text-sm font-medium cursor-pointer transition-colors px-3 py-2 rounded-md hover-elevate ${
                  location === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
