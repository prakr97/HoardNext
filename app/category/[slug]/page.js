"use client"

import { SearchIcon, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSheet } from "@/components/cart-sheet"
import { QuantitySelector } from "@/components/quantity-selector"
import { useStore } from "@/lib/store-context"

export default function CategoryPage({ params }) {
  const { categories, products } = useStore()
  const category = categories.find((c) => c.slug === params.slug)
  const categoryProducts = products.filter((p) => p.category === params.slug)

  const heroDetails = {
      image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/fa7713be-6b33-4013-b276-ecb5da71fcf4._CR0%2C0%2C1920%2C640_SX1920_.png",
      title: "Illuminate Your Space with Style",
      description: "Discover our thoughtfully curated collection of smart night light and more...",
      buttonText: "Explore",
      buttonClass: "bg-orange-500 hover:bg-orange-600",
      showText: true
    }

  if (!category) return null

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
          <div
            key={1}
            className={`absolute inset-0 transition-opacity duration-500 opacity-100` }
          >
            <div className="absolute inset-0">
              <Image
                src={heroDetails.image}
                alt={heroDetails.title}
                fill
                className="object-cover"
              />
            </div>
            {heroDetails.showText && (
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-6">{heroDetails.title}</h1>
                  <p className="text-xl mb-8">{heroDetails.description}</p>
                  {/* <Button size="lg" className={heroDetails.buttonClass}>
                    {heroDetails.buttonText}
                  </Button> */}
                </div>
              </div>
            )}
          </div>
      </section>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
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


    </div>
  )
}

