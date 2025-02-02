import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto max-w-md mt-20 text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your order. Your order has been placed and will be delivered soon. We'll send you an email with
        the order details and tracking information.
      </p>
      <Link href="/">
        <Button size="lg">Continue Shopping</Button>
      </Link>
    </div>
  )
}

