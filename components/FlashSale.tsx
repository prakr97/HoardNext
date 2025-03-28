"use client";

import { useState, useEffect } from 'react';
import { ShoppingBag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { QuantitySelector } from '@/components/quantity-selector';

const flashSaleProducts = [
  {
    id: 'flash-1',
    name: 'Smart LED Ceiling Light',
    description: 'Voice-controlled, color-changing smart ceiling light',
    price: 4999,
    originalPrice: 6999,
    discount: 30,
    image: "https://images.unsplash.com/photo-1546435770-a3e736c05a2f?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: 'flash-2',
    name: 'Modern Wall Sconce',
    description: 'Elegant wall-mounted lighting fixture with adjustable brightness',
    price: 2499,
    originalPrice: 3299,
    discount: 25,
    image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: 'flash-3',
    name: 'Designer Table Lamp',
    description: 'Contemporary table lamp with touch control and USB charging',
    price: 1999,
    originalPrice: 2799,
    discount: 28,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3",
    featured: true
  }
];

export function FlashSale() {
  // Set the end date for the sale (2 days from now)
  const calculateEndTime = () => {
    const now = new Date();
    return new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  };

  const [endTime] = useState(calculateEndTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [endTime]);
  
  const CountdownBox = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-lg shadow-md flex items-center justify-center text-2xl sm:text-3xl font-bold text-amber-600">
        {value}
      </div>
      <span className="text-xs mt-2 text-amber-700">{label}</span>
    </div>
  );

  return (
    <section className="py-8 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/5 p-6 md:p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium mb-3">
                Limited Time Offer
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Flash Sale on Premium Products</h2>
              <p className="text-gray-600 text-sm mb-4">
                Don't miss out on our exclusive deals for high-quality products. Up to 30% off
                on selected items for a limited time only.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center text-green-600 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Free shipping
                </div>
                <div className="flex items-center text-green-600 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30-day returns
                </div>
                <div className="flex items-center text-green-600 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  2-year warranty
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-amber-800 mr-1" />
                  <span className="text-amber-800 font-medium text-sm">Deal ends in:</span>
                </div>
                <div className="flex space-x-2">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <CountdownBox value={timeLeft.minutes} label="Minutes" />
                  <CountdownBox value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-4 md:p-6 bg-amber-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {flashSaleProducts.map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id} className="block w-full">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-amber-100 max-w-[180px] mx-auto">
                      <div className="relative w-full" style={{ height: '220px' }}>
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-cover"
                        />
                        <div className="absolute top-1 right-1">
                          <div className="bg-rose-600 text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                            {product.discount}% OFF
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold text-xs mb-0.5 text-amber-900 line-clamp-1">{product.name}</h3>
                        <p className="text-amber-700 mb-1.5 text-[10px] line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-amber-800">₹{product.price}</span>
                            <span className="text-gray-400 text-[10px] line-through">₹{product.originalPrice}</span>
                          </div>
                          <div className="scale-75 origin-right -mr-1">
                            <QuantitySelector product={product} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 