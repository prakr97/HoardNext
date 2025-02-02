import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/store"

export function QuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState(false)
  const { addItem } = useCart()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-lg">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={() => {
              addItem({ ...product, quantity })
              setOpen(false)
              setQuantity(1)
            }}
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

