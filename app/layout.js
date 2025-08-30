"use client"

import "./globals.css"
import { StoreProvider } from "@/lib/store-context"
import { SearchIcon, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSheet } from "@/components/cart-sheet"
import { MovingBanner } from "@/components/MovingBanner"


const metadata = {
  title: "Hoard - Modern Lighting Solutions",
  description: "Discover our collection of thoughtfully curated lighting products",
}

import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const hideNavbar = false // Show navbar on all pages including warranty claim
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col`}>
        <StoreProvider>
          {!hideNavbar && (
            <nav className="border-b">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-2xl font-bold text-orange-500">
                    Hoard
                  </Link>

                  <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      Products
                    </Link>
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      Collections
                    </Link>
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      Deals
                    </Link>
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      Support
                    </Link>
                  </div>

                  <div className="flex items-center space-x-4">
                    <CartSheet />
                  </div>
                </div>
              </div>
            </nav>
          )}
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-gray-100 py-8 mt-auto">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} Hoard. All rights reserved.
                </p>
                <p className="text-gray-600">
                  <span className="inline-flex items-center gap-1">Made with <Heart className="h-5 w-5 text-red-500 fill-red-500" /> in Noida</span>
                </p>
              </div>
            </div>
          </footer>
        </StoreProvider>
      </body>
    </html>
  )
}

