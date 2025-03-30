"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { CartSheet } from "@/components/cart-sheet"
import { QuantitySelector } from "@/components/quantity-selector"
import { Heart, Share2, Star, ShieldCheck, Package, RefreshCw, MapPin, Truck, Tag, Info } from "lucide-react"
import { FAQ } from "@/components/FAQ"
import { Input } from "@/components/ui/input"

export default function ProductDetail({ params }) {
  const { products } = useStore()
  const product = products.find((p) => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedReviewImage, setSelectedReviewImage] = useState(null)
  const [currentReviewImageIndex, setCurrentReviewImageIndex] = useState(0)
  const [pincode, setPincode] = useState("")
  const [deliveryDate, setDeliveryDate] = useState(null)

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

  // Sample review data with images
  const reviewImages = [
    'https://m.media-amazon.com/images/I/61HSsK0yz4L.jpg',
    'https://m.media-amazon.com/images/I/71Q4CaSq1fL.jpg',
    'https://m.media-amazon.com/images/I/811gFTcTeoL.jpg',
    'https://m.media-amazon.com/images/I/614KP9K78BL.jpg'
  ]

  // Sample offers data
  const offers = [
    {
      title: "Bank Offer",
      description: "10% instant discount on HDFC Bank Credit Cards, up to ₹1500",
      code: "HDFC10"
    },
    {
      title: "No Cost EMI",
      description: "No Cost EMI available on select cards",
      code: "EMI"
    },
    {
      title: "Special Price",
      description: "Extra 5% off with coupon",
      code: "EXTRA5"
    }
  ]

  // Sample product highlights
  const highlights = [
    "Energy-efficient LED technology saves up to 90% power",
    "Long-lasting performance with 50,000 hours lifespan",
    "Easy installation with plug-and-play design",
    "Uniform light distribution for better illumination",
    "Environment-friendly with no harmful radiation",
    "Premium quality materials for durability"
  ]

  const checkDelivery = () => {
    // Simulate delivery date check
    if (pincode.length === 6) {
      const deliveryDays = Math.floor(Math.random() * 3) + 2
      const date = new Date()
      date.setDate(date.getDate() + deliveryDays)
      setDeliveryDate(date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar - reuse from main page */}
      <nav className="border-b border-gray-100">
        {/* ... existing navigation code ... */}
      </nav>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm breadcrumbs mb-4 sm:mb-8">
          <Link href="/" className="text-gray-600 hover:text-amber-600">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <Link href={`/category/${product.category}`} className="text-gray-600 hover:text-amber-600">
            {product.category}
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Main content wrapper */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-3 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Left Column - Sticky Images */}
            <div className="md:sticky md:top-4" style={{ height: 'fit-content' }}>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden border border-gray-200">
                  <Image
                    src={productImages[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-5 gap-1.5 sm:gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? "border-amber-500" : "border-gray-200"
                      }`}
                    >
                      <Image src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="space-y-4 sm:space-y-6 relative">
              {/* Main content */}
              <div className="space-y-4 sm:space-y-6 pb-20 sm:pb-24">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base text-amber-600">42 ratings</span>
                </div>

                <div className="text-2xl sm:text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</div>

                {/* Services Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200">
                  <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-green-50 to-white border-b sm:border-b-0 sm:border-r border-gray-200">
                    <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">1 Year Warranty</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Hassle-free warranty</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-white border-b sm:border-b-0 sm:border-r border-gray-200">
                    <Package className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">Free Delivery</h4>
                      <p className="text-xs sm:text-sm text-gray-600">On all orders</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-white">
                    <RefreshCw className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600 flex-shrink-0" />
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">Easy Returns</h4>
                      <p className="text-xs sm:text-sm text-gray-600">7 days return policy</p>
                    </div>
                  </div>
                </div>

                {/* Delivery Check */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <span className="text-sm sm:text-base text-gray-700">Check Delivery</span>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      className="w-32 sm:w-40 text-sm"
                    />
                    <Button 
                      onClick={checkDelivery}
                      variant="outline"
                      className="border-amber-200 hover:border-amber-300 hover:bg-amber-50 text-sm"
                    >
                      Check
                    </Button>
                  </div>
                  {deliveryDate && (
                    <div className="flex items-center space-x-2 text-green-600 text-sm">
                      <Truck className="w-4 h-4" />
                      <span>Delivery by {deliveryDate}</span>
                    </div>
                  )}
                </div>

                {/* Offers */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-600" />
                    Available Offers
                  </h3>
                  <div className="space-y-2">
                    {offers.map((offer, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <Tag className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-900">{offer.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-600">{offer.description}</p>
                            {offer.code && (
                              <span className="text-xs sm:text-sm font-medium text-amber-600">
                                Use code: {offer.code}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Highlights */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-600" />
                    Product Highlights
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    {highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Share and Wishlist */}
                <div className="flex space-x-3 sm:space-x-4 justify-end pt-3 sm:pt-4 border-t border-gray-100">
                  <Button variant="outline" size="icon" className="text-gray-600 hover:text-amber-600 border-gray-200">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="text-gray-600 hover:text-amber-600 border-gray-200">
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              {/* Sticky Purchase Options */}
              <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex gap-2 flex-1">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="flex-1 border-amber-200 hover:border-amber-300 hover:bg-amber-50 text-gray-800 font-semibold py-4 sm:py-6 text-sm sm:text-base"
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      size="lg" 
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 sm:py-6 text-sm sm:text-base"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Product Description</h2>
            <div className="prose max-w-none text-sm sm:text-base text-gray-700">
              <p>{product.description}</p>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Product Specifications</h2>
            
            <div className="overflow-hidden border border-gray-200 rounded-lg sm:rounded-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Generic Name</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.genericName || "LED Panel"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Colour</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.color || "Warm White"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Wattage</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.wattage || "6W"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Brightness(Lumens)</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.brightness || "480"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Material</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.material || "PC"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Room Type</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.roomType || "Office, Home"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Voltage</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.voltage || "240 Volts"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Net Quantity</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.quantity || "1 Unit"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Power Source</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.powerSource || "AC"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Item Weight</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.weight || "75g"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Cut-out Size</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.cutoutSize || "80"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Country of Origin</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.origin || "India"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Manufactured and Packed By</td>
                    <td className="px-6 py-3 text-sm text-gray-900">
                      <div>A - Greeco Electronics Pvt Ltd At Plot No 35, Sec-5, Haridwar</div>
                      <div>B - Greeco Electronics Pvt Ltd At Plot No 35, Sec-5, Haridwar</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-sm text-gray-600">Marketed By</td>
                    <td className="px-6 py-3 text-sm text-gray-900">
                      Orient Electric Limited Unit - VIII, Plot No. 7
                      <br />
                      Bhoinagar, Bhubaneshwar, Orissa – 751012
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-600">Included Components</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{product.components || "1 Panel"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-0">Customer Reviews</h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-900">4.8</span>
                <span className="text-sm sm:text-base text-gray-600">(42 reviews)</span>
              </div>
            </div>

            {/* Review Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">All Reviews</Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">5 Star</Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">4 Star</Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">3 Star</Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">2 Star</Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-600">1 Star</Button>
            </div>

            {/* Reviews List */}
            <div className="space-y-4 sm:space-y-6">
              {/* Review with Images */}
              <div className="border-b pb-4 sm:pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">Verified Purchase</span>
                  <span className="text-amber-500">•</span>
                  <span className="text-amber-500 text-sm">3 days ago</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">Perfect product with great quality!</h3>
                <p className="text-sm text-amber-600 mb-3 sm:mb-4">
                  I'm extremely satisfied with this purchase. The build quality is outstanding, 
                  and it works exactly as advertised. The packaging was secure and the delivery 
                  was prompt. Here are some photos of the product in use:
                </p>
                
                {/* Review Images Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {reviewImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative aspect-square cursor-pointer"
                      onClick={() => {
                        setSelectedReviewImage(reviewImages);
                        setCurrentReviewImageIndex(index);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Product review image ${index + 1}`}
                        fill
                        className="object-cover rounded-md hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Reviewer"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">Mike R.</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">Helpful</Button>
                  <Button variant="outline" size="sm" className="text-xs">Report</Button>
                </div>
              </div>

              {/* Review Image Modal */}
              {selectedReviewImage && (
                <div 
                  className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                  onClick={() => {
                    setSelectedReviewImage(null);
                    setCurrentReviewImageIndex(0);
                  }}
                >
                  <div 
                    className="relative max-w-5xl w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button 
                      className="absolute top-4 right-4 text-white hover:text-amber-200 transition-colors z-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedReviewImage(null);
                        setCurrentReviewImageIndex(0);
                      }}
                    >
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={selectedReviewImage[currentReviewImageIndex]}
                        alt="Enlarged review image"
                        fill
                        className="object-contain"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {selectedReviewImage.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-200 transition-colors z-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentReviewImageIndex((prev) => 
                              prev === 0 ? selectedReviewImage.length - 1 : prev - 1
                            );
                          }}
                        >
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-200 transition-colors z-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentReviewImageIndex((prev) => 
                              prev === selectedReviewImage.length - 1 ? 0 : prev + 1
                            );
                          }}
                        >
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Sample Review 1 */}
              <div className="border-b pb-4 sm:pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">Verified Purchase</span>
                  <span className="text-amber-500">•</span>
                  <span className="text-amber-500 text-sm">2 days ago</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">Great product, exactly as described!</h3>
                <p className="text-sm text-amber-600 mb-3 sm:mb-4">
                  I'm really happy with this purchase. The quality is excellent and it works perfectly. 
                  The delivery was fast and the packaging was secure. Would definitely recommend!
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Reviewer"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">John D.</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">Helpful</Button>
                  <Button variant="outline" size="sm" className="text-xs">Report</Button>
                </div>
              </div>

              {/* Sample Review 2 */}
              <div className="border-b pb-4 sm:pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">Verified Purchase</span>
                  <span className="text-amber-500">•</span>
                  <span className="text-amber-500 text-sm">1 week ago</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">Good value for money</h3>
                <p className="text-sm text-amber-600 mb-3 sm:mb-4">
                  The product meets my expectations. It's durable and well-made. 
                  The only reason I gave it 4 stars instead of 5 is that the instructions 
                  could be a bit clearer.
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Reviewer"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">Sarah M.</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">Helpful</Button>
                  <Button variant="outline" size="sm" className="text-xs">Report</Button>
                </div>
              </div>

              {/* Review Pagination */}
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
} 