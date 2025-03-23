"use client";

export function MovingBanner() {
  return (
    <div className="bg-amber-50 text-amber-900 py-2 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex shrink-0">
          <span className="inline-block mx-4">🎉 Special Offer: Free Shipping on Orders Over $50!</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">⚡ New Collection Available</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">🎁 Get 10% Off Your First Order</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">📦 Fast & Secure Delivery</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">💫 Premium Quality Products</span>
        </div>
        <div className="flex shrink-0">
          <span className="inline-block mx-4">🎉 Special Offer: Free Shipping on Orders Over $50!</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">⚡ New Collection Available</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">🎁 Get 10% Off Your First Order</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">📦 Fast & Secure Delivery</span>
          <span className="inline-block mx-4 text-amber-300">|</span>
          <span className="inline-block mx-4">💫 Premium Quality Products</span>
        </div>
      </div>
    </div>
  );
} 