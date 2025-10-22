import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import workshopImage from "@assets/generated_images/Perfume_atelier_workshop_background_f87dc6d2.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div 
          className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${workshopImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-about-title">
              Our Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The Art of Creating Timeless Fragrances
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-card rounded-md border border-card-border p-8 md:p-12 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              A Passion for Olfactory Art
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed" data-testid="text-about-story">
              <p>
                Founded in 2025, Scent Atelier emerged from a passion for olfactory art. 
                Each bottle is handcrafted with precision, blending tradition and innovation 
                to create timeless fragrances.
              </p>
              <p>
                Our journey began in a small workshop, where our master perfumer spent years 
                perfecting the delicate balance between natural ingredients and modern techniques. 
                Today, we continue this legacy, creating scents that tell stories and evoke emotions.
              </p>
              <p>
                Every fragrance in our collection is a labor of love, carefully composed to capture 
                the essence of memories, moments, and dreams. We believe that a perfume is not just 
                a scent, but an invisible accessory that completes your presence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-accent/30 rounded-md p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Philosophy</h3>
              <p className="text-foreground leading-relaxed">
                We believe in the power of scent to transform moments into memories. 
                Our perfumes are designed to be more than fragrances – they are experiences, 
                stories waiting to be told through the language of scent.
              </p>
            </div>

            <div className="bg-accent/30 rounded-md p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Craft</h3>
              <p className="text-foreground leading-relaxed">
                Each perfume undergoes months of development, from sourcing the finest raw materials 
                to the final bottling. Our artisans work with dedication to ensure every detail 
                meets our exacting standards of excellence.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Experience the Difference
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our collection to discover fragrances that speak to your soul, 
              or reach out to create a custom scent uniquely yours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/products">
                <Button size="lg" data-testid="button-view-products">
                  View Our Products
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" data-testid="button-back-home">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
