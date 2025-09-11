import React from 'react'
import NavigationBar from '../components/common/header';
import Hero from '../components/common/HeroSection';
import AboutUs from '../components/common/AboutSection';
import CoursesSection from '../components/common/CourseSection';
const Home = () => {
  return (
    <div  className="min-h-screen bg-white">
      <NavigationBar/>
       <Hero/>
      <AboutUs/>
      <CoursesSection/>
    </div>
  )
}

export default Home
