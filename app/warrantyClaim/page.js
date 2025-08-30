"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TrackOrderPage() {
  const [formData, setFormData] = useState({
    orderNo: "",
    platform: "",
    phone: "",
    name: "",
    email: "",
    address: "",
  })
  
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) 

  const validateForm = () => {
    const newErrors = {}
    
    // if (!formData.orderNo.match(/^[a-zA-Z0-9]{5,}$/)) {
    //   newErrors.orderNo = "Order number must be at least 5 alphanumeric characters"
    // }

    if (!formData.platform) {
      newErrors.platform = "Please select a platform"
    }

    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.name.match(/^[a-zA-Z\s]{3,}$/)) {
      newErrors.name = "Name must be at least 3 characters long and contain only letters"
    }

    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePlatformChange = (platform) => {
    setFormData({ ...formData, platform })
  }

  const fillDummyData = () => {
    setFormData({
      orderNo: "ORD12345",
      platform: "amazon",
      phone: "9876543210",
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street, Sector 15, Noida, Uttar Pradesh 201301",
    })
    setErrors({}) 
    setSubmitStatus(null) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {

      const response = await fetch(`https://sheetdb.io/api/v1/a3dz2tla6x4kk`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              data: [
                  formData
              ]
          })
      })
      
      if (!(response.created===1)) {
        throw new Error(`Failed to submit warranty claim: ${response.status}`)
      }
      
      setSubmitStatus('success')
    
      setFormData({
        orderNo: "",
        platform: "",
        phone: "",
        name: "",
        email: "",
        address: "",
      })
    } catch (error) {
      console.error('Error submitting warranty claim:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`min-h-screen bg-gray-200 ${roboto.className}`}>
      <div className="container mx-auto max-w-xl py-12 px-4">
        <div className="space-y-6 bg-white shadow-md border border-gray-100 rounded-lg p-8">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Warranty Claim</h1>
                <p className="text-base text-gray-600">
                  Please enter your order details below to submit a warranty claim
                </p>
              </div>
              {/* <Button
                type="button"
                variant="outline"
                onClick={fillDummyData}
                className="text-sm px-3 py-1.5 border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Fill Test Data
              </Button> */}
            </div>
          </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="orderNo" className="text-base font-semibold">Order Number *</Label>
            <Input
              id="orderNo"
              name="orderNo"
              placeholder="Enter your order number"
              value={formData.orderNo}
              onChange={handleInputChange}
              required
              className={`w-full text-base ${errors.orderNo ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-400'}`}
            />
            {errors.orderNo && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.orderNo}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label className="text-base font-semibold">Platform *</Label>
            <div className={`flex space-x-4 ${errors.platform ? 'border border-red-300 rounded-md p-2' : ''}`}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="amazon"
                  checked={formData.platform === "amazon"}
                  onCheckedChange={() => handlePlatformChange("amazon")}
                />
                <Label htmlFor="amazon" className="font-normal">Amazon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="flipkart"
                  checked={formData.platform === "flipkart"}
                  onCheckedChange={() => handlePlatformChange("flipkart")}
                />
                <Label htmlFor="flipkart" className="font-normal">Flipkart</Label>
              </div>
            </div>
            {errors.platform && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.platform}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={`w-full text-base ${errors.phone ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-400'}`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full text-base ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-400'}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full text-base ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-400'}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-base font-semibold">Address</Label>
            <Textarea
              id="address"
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full text-base min-h-[100px]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle2 className="h-5 w-5" />
              <p>Warranty claim submitted successfully!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle className="h-5 w-5" />
              <p>Failed to submit warranty claim. Please try again.</p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-base font-medium transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Warranty Claim'}
          </Button>
        </form>
        </div>
      </div>
    </div>
  )
}
