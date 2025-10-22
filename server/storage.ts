import { type Product, type InsertProduct, type Order, type InsertOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrders(): Promise<Order[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private orders: Map<string, Order>;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: Product[] = [
      {
        id: "lamour",
        name: "L'Amour",
        type: "Floral",
        price: 5500,
        description: "A blend of rose, jasmine, and vanilla.",
        image: "/products/lamour.png",
      },
      {
        id: "noir-essence",
        name: "Noir Essence",
        type: "Woody",
        price: 6800,
        description: "Deep, musky, and mysterious.",
        image: "/products/noir.png",
      },
      {
        id: "soleil",
        name: "Soleil",
        type: "Citrus",
        price: 4900,
        description: "Bright, fresh, and full of sunshine.",
        image: "/products/soleil.png",
      },
    ];

    initialProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const product = await this.getProduct(insertOrder.productId);
    
    const order: Order = {
      ...insertOrder,
      id,
      productName: product?.name || "Unknown Product",
    };
    
    this.orders.set(id, order);
    return order;
  }

  async getOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }
}

export const storage = new MemStorage();
