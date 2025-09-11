import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsHover(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const hasSubMenu = menu?.subMenu?.length > 0;
  
  return (
    <li 
      className='group/link relative' 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={menuRef}
    >
      <span className='flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5'>
        {menu.name}
        {hasSubMenu && (<ChevronDown className='mt-[0.6px] group-hover/link:rotate-180 duration-200'/>)}
      </span>
      
      {hasSubMenu && isHover && (
        <div className='absolute left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white text-gray-900 shadow-2xl rounded-b-lg p-6 mt-2 border-t-4 border-blue-500 z-50'>
          {/* Mega menu header with categories */}
          <div className="grid grid-cols-4 gap-6 mb-6 border-b pb-4">
            {menu.subMenuHeading.map((heading, index) => (
              <h3 key={index} className="font-bold text-lg text-blue-800">
                {heading}
              </h3>
            ))}
          </div>
          
          {/* Mega menu content */}
          <div className={`grid gap-7 grid-cols-4`}>
            {menu?.subMenu?.map((subMenu, i) => (
              <div key={i} className='relative cursor-pointer group/menubox'>
                <div className='flex items-start gap-x-4'>
                  <div className='bg-blue-100 w-fit p-2 rounded-md group-hover/menubox:bg-blue-500 group-hover/menubox:text-white duration-300'> 
                    {subMenu?.icon && <subMenu.icon size={20} />}
                  </div>
                  <div>
                    <h6 className='font-semibold text-sm group-hover/menubox:text-blue-600'>{subMenu?.name}</h6>
                    <p className='text-xs text-gray-500 mt-1'>{subMenu?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mega menu footer with CTA */}
          <div className="mt-6 pt-6 border-t text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
              View All Training Programs
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopMenu;