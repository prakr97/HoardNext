"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    text: "Amazing product at an amazing price! The quality of lighting fixtures exceeded my expectations. Easy ordering process and quick delivery.",
    author: "Sarah Johnson",
    handle: "@sarahj_designs",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    images: [
      'https://m.media-amazon.com/images/I/61HSsK0yz4L.jpg',
      'https://m.media-amazon.com/images/I/71Q4CaSq1fL.jpg',
      'https://m.media-amazon.com/images/I/811gFTcTeoL.jpg'
    ],
    rating: 5,
    platform: "Google Reviews",
    verifiedPurchase: true,
    date: "2 days ago"
  },
  {
    text: "The UI is clean and easy to navigate. Easy as adding items to your cart. Their collection has transformed my home's ambiance completely!",
    author: "Michael Chen",
    handle: "@mchen_home",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    images: [
      'https://m.media-amazon.com/images/I/71Q4CaSq1fL.jpg',
      // 'https://m.media-amazon.com/images/I/61HSsK0yz4L.jpg'
    ],
    rating: 5,
    platform: "Trustpilot",
    verifiedPurchase: true,
    date: "1 week ago"
  },
  {
    text: "Literally no easier way to find premium lighting solutions, and for 10× cheaper. Every homeowner should be using this store!",
    author: "Emma Wilson",
    handle: "@emmaw_interior",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    images: [
      "https://m.media-amazon.com/images/I/811gFTcTeoL.jpg",
      "https://m.media-amazon.com/images/I/71Q4CaSq1fL.jpg"
    ],
    rating: 5,
    platform: "Twitter",
    verifiedPurchase: true,
    date: "3 days ago"
  },
  {
    text: "Hoard is the best investment I made in months. The product quality is exactly what I was searching for. So good to buy products from a trusted source!",
    author: "David Miller",
    handle: "@david_homes",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    images: [
      "https://m.media-amazon.com/images/I/614KP9K78BL.jpg",
      "https://m.media-amazon.com/images/I/61HSsK0yz4L.jpg"
    ],
    rating: 5,
    platform: "Google Reviews",
    verifiedPurchase: true,
    date: "1 month ago"
  },
  {
    text: "Creating my dream home setup with Hoard's lighting collection was a breeze. Their customer service is exceptional!",
    author: "Lisa Zhang",
    handle: "@lisazhang",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61mSvX5lxQL.jpg",
      "https://m.media-amazon.com/images/I/71Q4CaSq1fL.jpg"
    ],
    rating: 5,
    platform: "Trustpilot",
    verifiedPurchase: true,
    date: "2 weeks ago"
  },
  {
    text: "The variety of options available is amazing, and I love how each product comes with detailed specifications. Makes decision-making so much easier!",
    author: "James Anderson",
    handle: "@j_anderson",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61BuJeF67EL.jpg",
      "https://m.media-amazon.com/images/I/61HSsK0yz4L.jpg"
    ],
    rating: 5,
    platform: "Twitter",
    verifiedPurchase: true,
    date: "5 days ago"
  }
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "Google Reviews":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 8.12l-2.78 1.15a3.982 3.982 0 0 0-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
        </svg>
      );
    case "Trustpilot":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    case "Twitter":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      );
    default:
      return null;
  }
};

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">What Our Customers Say</h2>
          <p className="text-amber-700">Real feedback from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto grid-flow-dense">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-auto border border-gray-100 lg:col-start-[calc(3-((index)%3))]"
            >
              <div className="flex items-start justify-between mb-4 shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden bg-amber-100 shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      {testimonial.verifiedPurchase && (
                        <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
                      <span className="flex items-center gap-1">
                        <PlatformIcon platform={testimonial.platform} />
                        {testimonial.platform}
                      </span>
                      <span className="shrink-0">•</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {testimonial.images && testimonial.images.length > 0 && (
                <div className="mb-4 shrink-0">
                  <div className="flex">
                    {/* Thumbnail Column */}
                    {/* {testimonial.images.length > 1 && (
                      <div className="flex flex-col justify-center gap-2">
                        {testimonial.images.slice(1).map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative w-[80px] aspect-square rounded-lg overflow-hidden bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => {
                              setSelectedImage(image);
                              setSelectedTestimonial(testimonial);
                              setCurrentImageIndex(imgIndex + 1);
                            }}
                          >
                            <Image
                              src={image}
                              alt={`Additional review image ${imgIndex + 1} by ${testimonial.author}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )} */}
                    
                    {/* Primary Image */}
                    <div 
                      className="relative rounded-lg overflow-hidden bg-gray-50 cursor-pointer flex-1"
                      onClick={() => {
                        setSelectedImage(testimonial.images[0]);
                        setSelectedTestimonial(testimonial);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <div className="relative h-[300px] w-full">
                        <Image
                          src={testimonial.images[0]}
                          alt={`Review image by ${testimonial.author}`}
                          fill
                          className="object-contain hover:opacity-90 transition-opacity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex mb-3 shrink-0">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed grow">{testimonial.text}</p>

              {testimonial.verifiedPurchase && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-green-600 shrink-0">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Verified Purchase
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedTestimonial && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedTestimonial(null);
              setCurrentImageIndex(0);
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
                  setSelectedTestimonial(null);
                  setCurrentImageIndex(0);
                }}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedTestimonial.images[currentImageIndex]}
                  alt="Enlarged review image"
                  fill
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Navigation Arrows */}
              {selectedTestimonial.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-200 transition-colors z-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === 0 ? selectedTestimonial.images.length - 1 : prev - 1
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
                      setCurrentImageIndex((prev) => 
                        prev === selectedTestimonial.images.length - 1 ? 0 : prev + 1
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
      </div>
    </section>
  );
}