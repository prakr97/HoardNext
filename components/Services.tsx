"use client";

import { Truck, RefreshCcw, MapPin, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on all orders above ₹999",
    isMobile: true
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day easy return policy",
    isMobile: true
  },
  {
    icon: MapPin,
    title: "PAN India Service",
    description: "Service network across India",
    isMobile: false
  },
  {
    icon: Shield,
    title: "1 Year Warranty",
    description: "100% secure payment",
    isMobile: true
  }
];

export function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleServices = isMobile 
    ? services.filter(service => service.isMobile)
    : services;

  return (
    <section className="py-4 sm:py-8 md:py-12 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 sm:p-3 md:p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1 sm:mb-2 md:mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-600" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold mb-0.5 sm:mb-1 md:mb-2">{service.title}</h3>
              <p className="hidden md:block text-xs md:text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 