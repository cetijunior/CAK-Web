import React, { useState } from 'react';
import { Phone, Map, Mail } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Footer from '../Footer/Footer';
import { Props } from 'next/script';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);

    // Simulated email send operation
    setTimeout(() => {
      window.location.href = `mailto:pathfinders306@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Hi, my name is ${encodeURIComponent(formData.name)}. ${encodeURIComponent(formData.message)} (${encodeURIComponent(formData.email)})`;
      reset();
      setIsSubmitting(false);
    }, 2000);
  };


  return (
    <section id='contacts'>
      <div className='bg-[#f8edeb] h-screen flex flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
        <div className='flex flex-col space-y-16 mt-[100px]'>
          <h1 className='text-6xl font-bold text-center text-[#932b2d]'>Contact Us:</h1>
          <h4 className='text-3xl font-semibold text-center text-[#932b2dab]'>
            Want to hear more about us? <span className='underline text-[#932b2d] decoration-[#932b2d]'>Lets Talk!</span>
          </h4>
          <div className='flex flex-col space-x-8 sm:flex-row'>
            <div className='flex items-center space-x-5 justify-center'>
              <Phone className='text-[#5d1f20] h-7 w-7 animate-pulse' />
              <p className='text-2xl text-[#932b2dab]'>+12343224</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Mail className='text-[#5d1f20] h-7 w-7 animate-pulse' />
              <p className='text-2xl text-[#932b2dab]'>pathfinders306@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Map className='text-[#5d1f20] h-7 w-7 animate-pulse' />
              <p className='text-2xl text-[#932b2dab]'>123 Main Street</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex px-4 flex-col space-y-2 w-auto mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name', { required: "Name is required" })} placeholder='Name' className={`contactInput text-black ${errors.name ? 'border-red-500' : ''}`} type='text' />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}

              <input {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })} placeholder='Email' className={`contactInput text-black ${errors.email ? 'border-red-500' : ''}`} type='email' />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}

            </div>

            <input {...register('subject', { required: "Subject is required" })} placeholder='Subject' className={`contactInput text-black ${errors.subject ? 'border-red-500' : ''}`} type='text' />
            {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject.message}</p>}

            <textarea {...register('message', { required: "Message is required" })} placeholder='Message' className={`contactInput text-black ${errors.message ? 'border-red-500' : ''}`} />
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}

            <button type='submit' disabled={isSubmitting || Object.keys(errors).length > 0} className={`bg-[#d5bcb7] ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#932b2d] hover:duration-500'} py-5 px-10 rounded-md text-black font-bold transition duration-300 ease-in-out`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;