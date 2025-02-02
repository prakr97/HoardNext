"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, X } from "lucide-react"
import { useStore } from "@/lib/store-context"

export default function CategoryDetailsAdmin() {
  const { categories, products, addProduct, updateProduct, deleteProduct } = useStore()
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleAddProduct = () => {
    addProduct({
      id: Date.now().toString(),
      name: "New Product",
      description: "",
      price: 0,
      image: [],
      category: selectedCategory,
      featured: false,
    })
  }

  const handleUpdateProduct = (id, updatedProduct) => {
    updateProduct(id, updatedProduct)
  }

  const handleDeleteProduct = (id) => {
    deleteProduct(id)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Category Details</h1>
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-[200px] mb-6">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.slug} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedCategory && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Products in {selectedCategory}</h2>
            <Button onClick={handleAddProduct}>
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </div>
          <div className="space-y-6">
            {products
              .filter((product) => product.category === selectedCategory)
              .map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                        <Input
                          value={product.name}
                          onChange={(e) => handleUpdateProduct(product.id, { ...product, name: e.target.value })}
                          placeholder="Product Name"
                        />
                      <Textarea
                        value={product.description}
                        onChange={(e) => handleUpdateProduct(product.id, { ...product, description: e.target.value })}
                        placeholder="Description"
                      />
                      <Textarea
                        value={product.image?.join('\n') || ''}
                        onChange={(e) => {
                          const urls = e.target.value
                            .split('\n')
                            .map(url => url.trim())
                          handleUpdateProduct(product.id, { ...product, image: urls })
                        }}
                        placeholder="Image URLs (one per line)"
                      />
                      <div className="flex items-center justify-between">
                        <Input
                          type="number"
                          value={product.price}
                          onChange={(e) =>
                            handleUpdateProduct(product.id, { ...product, price: Number.parseFloat(e.target.value) })
                          }
                          className="w-1/3"
                          placeholder="Price"
                        />
                        <div className="flex items-center">
                          <Checkbox
                            id={`featured-${product.id}`}
                            checked={product.featured}
                            onCheckedChange={(checked) =>
                              handleUpdateProduct(product.id, { ...product, featured: checked })
                            }
                          />
                          <label htmlFor={`featured-${product.id}`} className="ml-2">
                            Featured Product
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                          <X className="mr-2 h-4 w-4" /> Delete Product
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

