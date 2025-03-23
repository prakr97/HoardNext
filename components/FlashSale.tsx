"use client";

import { useState, useEffect } from 'react';
import { ShoppingBag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="py-12 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flash Sale on Premium Products</h2>
              <p className="text-gray-600 mb-6">
                Don't miss out on our exclusive deals for high-quality products. Up to 30% off
                on selected items for a limited time only.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center text-green-600 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Free shipping
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30-day returns
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  2-year warranty
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-amber-800 mr-2" />
                  <span className="text-amber-800 font-medium">Deal ends in:</span>
                </div>
                <div className="flex space-x-3">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <CountdownBox value={timeLeft.minutes} label="Minutes" />
                  <CountdownBox value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
              
              <Link href="/products" passHref>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
              </Link>
            </div>
            
            <div className="md:w-2/5 bg-amber-200 p-8 md:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded absolute -mt-6">30% OFF</div>
                  <div className="h-24 sm:h-32 mb-3 overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1546435770-a3e736c05a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80" 
                      alt="Smart Speaker" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold mb-1">Smart Speaker</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-amber-600 font-bold">₹4,999</span>
                      <span className="text-gray-400 text-xs line-through ml-1">₹6,999</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded absolute -mt-6">25% OFF</div>
                  <div className="h-24 sm:h-32 mb-3 overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80" 
                      alt="Wireless Earbuds" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold mb-1">Wireless Earbuds</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-amber-600 font-bold">₹2,499</span>
                      <span className="text-gray-400 text-xs line-through ml-1">₹3,299</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 