import React from 'react'
import NavigationBar from '../components/common/header';
import Hero from '../components/common/HeroSection';
import AboutUs from '../components/common/AboutSection';
import TrainingCourses from '../components/common/CourseSection';
const Home = () => {
  return (
    <div  className="min-h-screen bg-white">
      <NavigationBar/>
       <Hero/>
      <AboutUs/>
      <TrainingCourses/>
    </div>
  )
}

export default Home
