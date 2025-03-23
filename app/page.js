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
import React from "react"

export default function Home() {
  const { categories, products } = useStore()
  const featuredProducts = products.filter((product) => product.featured)
  
  // Add carousel data with showText option
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

  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  console.log(categories,'------categories')
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Carousel */}
      <section className="relative w-full h-auto bg-gray-900">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`relative transition-opacity duration-500 ${
              index === currentSlide ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={3000}
              height={600}
              className="w-full h-auto"
              priority={index === 0}
            />
          </div>
        ))}
      </section>

      {/* Services Section */}
      <Services />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg h-[200px] sm:h-[250px] md:h-[300px]"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={category.heroImage || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square relative">
                    <Image src={product.image?.[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">${product.price}</span>
                      <QuantitySelector product={product} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

