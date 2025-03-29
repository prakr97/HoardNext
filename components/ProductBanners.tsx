"use client";

import Image from "next/image";
import Link from "next/link";

const banners = [

  {
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6e23e91c-0d8a-4e7d-85ce-6ca0577af7c2.__CR0,0,970,300_PT0_SX970_V1___.png",
    title: "Outdoor Lighting",
    description: "Illuminate your outdoor spaces with style and durability",
    link: "/category/outdoor-lighting",
    buttonText: "Discover",
    textPosition: "left"
  },
  {
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0b96337c-0d18-4e26-9125-3449bcd62970.__CR0,0,970,300_PT0_SX970_V1___.jpg",
    title: "Modern Pendant Lights",
    description: "Elevate your space with our contemporary lighting collection",
    link: "/category/pendant-lights",
    buttonText: "Shop Now",
    textPosition: "left"
  },
  {
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3b8070ed-2c7f-4bb9-9bce-e95a851096a0.__CR0,0,970,300_PT0_SX970_V1___.png",
    title: "Smart Lighting Solutions",
    description: "Control your home's ambiance with our smart lighting range",
    link: "/category/smart-lighting",
    buttonText: "Explore",
    textPosition: "right"
  },
];
const banners1 = [
  {
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Modern Pendant Lights",
    description: "Elevate your space with our contemporary lighting collection",
    link: "/category/pendant-lights",
    buttonText: "Shop Now",
    textPosition: "left"
  },
  {
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Smart Lighting Solutions",
    description: "Control your home's ambiance with our smart lighting range",
    link: "/category/smart-lighting",
    buttonText: "Explore",
    textPosition: "right"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    title: "Outdoor Lighting",
    description: "Illuminate your outdoor spaces with style and durability",
    link: "/category/outdoor-lighting",
    buttonText: "Discover",
    textPosition: "left"
  }
];

export function ProductBanners() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">Featured Collections</h2>
          <p className="text-amber-700 text-sm md:text-base">Explore our curated lighting collections</p>
        </div>
        
        <div className="space-y-4 md:space-y-8">
          {banners.map((banner, index) => (
            <Link 
              key={index} 
              href={banner.link}
              className={`group block relative h-[100px] sm:h-[200px] md:h-[200px] lg:h-[450px] rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
                <div className="absolute inset-0 " />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 