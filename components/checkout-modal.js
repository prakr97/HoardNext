import { useState } from "react"
import { useCart } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export function CheckoutModal({ open, onOpenChange }) {
  const [step, setStep] = useState("details")
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    otp: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { items, total, clearCart } = useCart()
  const router = useRouter()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (step === "details") {
      // Simulate OTP send
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStep("otp")
    } else if (step === "otp") {
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStep("review")
    }

    setIsLoading(false)
  }

  const handlePlaceOrder = async () => {
    setIsLoading(true)
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    onOpenChange(false)
    router.push("/order-confirmation")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{step === "review" ? "Order Review" : "Checkout"}</DialogTitle>
        </DialogHeader>
        {(step === "details" || step === "otp") && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === "details" && (
              <>
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
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
              <div className="space-y-2">
                <p className="text-sm text-gray-500">We've sent an OTP to your phone number. Please enter it below.</p>
                <Input name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleInputChange} required />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : step === "details" ? (
                "Send OTP"
              ) : (
                "Verify OTP"
              )}
            </Button>
          </form>
        )}
        {step === "review" && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Details:</h3>
              <p>{formData.name}</p>
              <p>{formData.address}</p>
              <p>Pincode: {formData.pincode}</p>
              <p>Phone: {formData.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Order Summary:</h3>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="font-bold mt-2 text-lg">
                <span>Total:</span>
                <span className="float-right">${total().toFixed(2)}</span>
              </div>
            </div>
            <Button onClick={handlePlaceOrder} className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Order
                </>
              ) : (
                "Place COD Order"
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

