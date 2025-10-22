import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Product } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import shopImage from "@assets/generated_images/Shop_counter_background_0905fcef.png";

export default function Shop() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productId: "",
    quantity: "1",
    deliveryAddress: "",
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const orderMutation = useMutation({
    mutationFn: async (data: Omit<typeof formData, 'quantity'> & { quantity: number }) => {
      return await apiRequest('POST', '/api/orders', data);
    },
    onSuccess: () => {
      toast({
        title: "Order Submitted!",
        description: "Thank you for your interest! Our team will reach out to confirm your order.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        productId: "",
        quantity: "1",
        deliveryAddress: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      quantity: parseInt(formData.quantity, 10),
    };
    orderMutation.mutate(orderData);
  };

  const shippingFees = [
    { location: "Nairobi", fee: "Free" },
    { location: "Mombasa", fee: "Ksh 200" },
    { location: "Kisumu", fee: "Ksh 250" },
    { location: "Nakuru", fee: "Ksh 150" },
    { location: "Other Counties", fee: "Ksh 300" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div 
          className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${shopImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-shop-title">
              Shop or Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Place your order and experience luxury
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Place Your Order
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-md border border-card-border p-8">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 700 000 000"
                    data-testid="input-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Select Product</Label>
                  <Select
                    required
                    value={formData.productId}
                    onValueChange={(value) => setFormData({ ...formData, productId: value })}
                  >
                    <SelectTrigger data-testid="select-product">
                      <SelectValue placeholder="Choose a fragrance" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem 
                          key={product.id} 
                          value={product.id}
                          data-testid={`option-product-${product.id}`}
                        >
                          {product.name} - Ksh {product.price.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    data-testid="input-quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    data-testid="textarea-address"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={orderMutation.isPending}
                  data-testid="button-submit-order"
                >
                  {orderMutation.isPending ? "Submitting..." : "Submit Order"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Shipping Information
              </h2>

              <div className="bg-card rounded-md border border-card-border overflow-hidden mb-8">
                <table className="w-full" data-testid="table-shipping">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                        Location
                      </th>
                      <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                        Shipping Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shippingFees.map((item, index) => (
                      <tr 
                        key={item.location}
                        className={`border-t border-border ${index % 2 === 0 ? 'bg-card' : 'bg-accent/5'}`}
                      >
                        <td className="px-6 py-3 text-foreground">{item.location}</td>
                        <td className="px-6 py-3 font-semibold text-foreground">{item.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-accent/30 rounded-md p-6 border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Order Process
                </h3>
                <ol className="space-y-3 text-sm text-foreground">
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <span>Fill out the order form with your details</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <span>Our team will contact you to confirm your order</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <span>Complete payment through secure channels</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">4.</span>
                    <span>Receive your fragrance within 2-5 business days</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
