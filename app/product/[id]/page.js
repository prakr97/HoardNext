"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { CartSheet } from "@/components/cart-sheet"
import { QuantitySelector } from "@/components/quantity-selector"
import { Heart, Share2, Star, ShieldCheck, Package, RefreshCw } from "lucide-react"

export default function ProductDetail({ params }) {
  const { products } = useStore()
  const product = products.find((p) => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) return null

  // In a real app, these would come from the product data
  const productImages = [
    ...product.image,
  ].filter(Boolean)

  const features = [
    "Motion sensor activated",
    "Battery operated",
    "Easy installation",
    "Energy efficient",
    "Waterproof design",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar - reuse from main page */}
      <nav className="border-b">
        {/* ... existing navigation code ... */}
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-8">
          <Link href="/" className="text-gray-500 hover:text-orange-500">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-orange-500">
            {product.category}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square border-2 rounded-md overflow-hidden ${
                    selectedImage === index ? "border-orange-500" : "border-transparent"
                  }`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-blue-600">42 ratings</span>
            </div>

            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

            <div className="space-y-4">
              <h3 className="font-semibold">About this item:</h3>
              <ul className="list-disc list-inside space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t pt-4">
              <QuantitySelector product={product} />
              
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4 border-t pt-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-6 w-6 text-green-600" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="h-6 w-6 text-blue-600" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="h-6 w-6 text-orange-600" />
                <span className="text-sm">7 Days Replacement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 