import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PromoFrame } from "@/components/PromoFrame";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import lamourImage from "@assets/generated_images/L'Amour_floral_perfume_bottle_5bc1d7c3.png";
import noirImage from "@assets/generated_images/Noir_Essence_woody_perfume_e46f0709.png";
import soleilImage from "@assets/generated_images/Soleil_citrus_perfume_bottle_00ba1e93.png";

export default function Products() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const productImages: Record<string, string> = {
    "lamour": lamourImage,
    "noir-essence": noirImage,
    "soleil": soleilImage,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/10">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4" data-testid="text-products-title">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted perfumes, each telling its own unique story
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading our collection...</p>
              </div>
            ) : (
              <div className="bg-card rounded-md border border-card-border overflow-hidden">
                <table className="w-full" data-testid="table-products">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">Image</th>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">Product Name</th>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">Type</th>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">Price</th>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr 
                        key={product.id}
                        id={product.id}
                        className={`border-t border-border ${index % 2 === 0 ? 'bg-card' : 'bg-accent/5'} hover-elevate`}
                        data-testid={`row-product-${product.id}`}
                      >
                        <td className="px-6 py-4">
                          <img 
                            src={productImages[product.id] || product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-md"
                            data-testid={`img-product-${product.id}`}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <a 
                            href={`#${product.id}`}
                            className="font-serif text-lg font-semibold text-primary hover:underline"
                            data-testid={`link-product-${product.id}`}
                          >
                            {product.name}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{product.type}</td>
                        <td className="px-6 py-4 font-semibold text-foreground">Ksh {product.price.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{product.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <PromoFrame 
              title="Special Offer"
              description="Buy 2 Get 1 Free on all fragrances this month!"
            />
            <PromoFrame 
              title="New Arrivals"
              description="Limited edition scents now available. Shop before they're gone!"
            />
          </div>
        </div>

        <div className="space-y-12">
          {products.map((product) => (
            <div 
              key={`detail-${product.id}`}
              id={`detail-${product.id}`}
              className="bg-card rounded-md border border-card-border p-8"
              data-testid={`section-product-detail-${product.id}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={productImages[product.id] || product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h2>
                  <p className="text-primary font-semibold mb-4">{product.type} Fragrance</p>
                  <p className="text-2xl font-bold text-foreground mb-6">
                    Ksh {product.price.toLocaleString()}
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-serif text-lg font-semibold mb-3">Product Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Volume: 50ml / 100ml available</li>
                      <li>• Long-lasting fragrance</li>
                      <li>• Premium quality ingredients</li>
                      <li>• Handcrafted with care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
