"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, X } from "lucide-react"
import { useStore } from "@/lib/store-context"

export default function TrendingCategoriesAdmin() {
  const { categories, addCategory, updateCategory, deleteCategory } = useStore()

  const handleAddCategory = () => {
    addCategory({
      name: "New Category",
      slug: "new-category",
      description: "",
      heroImage: "",
      count: 0,
    })
  }

  const handleUpdateCategory = (index, updatedCategory) => {
    updateCategory(categories[index].slug, updatedCategory)
  }

  const handleDeleteCategory = (index) => {
    deleteCategory(categories[index].slug)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Trending Categories</h1>
        <Button onClick={handleAddCategory}>
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </div>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={category.name}
                    onChange={(e) => handleUpdateCategory(index, { ...category, name: e.target.value })}
                    placeholder="Category Name"
                  />
                  <Input
                    value={category.slug}
                    onChange={(e) => handleUpdateCategory(index, { ...category, slug: e.target.value })}
                    placeholder="Slug"
                  />
                </div>
                <Textarea
                  value={category.description}
                  onChange={(e) => handleUpdateCategory(index, { ...category, description: e.target.value })}
                  placeholder="Description"
                />
                <Input
                  value={category.heroImage}
                  onChange={(e) => handleUpdateCategory(index, { ...category, heroImage: e.target.value })}
                  placeholder="Hero Image URL"
                />
                <Input
                  type="number"
                  value={category.count}
                  onChange={(e) => handleUpdateCategory(index, { ...category, count: Number.parseInt(e.target.value) })}
                  placeholder="Product Count"
                />
                <div className="flex justify-end">
                  <Button variant="destructive" onClick={() => handleDeleteCategory(index)}>
                    <X className="mr-2 h-4 w-4" /> Delete Category
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

