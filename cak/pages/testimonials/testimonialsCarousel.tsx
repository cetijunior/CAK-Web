import React from 'react';
import { testimonials, Testimonial } from './testimonials'; // Adjust the import path as necessary

const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="flex overflow-x-auto scrollbar py-4 space-x-4"> {/*the scrollbar is hidden, an arrow would be better*/}
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="min-w-max bg-emerald-500 p-4 rounded-lg shadow-md">
          <p className='text-white-800 text-lg'>{testimonial.username}</p>
          <p className="text-gray-800 text-sm">{testimonial.comment}</p>
          <p className="text-yellow-400">{'★'.repeat(testimonial.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCarousel;
