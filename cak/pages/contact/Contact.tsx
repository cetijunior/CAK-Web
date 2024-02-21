import React from 'react';
import { Phone, Map, Mail } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Footer from '../Footer/Footer';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If you want to perform some action on success, you can do it here
        console.log('Form submitted successfully');
        reset(); // Reset the form after successful submission
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      <div className='bg-emerald-900 h-screen flex flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
        <div className='flex flex-col space-y-10 mt-[100px]'>
          <h4 className='text-4xl font-semibold text-center text-white'>
            Want to hear more about us? <span className='underline decoration-emerald-300'>Lets Talk!</span>
          </h4>
          <div className='space-y-5'>
            <div className='flex items-center space-x-5 justify-center'>
              <Phone className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>+12343224</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Mail className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>email@example.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Map className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>123 Main Street</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' className='contactInput text-black' type='text' />
              <input {...register('email')} placeholder='Email' className='contactInput text-black' type='email' />
            </div>

            <input {...register('subject')} placeholder='Subject' className='contactInput text-black' type='text' />

            <textarea {...register('message')} placeholder='Message' className='contactInput text-black' />

            <button type='submit' className='bg-emerald-300 py-5 px-10 rounded-md text-black font-bold'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;