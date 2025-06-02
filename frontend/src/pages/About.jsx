import React from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.Aboutus} alt=""/>
        <div className='flex flex-col text-xl justify-center gap-6 md:w-1/2 text-gray-700'>
          <p>MakerHub Myanmar is a community-driven platform where makers, students, and DIY enthusiasts can share, learn, and sell innovative projects. From robotics to electronics and creative crafts, we aim to make technology more accessible across Myanmar and beyond.</p>
          <p>We started as a group of students passionate about electronics and robotics. After struggling to find resources, tools, and support in Myanmar, we decided to build something that could help everyone like us.</p>
          
          <b className='text-gray-800'>Our Mission</b>
          <p>At MakerHub Myanmar, our mission is to empower young inventors and creators to build confidently, learn continuously, share knowledge, and earn through innovation.</p>
          
        </div>
      </div>
        <div className='text-xl py-4'>
          <b>What Make Us Unique</b>
        </div>
        <div className='flex flex-col text-flex md:flex-row text-m mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <p className='text-gray-700'>We support students, inventors and creators.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <p className='text-gray-700'>We focus on local innovation and hands-on learning.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <p className='text-gray-700'>We promote open knowledge-sharing.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <p className='text-gray-700'>We allow makers to earn by selling their projects with guides.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <p className='text-gray-700'> We aim to grow a national tech-maker ecosystem.</p>
          </div>
        </div>
        <div className='flex py-2'>
          <img className='border rounded-xl' src={assets.Aboutus2}/>
        </div>
        <h2 className='flex flex-row font-bold py-20 pt-10 text-xl justify-center gap-6 text-center text-gray-700'>"Join us on our journey to make Myanmar a hub of creativity and innovation. Whether you're a builder or a buyer, you're part of something bigger."</h2>
        <Newsletter/>
    </div>
  )
}

export default About