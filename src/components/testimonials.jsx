import React from 'react';
import backgroundImage from '../assets/Testimonial.png';
import testimonail1 from '../assets/testimonail1.png';
import testimonail2 from '../assets/testimonial2.png';
import testimonail3 from '../assets/testimonial3.png';
import testimonail4 from '../assets/testimonial4.png';
import testimonail5 from '../assets/testimonial5.png';
import testimonail6 from '../assets/testimonial6.png';

const testimonials = [
  {
    id: 1,
    name: "Vinay V.",
    date: "24 December 2019",
    image: testimonail1,
    rating: 4.5,
    review:
      "Aakruthi Constructions turned our dream home into a reality. From the initial consultation to the final walkthrough, the entire process was seamless. Their team was professional, attentive, and incredibly skilled.",
  },
  {
    id: 2,
    name: "Priya M.",
    date: "12 March 2015",
    image: testimonail2,
    rating: 4.8,
    review:
      "We recently hired Aakruthi Constructions for our home renovation, and we couldn't be more pleased with the results. The team was professional and reliable.",
  },
  {
    id: 3,
    name: "Anjali K.",
    date: "18 August 2020",
    image: testimonail3,
    rating: 4.9,
    review:
      "Their attention to detail and commitment to delivering high-quality work impressed us throughout the project. We highly recommend Aakruthi Constructions for any building project.",
  },
  {
    id: 4,
    name: "Manu T.",
    date: "30 January 2021",
    image: testimonail4,
    rating: 4.7,
    review:
      "Aakruthi Constructions provided us with excellent service, and the end result of our commercial building was above expectations. The professionalism displayed by the team was impressive.",
  },
  {
    id: 5,
    name: "Nehal R.",
    date: "30 January 2021",
    image: testimonail5,
    rating: 4.7,
    review:
      "Aakruthi Constructions provided us with excellent service, and the end result of our commercial building was above expectations. The professionalism displayed by the team was impressive.",
  },
  {
    id: 6,
    name: "Kavya M.",
    date: "30 January 2021",
    image: testimonail6,
    rating: 4.7,
    review:
      "Aakruthi Constructions provided us with excellent service, and the end result of our commercial building was above expectations. The professionalism displayed by the team was impressive.",
  },
];

const TestimonialCard = ({ name, date, image, rating, review }) => (
  <div className="bg-white bg-opacity-90 shadow-lg rounded-3xl max-w-xs p-4 text-left flex flex-col justify-between group transition-transform duration-300 transform hover:scale-105">
    {/* First row: Image with overlay */}
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="rounded-3xl object-cover w-full h-60"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full bg-opacity-50 bg-black px-4 py-3 flex justify-between items-center text-white rounded-t-3xl">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>{rating} ★</p>
      </div>
    </div>

    {/* Second row: Review content */}
    <div className="mt-4 px-3 transition-opacity duration-300 ease-in-out">
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="mt-2 text-gray-700 text-sm">{review}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const firstThreeTestimonials = testimonials.slice(0, 3);
  const nextThreeTestimonials = testimonials.slice(3, 6);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-10 gap-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* First Row of Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {firstThreeTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      {/* Testimonials Heading */}
      <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Testimonials
      </h1>

      {/* Second Row of Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {nextThreeTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
