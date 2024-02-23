import React, { useRef } from 'react';
import { testimonials, Testimonial } from './testimonials'; // Adjust the import path as necessary

const TestimonialsCarousel: React.FC = () => {

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -520, behavior: 'smooth' }); // Adjust the scroll amount (-200px) as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 530, behavior: 'smooth' }); // Adjust the scroll amount (200px) as needed
    }
  };

  return (
    <>
     <div className="flex overflow-x-auto scrollbar py-5 space-x-4" ref={carouselRef}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="min-w-max bg-[#e8e8e8] p-8 rounded-lg shadow-md">
          <p className='text-[#381d1d] text-lg font-typewriter font-extrabold'>{testimonial.username}</p>
          <p className="text-[#381d1d] text-sm py-5 font-typewriter font-semibold">{testimonial.comment}</p>
          <p className="text-yellow-600 text-xl">{'★'.repeat(testimonial.rating)}</p>
        </div>
      ))}
    </div>
    <div className='flex justify-center items-center'>
    <button onClick={scrollLeft} className='bg-[#8f293a] hover:bg-[#5d1f20] text-white px-5 py-1 mx-2 my-3 rounded-md '>←</button>
    <button onClick={scrollRight} className="bg-[#8f293a] hover:bg-[#5d1f20] text-white px-5 py-1 mx-2 my-3 rounded-md">→</button>
    </div>
    </>
  );
};

export default TestimonialsCarousel;
