"use client"

import { SearchIcon, Heart, Star, ShieldCheck, Package, RefreshCw, Tag, Info, Filter, SortAsc, ArrowRight, Mail, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSheet } from "@/components/cart-sheet"
import { QuantitySelector } from "@/components/quantity-selector"
import { useStore } from "@/lib/store-context"
import { FAQ } from "@/components/FAQ"
import { useState } from "react"
import { Testimonials } from "@/components/Testimonials"

export default function CategoryPage({ params }) {
  const { categories, products } = useStore()
  const category = categories.find((c) => c.slug === params.slug)
  const categoryProducts = products.filter((p) => p.category === params.slug)

  const heroDetails = {
    image: category?.heroImage || "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/fa7713be-6b33-4013-b276-ecb5da71fcf4._CR0%2C0%2C1920%2C640_SX1920_.png",
    title: category?.name || "Illuminate Your Space with Style",
    description: category?.description || "Discover our thoughtfully curated collection of smart night light and more...",
    buttonText: "Explore",
    buttonClass: "bg-orange-500 hover:bg-orange-600",
    showText: true
  }

  // Sample category features
  const features = [
    "Wide range of styles and designs",
    "Energy-efficient options",
    "Easy installation",
    "Long-lasting performance",
    "Modern technology integration",
  ]

  // Sample category benefits
  const benefits = [
    {
      title: "Quality Assurance",
      description: "All products undergo rigorous quality checks",
      icon: ShieldCheck
    },
    {
      title: "Fast Delivery",
      description: "Quick and reliable shipping across the country",
      icon: Package
    },
    {
      title: "Easy Returns",
      description: "30-day hassle-free return policy",
      icon: RefreshCw
    }
  ]

  // Featured Collection
  const featuredCollection = {
    title: "Featured Collection",
    description: "Handpicked selection of our best-selling {category.name}",
    products: categoryProducts.slice(0, 4).map(product => ({
      ...product,
      image: product.image?.[0] || "/placeholder.svg",
      rating: 4.8,
      reviews: 42
    }))
  }

  if (!category) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 transition-opacity duration-500 opacity-100">
          <div className="absolute inset-0">
            <Image
              src={heroDetails.image}
              alt={heroDetails.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          {heroDetails.showText && (
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{heroDetails.title}</h1>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8">{heroDetails.description}</p>
                <Button size="lg" className={heroDetails.buttonClass}>
                  {heroDetails.buttonText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category Features */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-2">Why Choose Our {category.name}</h2>
            <p className="text-sm sm:text-base text-amber-700">Discover the benefits of our premium collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <benefit.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{featuredCollection.title}</h2>
              <p className="text-sm sm:text-base text-gray-600">{featuredCollection.description}</p>
            </div>
            <Link href="#all-products" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredCollection.products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="aspect-square relative">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {product.featured && (
                      <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <Testimonials cardsCount={3}/>

      {/* Category Features List */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Key Features</h2>
            <p className="text-sm sm:text-base text-gray-600">Discover what makes our {category.name} special</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <p className="text-sm sm:text-base text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

