import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MegaNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation data structure
  const navData = [
    {
      id: 'home',
      name: 'Home',
      megaMenu: false
    },
    {
      id: 'about',
      name: 'About',
      megaMenu: true,
      columns: [
        {
          title: 'BOM',
          items: [
            { name: 'Chairman Message', link: '/about/bom/chairman' },
            { name: 'Board Members', link: '/about/bom/members' },
            { name: 'Vision & Mission', link: '/about/bom/vision' },
            { name: 'Governance', link: '/about/bom/governance' },
            { name: 'Policies', link: '/about/bom/policies' },
            { name: 'Annual Reports', link: '/about/bom/reports' }
          ]
        },
        {
          title: 'Our People',
          items: [
            { name: 'Leadership Team', link: '/about/people/leadership' },
            { name: 'Faculty', link: '/about/people/faculty' },
            { name: 'Researchers', link: '/about/people/researchers' },
            { name: 'Staff', link: '/about/people/staff' },
            { name: 'Alumni', link: '/about/people/alumni' },
            { name: 'Partners', link: '/about/people/partners' }
          ]
        }
      ]
    },
    {
      id: 'courses',
      name: 'Courses',
      megaMenu: true,
      columns: [
        {
          title: 'Professional Courses',
          subSections: [
            {
              name: 'Technology',
              items: [
                { name: 'Data Science', link: '/courses/professional/tech/ds' },
                { name: 'AI & ML', link: '/courses/professional/tech/ai-ml' },
                { name: 'Cybersecurity', link: '/courses/professional/tech/cyber' },
                { name: 'Cloud Computing', link: '/courses/professional/tech/cloud' },
                { name: 'Blockchain', link: '/courses/professional/tech/blockchain' },
                { name: 'DevOps', link: '/courses/professional/tech/devops' }
              ]
            },
            {
              name: 'Business',
              items: [
                { name: 'Digital Marketing', link: '/courses/professional/business/dm' },
                { name: 'Project Management', link: '/courses/professional/business/pm' },
                { name: 'Business Analytics', link: '/courses/professional/business/ba' },
                { name: 'Leadership', link: '/courses/professional/business/leadership' },
                { name: 'Finance', link: '/courses/professional/business/finance' },
                { name: 'HR Management', link: '/courses/professional/business/hr' }
              ]
            }
          ]
        },
        {
          title: 'Academic Courses',
          subSections: [
            {
              name: 'Undergraduate',
              items: [
                { name: 'Computer Science', link: '/courses/academic/ug/cs' },
                { name: 'Engineering', link: '/courses/academic/ug/eng' },
                { name: 'Business Admin', link: '/courses/academic/ug/mba' },
                { name: 'Arts', link: '/courses/academic/ug/arts' },
                { name: 'Sciences', link: '/courses/academic/ug/sci' },
                { name: 'Medicine', link: '/courses/academic/ug/med' }
              ]
            },
            {
              name: 'Postgraduate',
              items: [
                { name: 'Masters in CS', link: '/courses/academic/pg/mcs' },
                { name: 'MBA Programs', link: '/courses/academic/pg/mba' },
                { name: 'PhD Programs', link: '/courses/academic/pg/phd' },
                { name: 'Research Degrees', link: '/courses/academic/pg/research' },
                { name: 'Professional Doctorates', link: '/courses/academic/pg/prof-doc' },
                { name: 'Executive Education', link: '/courses/academic/pg/exec-edu' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'services',
      name: 'Services',
      megaMenu: true,
      columns: [
        {
          title: 'Our Services',
          items: [
            { name: 'Career Counseling', link: '/services/counseling' },
            { name: 'Placement Services', link: '/services/placement' },
            { name: 'Research Support', link: '/services/research' },
            { name: 'Library Services', link: '/services/library' },
            { name: 'Online Learning', link: '/services/online' },
            { name: 'Student Support', link: '/services/student-support' }
          ]
        }
      ]
    },
    {
      id: 'contact',
      name: 'Contact Us',
      megaMenu: false
    },
    {
      id: 'more',
      name: 'More',
      megaMenu: true,
      columns: [
        {
          title: 'Resources',
          items: [
            { name: 'Blog', link: '/more/blog' },
            { name: 'News & Events', link: '/more/news' },
            { name: 'Research Papers', link: '/more/research' },
            { name: 'Publications', link: '/more/publications' },
            { name: 'Media Gallery', link: '/more/gallery' },
            { name: 'FAQs', link: '/more/faqs' }
          ]
        }
      ]
    }
  ];

  const toggleMegaMenu = (menuId) => {
    if (activeMegaMenu === menuId) {
      setActiveMegaMenu(null);
      setActiveSubMenu(null);
    } else {
      setActiveMegaMenu(menuId);
      setActiveSubMenu(null);
    }
  };

  const toggleSubMenu = (subMenuId) => {
    if (activeSubMenu === subMenuId) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(subMenuId);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-3'}`}>
      {/* Moving gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#103d5d] via-[#245684] to-[#ffffff] animate-moveGradient"></div>
      
      <div className="container mx-auto px-4 xl:px-6">
        {/* Top level nav */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-indigo-600 flex items-center z-50"
            onClick={() => {
              setActiveMegaMenu(null);
              setMobileMenuOpen(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            SysCare IT Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {navData.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => toggleMegaMenu(item.id)}
                  className={`px-4 py-3 font-medium transition-colors duration-200 flex items-center ${
                    activeMegaMenu === item.id 
                      ? 'text-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                  {item.megaMenu && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {item.megaMenu && activeMegaMenu === item.id && (
                  <div className="absolute left-1/4 transform -translate-x-1/2 w-screen max-w-screen-2xl px-4 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                      <div className="relative grid grid-cols-2 gap-8 p-6">
                        {item.columns.map((column, colIdx) => (
                          <div key={colIdx}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                              {column.title}
                            </h3>
                            {column.subSections ? (
                              <div className="space-y-6">
                                {column.subSections.map((subSection, subIdx) => (
                                  <div key={subIdx}>
                                    <h4 className="text-sm font-medium text-indigo-600 mb-2">
                                      {subSection.name}
                                    </h4>
                                    <ul className="space-y-2">
                                      {subSection.items.map((subItem, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            to={subItem.link}
                                            className="text-gray-700 hover:text-indigo-600 text-sm transition-colors duration-200 block py-1"
                                            onClick={() => setActiveMegaMenu(null)}
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <ul className="space-y-3">
                                {column.items.map((colItem, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      to={colItem.link}
                                      className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 block py-1"
                                      onClick={() => setActiveMegaMenu(null)}
                                    >
                                      {colItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex justify-end">
                          <Link
                            to={`/${item.id}`}
                            className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            View all {item.name.toLowerCase()} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center ml-4 space-x-3">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-all duration-200 p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 overflow-y-auto max-h-[calc(100vh-80px)]`}>
          <div className="pt-2 pb-4 space-y-1 bg-white">
            {navData.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0">
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubMenu(item.id)}
                      className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium ${
                        activeSubMenu === item.id ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${activeSubMenu === item.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Mega Menu Content */}
                    {activeSubMenu === item.id && (
                      <div className="px-4 py-2 bg-gray-50">
                        {item.columns.map((column, colIdx) => (
                          <div key={colIdx} className="mb-6 last:mb-0">
                            <h3 className="text-md font-semibold text-gray-900 mb-3">
                              {column.title}
                            </h3>
                            {column.subSections ? (
                              <div className="space-y-4 pl-2">
                                {column.subSections.map((subSection, subIdx) => (
                                  <div key={subIdx} className="mb-4 last:mb-0">
                                    <h4 className="text-sm font-medium text-indigo-600 mb-2 pl-2">
                                      {subSection.name}
                                    </h4>
                                    <ul className="space-y-2 pl-4">
                                      {subSection.items.map((subItem, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            to={subItem.link}
                                            className="text-gray-700 hover:text-indigo-600 text-sm transition-colors duration-200 block py-1"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setActiveSubMenu(null);
                                            }}
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <ul className="space-y-2 pl-2">
                                {column.items.map((colItem, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      to={colItem.link}
                                      className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 block py-1 text-sm"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveSubMenu(null);
                                      }}
                                    >
                                      {colItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <Link
                            to={`/${item.id}`}
                            className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveSubMenu(null);
                            }}
                          >
                            View all {item.name.toLowerCase()} →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/${item.id}`}
                    className="block px-4 py-3 font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="px-4 pt-4 pb-2 border-t border-gray-200">
              <Link 
                to="/login" 
                className="block w-full text-center px-4 py-2 font-medium text-indigo-600 hover:text-indigo-800 mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block w-full text-center px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaNavbar;