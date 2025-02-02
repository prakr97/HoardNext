"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useStore } from "@/lib/store-context"

export default function FeaturedProductsAdmin() {
  const { products, updateProduct } = useStore()
  const featuredProducts = products.filter((product) => product.featured)

  const removeFromFeatured = (productId) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      updateProduct(productId, { ...product, featured: false })
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <Button variant="outline" onClick={() => removeFromFeatured(product.id)}>
                  Remove from Featured
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

