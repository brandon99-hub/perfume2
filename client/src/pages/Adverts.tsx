import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Sparkles } from "lucide-react";
import campaignImage from "@assets/generated_images/Campaign_advertisement_poster_591c74a9.png";

export default function Adverts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <Marquee text="Limited Edition: Noir Essence now available in exclusive 50ml bottles! | Special Offer: Buy 2 Get 1 Free on all fragrances!" speed={40} />

      <main className="flex-1 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-4" data-testid="text-adverts-title">
              The Essence of Confidence
            </h1>
            <p className="text-xl text-primary font-semibold">
              New 2025 Campaign
            </p>
          </div>

          <div className="mb-12">
            <div className="relative rounded-md overflow-hidden border border-card-border bg-gradient-to-br from-card to-accent/20 p-8">
              <img 
                src={campaignImage}
                alt="Campaign Advertisement"
                className="w-full max-w-2xl mx-auto rounded-md shadow-lg"
                data-testid="img-campaign-poster"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-md border border-card-border p-8 md:p-12 mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Campaign Story
              </h2>
              <p className="text-foreground leading-relaxed mb-6" data-testid="text-campaign-description">
                Our new ad celebrates individuality and expression. Scent Atelier – for those who wear their story.
              </p>
              <p className="text-foreground leading-relaxed">
                This campaign is more than just about fragrance. It's about confidence, self-expression, 
                and the courage to be authentically you. Each scent in our collection is designed to 
                complement your unique personality, enhancing your presence without overwhelming it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 rounded-md p-6 border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Campaign Values</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Celebrating individuality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Empowering self-expression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Embracing authenticity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Creating confidence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/30 rounded-md p-6 border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Featured Products</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Noir Essence - Limited Edition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>L'Amour - Signature Collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Soleil - Summer Special</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>Custom Blends Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
