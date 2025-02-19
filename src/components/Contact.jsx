import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import Earth from './canvas/Earth'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'




const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    //5MB-u4GDrgdDg0lyP
//template_bghbod8
//service_y9zzm6m
    emailjs.send(
      'service_y9zzm6m', 
      'template_bghbod8',
      {
        from_name: form.name,
        to_name: 'Arman',
        from_email: form.email,
        to_email: 'arman.moldagulov536@gmail.com',
        message: form.message
      },
      '5MB-u4GDrgdDg0lyP'
    )
    .then((result) => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
      
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col justify-between flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
            type="text" 
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
            rows='7'
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Earth />
      </motion.div>
    </div>
  )
}


export default SectionWrapper({ Component: Contact, idName: 'contact'})
