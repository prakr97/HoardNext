"use client"

import { SearchIcon, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSheet } from "@/components/cart-sheet"
import { QuantitySelector } from "@/components/quantity-selector"
import { useStore } from "@/lib/store-context"
import { FAQ } from "@/components/FAQ"
import { Testimonials } from "@/components/Testimonials"
import { Services } from "@/components/Services"
import { FlashSale } from "@/components/FlashSale"
import React, { useEffect, useState } from "react"
import { ProductBanners } from "@/components/ProductBanners"


export default function Home() {
  const { categories, products } = useStore()
  const featuredProducts = products.filter((product) => product.featured)
  
  const carouselItems = [
    {
      image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/68da4c44-b4b7-4282-95f1-e548ab110680._CR0%2C0%2C3000%2C600_SX1500_.png",
      title: "Modern Lighting Solutions",
      description: "Transform your home with our contemporary lighting collection",
      buttonText: "Shop Now",
      buttonClass: "bg-blue-500 hover:bg-blue-600",
      showText: false 
    },
    {
      image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/916b14cd-7379-4c83-a60e-e4dbd5f4ba42._CR0%2C0%2C3000%2C600_SX1500_.png",
      title: "Modern Lighting Solutions",
      description: "Transform your home with our contemporary lighting collection",
      buttonText: "Shop Now",
      buttonClass: "bg-blue-500 hover:bg-blue-600",
      showText: false 
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentSlide(prev => prev + 1)
    }, 5000) // Changed to 3 seconds for better viewing

    return () => clearInterval(timer)
  }, [])

  // Handle the infinite loop transition
  useEffect(() => {
    if (currentSlide >= carouselItems.length) {
      // Wait for the transition to complete before resetting
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(0)
      }, 500) // Half a second transition
      return () => clearTimeout(timeout)
    }
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section Carousel */}
      <section className="relative w-full h-auto bg-gray-900 overflow-hidden">
        <div 
          className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={3000}
                height={600}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="relative w-full flex-shrink-0">
            <Image
              src={carouselItems[0].image}
              alt={carouselItems[0].title}
              width={3000}
              height={600}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Flash Sale Section */}
      <FlashSale />

      {/* Categories Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-1 md:mb-2">Trending Categories</h2>
            <p className="text-sm md:text-base text-amber-700">Explore our curated collection of premium products</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg h-[140px] sm:h-[200px] md:h-[250px] lg:h-[300px] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={category.heroImage || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
                    <h3 className="text-base md:text-xl font-semibold text-amber-50 line-clamp-1">{category.name}</h3>
                    <p className="text-xs md:text-sm text-amber-100">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Featured Products</h2>
            <p className="text-amber-700">Discover our most popular and trending items</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 md:gap-x-8 md:gap-y-12">
            {featuredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg md:rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-amber-100">
                  <div className="aspect-[4/3] md:aspect-square relative">
                    <Image src={product.image?.[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <div className="absolute top-1 right-1 md:top-2 md:right-2">
                      <div className="bg-amber-100 text-amber-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        Featured
                      </div>
                    </div>
                  </div>
                  <div className="p-2 md:p-6">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 text-amber-900 line-clamp-1">{product.name}</h3>
                    <p className="text-amber-700 mb-2 md:mb-4 text-xs md:text-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-base md:text-xl font-bold text-amber-800">${product.price}</span>
                      <QuantitySelector product={product} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductBanners />
      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

