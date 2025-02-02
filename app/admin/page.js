import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Package, Star } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Hoard Admin</h1>
      <p className="text-lg text-gray-600 mb-8">
        Manage your store's content and products from this central dashboard.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trending Categories</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 Categories</div>
            <p className="text-xs text-muted-foreground">Manage your store's main categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120 Products</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Products</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Products</div>
            <p className="text-xs text-muted-foreground">Highlighted on the homepage</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

