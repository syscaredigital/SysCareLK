import React from 'react'
import NavigationBar from '../components/common/header';
import Hero from '../components/common/HeroSection';
import AboutUs from '../components/common/AboutSection';
import CoursesSection from '../components/common/CourseSection';
import UpcomingCourses from '../components/common/UpcomingCourses';
import CallToAction from '../components/common/ContactSection';
const Home = () => {
  return (
    <div  className="min-h-screen bg-white">
      <NavigationBar/>
       <Hero/>
      <AboutUs/>
      <CoursesSection/>
      <UpcomingCourses/>
      <CallToAction/>
    </div>
  )
}

export default Home
