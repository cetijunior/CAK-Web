import React from 'react';
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

function Contact({ }: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pathfinders306@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;;
  };

  return (
    <section id='contacts'>
      <div className='bg-emerald-900 h-screen flex flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
        <div className='flex flex-col space-y-10 mt-[100px]'>
          <h4 className='text-4xl font-semibold text-center text-white'>
            Want to hear more about us? <span className='underline decoration-emerald-300'>Lets Talk!</span>
          </h4>
          <div className='flex flex-col space-x-8 sm:flex-row'>
            <div className='flex items-center space-x-5 justify-center'>
              <Phone className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>+12343224</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Mail className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>pathfinders306@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <Map className='text-emerald-300 h-7 w-7 animate-pulse' />
              <p className='text-2xl text-white'>123 Main Street</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex px-4 flex-col space-y-2 w-auto mx-auto'>
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