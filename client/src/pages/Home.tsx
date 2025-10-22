import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Flower2, Sparkles, Heart } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_perfume_bottle_hero_background_2f0f6cc2.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Marquee text="Welcome to Scent Atelier — Experience the Art of Fragrance | Discover Your Signature Scent Today!" />

      <main className="flex-1">
        <div 
          className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 
              className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
              data-testid="text-hero-title"
            >
              Scent Atelier
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-white/90 mb-8 italic">
              The Art of Fragrance
            </p>
            
            <div className="bg-white/95 dark:bg-black/80 backdrop-blur-sm rounded-md p-8 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-intro">
                Scent Atelier is a fragrance studio dedicated to crafting exquisite, emotion-driven perfumes. 
                Each scent is a masterpiece — designed to evoke memories and moments.
              </p>
            </div>

            <Link href="/products">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-primary/90 hover:bg-primary backdrop-blur-sm border-2 border-primary"
                data-testid="button-explore-collection"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Welcome to Our World
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the timeless elegance of handcrafted fragrances. Every bottle tells a story, 
              every scent creates a memory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Handcrafted</h3>
              <p className="text-sm text-muted-foreground">
                Each perfume is carefully crafted with precision and passion
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Only the finest ingredients for exceptional fragrances
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Timeless Elegance</h3>
              <p className="text-sm text-muted-foreground">
                Fragrances that transcend trends and create lasting impressions
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
