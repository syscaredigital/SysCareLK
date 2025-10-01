import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import BlogsPage from './pages/blogs.jsx';
import Schedular from './pages/Schedular.jsx';
import ContactUs from './pages/contactUs.jsx';
import ProfessionalCourseLists from './pages/ProfessionalCourseLists.jsx';
import CourseDetails from './pages/courseDetails.jsx';
import AdminDashboard from './pages/admin/adminDashboard.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/About-SysCare' element={< AboutUs />} />
        <Route path='/SysCare-blogs' element={ <BlogsPage/> } />
        <Route path='/SysCare-Training-Schedular' element={ <Schedular /> } />
        <Route path='/Contact-SysCare' element={ <ContactUs /> } />
        <Route path='/SysCare-Professional-Courses' element= { <ProfessionalCourseLists/ > } />
        <Route path='/SysCare-Professional-Courses/:input' element={<ProfessionalCourseLists />} />
        <Route path='/SysCare-Course-Details/:id' element={<CourseDetails />} />
        <Route path='/SysCare-Admin' element={< AdminDashboard />} />



      </Routes>
    </div>
  )
}

export default App
