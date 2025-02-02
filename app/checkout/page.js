"use client"

import { useState } from "react"
import { useCart } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const [step, setStep] = useState("details")
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    otp: "",
  })
  const { items, total, clearCart } = useCart()
  const router = useRouter()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === "details") {
      // In a real application, you would send an OTP here
      setStep("otp")
    } else if (step === "otp") {
      // In a real application, you would verify the OTP here
      setStep("review")
    }
  }

  const handlePlaceOrder = () => {
    // In a real application, you would process the order here
    clearCart()
    router.push("/order-confirmation")
  }

  if (step === "details" || step === "otp") {
    return (
      <div className="container mx-auto max-w-md mt-10">
        <h1 className="text-2xl font-bold mb-5">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === "details" && (
            <>
              <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
              <Input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <Input
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          {step === "otp" && (
            <Input name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleInputChange} required />
          )}
          <Button type="submit" className="w-full">
            {step === "details" ? "Send OTP" : "Verify OTP"}
          </Button>
        </form>
      </div>
    )
  }

  if (step === "review") {
    return (
      <div className="container mx-auto max-w-md mt-10">
        <h1 className="text-2xl font-bold mb-5">Order Review</h1>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Delivery Details:</h2>
            <p>{formData.name}</p>
            <p>{formData.address}</p>
            <p>Pincode: {formData.pincode}</p>
            <p>Phone: {formData.phone}</p>
          </div>
          <div>
            <h2 className="font-semibold">Order Summary:</h2>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="font-bold mt-2">
              <span>Total:</span>
              <span>${total().toFixed(2)}</span>
            </div>
          </div>
          <Button onClick={handlePlaceOrder} className="w-full">
            Place COD Order
          </Button>
        </div>
      </div>
    )
  }
}

