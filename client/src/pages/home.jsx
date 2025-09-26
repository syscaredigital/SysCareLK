import React from 'react'
import NavigationBar from '../components/common/header';
import Hero from '../components/common/HeroSection';
import AboutUs from '../components/common/AboutSection';
import CoursesSection from '../components/common/CourseSection';
import UpcomingCourses from '../components/common/UpcomingCourses';
import CallToAction from '../components/common/ContactSection';
import EventsSection from '../components/common/EventSection';
import BlogSection from '../components/common/BlogSection';
import TestimonialSection from '../components/common/TestimonialSection';
import NewsCarousel from '../components/common/NewsSection';
import SocialMediaFeed from '../components/common/SocialMediaSection';
import Footer from '../components/common/FooterSection';
const Home = () => {
  return (
    <div  className="min-h-screen bg-white">
      <NavigationBar/>
       <Hero/>
      <AboutUs/>
      <CoursesSection/>
      <UpcomingCourses/>
      <BlogSection/>
      <CallToAction/>
      <EventsSection/>
      <TestimonialSection/>
      <NewsCarousel/>
      <SocialMediaFeed/>
      <Footer/>
    </div>
  )
}

export default Home
