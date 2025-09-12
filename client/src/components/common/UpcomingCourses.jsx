import React from 'react';

const UpcomingCourses = () => {
  // Sample data based on your image
  const courses = [
    {
      id: 1,
      program: "Microsoft Azure Administrator – AZ-104T00",
      date: "Jul 26, 2025",
      time: "9:00 am - 4:30 pm",
      platform: "ONLINE",
      batch: "Batch 05",
      action: "Enquire Now"
    },
    {
      id: 2,
      program: "Computer Hacking Forensic Investigator CHFI v.11",
      date: "Aug 16, 2025",
      time: "9:00 am - 4:30 pm",
      platform: "ONLINE",
      batch: "Batch 05",
      action: "Enquire Now"
    },
    {
      id: 3,
      program: "Certified Network Defender CND v.3",
      date: "Aug 31, 2025",
      time: "9:00 am - 4:30 pm",
      platform: "ONLINE",
      batch: "Batch 02",
      action: "Enquire Now"
    },
    {
      id: 4,
      program: "Certified Ethical Hacker CEH v.13",
      date: "Nov 2, 2025",
      time: "9:00 am - 4:30 pm",
      platform: "ONLINE",
      batch: "Batch 20",
      action: "Enquire Now"
    },
    {
      id: 5,
      program: "AZ-305T00-A: Designing Microsoft Azure Infrastructure Solutions",
      date: "Nov 22, 2025",
      time: "9:00 am - 4:30 pm",
      platform: "ONLINE",
      batch: "Batch 02",
      action: "Enquire Now"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103d5d]">Upcoming Courses</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our upcoming training programs and secure your spot today
          </p>
        </div>

        {/* Courses Table - Desktop View */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#103d5d]">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  PROGRAM
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  DATE
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  TIME
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  PLATFORM
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  BATCH
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="text-sm font-medium text-gray-900">{course.program}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {course.platform}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.batch}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-4 py-2 bg-[#245684] hover:bg-[#1a4066] text-white text-sm font-medium rounded-md transition duration-300">
                      {course.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#103d5d]">{course.program}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-sm font-medium text-gray-900">{course.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-sm font-medium text-gray-900">{course.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Platform</p>
                  <p className="text-sm font-medium text-blue-800">{course.platform}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Batch</p>
                  <p className="text-sm font-medium text-gray-900">{course.batch}</p>
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-[#245684] hover:bg-[#1a4066] text-white text-sm font-medium rounded-md transition duration-300">
                {course.action}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? Contact us for custom training solutions.
          </p>
          <button className="px-6 py-3 bg-white border border-[#245684] text-[#245684] hover:bg-[#245684] hover:text-white rounded-md font-medium transition duration-300">
            Contact Our Training Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;