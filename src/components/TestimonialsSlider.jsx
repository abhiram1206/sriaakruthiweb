import React from 'react';
const TestimonialsSlider = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },{
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique iusto, voluptas suscipit vitae iure reiciendis animi inventore explicabo distinctio rem voluptatibus beatae fugiat nesciunt accusantium? Repellendus dicta veniam recusandae et reprehenderit minima laudantium ipsam optio consequatur itaque quisquam ducimus officiis, ad praesentium ab sed corrupti consectetur libero. Eligendi corporis reiciendis fuga? Veniam, corporis dolorum. Quisquam, architecto. Perspiciatis recusandae earum, corporis pariatur, dolore corrupti harum animi exercitationem modi minus nam! Necessitatibus",
      name: "User name",
      role: "Role",
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-screen max-w-screen mx-auto my-40 flex flex-col gap-10">
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-red-600 text-lg">Clients Testimonials</h2>
        <h3 className="text-3xl font-bold text-white">Service Recipient Says</h3>
        <p className="text-gray-600 text-sm">We deliver you dreams with excellence and intelligence.</p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex gap-4">
          {/* First set of sliding cards */}
          <div className="flex animate-marquee2 whitespace-nowrap">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[300px] px-2"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg h-full">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-none   whitespace-normal">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex animate-marquee2 whitespace-nowrap">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[300px] px-2"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg h-full">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-noone whitespace-normal">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;