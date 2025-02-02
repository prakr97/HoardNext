"use client"

import { createContext, useContext, useState, useEffect } from "react"

const StoreContext = createContext()

export function StoreProvider({ children }) {
  // Initialize state from localStorage or fall back to default values
  const [categories, setCategories] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCategories = localStorage.getItem('categories')
      return savedCategories ? JSON.parse(savedCategories) : [
        {
            "name": "Smart Lights",
            "slug": "smart-lights",
            "description": "Intelligent lighting solutions for the modern home",
            "heroImage": "https://m.media-amazon.com/images/I/615pVwt1rNL._AC_UF1000,1000_QL80_FMwebp_.jpg",
            "count": 24
        },
        {
            "name": "Smiley Lights",
            "slug": "ceiling-lights",
            "description": "Elegant ceiling fixtures for every room",
            "heroImage": "https://m.media-amazon.com/images/I/51TzpXs08fL._SX522_.jpg",
            "count": 18
        },
        {
            "name": "Devine Series",
            "slug": "wall-lights",
            "description": "Stylish wall-mounted lighting options",
            "heroImage": "https://m.media-amazon.com/images/I/71OPmZ0JuIL._SX679_.jpg",
            "count": 12
        },
        {
            "name": "Others",
            "slug": "outdoor-lights",
            "description": "Durable and attractive outdoor lighting solutions",
            "heroImage": "https://m.media-amazon.com/images/I/613irfk32-L._SX466_.jpg",
            "count": 16
        }
    ]
    }
    return []
  })

  const [products, setProducts] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products')
      return savedProducts ? JSON.parse(savedProducts) : [
        {
            "id": "1",
            "name": "Smart LED Strip",
            "description": "Color changing LED strip with app control",
            "price": 49.99,
            "image": [
                "https://m.media-amazon.com/images/I/613irfk32-L._SX466_.jpg",
                "https://m.media-amazon.com/images/I/81WCfe7oCXL._SX342_.jpg",
                "https://m.media-amazon.com/images/I/51m+1Rp+aLL._SX342_.jpg",
                "https://m.media-amazon.com/images/I/718wBLnxHsL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61gb89-XNsL._SL1500_.jpg"
            ],
            "category": "smart-lights",
            "featured": true
        },
        {
            "id": "2",
            "name": "Motion Sensor Light",
            "description": "Automatic LED night light with motion detection",
            "price": 29.99,
            "image": [
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400"
            ],
            "category": "smart-lights",
            "featured": true
        },
        {
            "id": "3",
            "name": "Pendant Light",
            "description": "Modern hanging light fixture for dining areas",
            "price": 89.99,
            "image": [
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400"
            ],
            "category": "ceiling-lights",
            "featured": true
        },
        {
            "id": "4",
            "name": "Wall Sconce",
            "description": "Contemporary wall light with adjustable head",
            "price": 59.99,
            "image": [
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400",
                "/placeholder.svg?height=400&width=400"
            ],
            "category": "wall-lights",
            "featured": true
        }
    ]
    }
    return []
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory])
  }

  const updateCategory = (slug, updatedCategory) => {
    setCategories(categories.map((cat) => (cat.slug === slug ? updatedCategory : cat)))
  }

  const deleteCategory = (slug) => {
    setCategories(categories.filter((cat) => cat.slug !== slug))
  }

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((prod) => (prod.id === id ? updatedProduct : prod)))
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id))
  }

  return (
    <StoreContext.Provider
      value={{
        categories,
        products,
        addCategory,
        updateCategory,
        deleteCategory,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}

