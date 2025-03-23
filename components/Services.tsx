"use client";

import { Truck, RefreshCcw, MapPin, Shield } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on all orders above ₹999"
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day easy return policy"
  },
  {
    icon: MapPin,
    title: "PAN India Service",
    description: "Service network across India"
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "100% secure payment"
  }
];

export function Services() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 