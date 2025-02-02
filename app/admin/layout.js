import Link from "next/link"
import { Home, Package, Star, Layers } from "lucide-react"

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Hoard Admin</h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/trending-categories"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                <Layers className="w-5 h-5 mr-3" />
                Trending Categories
              </Link>
            </li>
            <li>
              <Link
                href="/admin/category-details"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                <Package className="w-5 h-5 mr-3" />
                Category Details
              </Link>
            </li>
            <li>
              <Link
                href="/admin/featured-products"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                <Star className="w-5 h-5 mr-3" />
                Featured Products
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}

