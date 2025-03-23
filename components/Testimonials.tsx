"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "The quality of products and attention to detail is exceptional. Every piece I've ordered has exceeded my expectations. My clients are always impressed!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Outstanding customer service and beautiful products. The team went above and beyond to help me find the perfect lighting solutions for my home.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "I've been using their products for multiple projects. The consistency in quality and design is remarkable. Highly recommended for professionals.",
    rating: 5
  }
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Discover why customers love shopping with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-600">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                
                <blockquote>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 