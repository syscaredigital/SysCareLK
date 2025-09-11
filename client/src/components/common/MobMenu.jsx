import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Menu } from 'lucide-react';

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-white/5"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white text-gray-900 shadow-xl rounded-lg p-4 z-50">
          <h3 className="font-bold text-lg mb-4 text-blue-800">Menu</h3>
          
          <ul className="space-y-2">
            {Menus.map((menu, index) => (
              <li key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleMenu(menu.name)}
                  className="flex items-center justify-between w-full py-3 font-medium hover:text-blue-600"
                >
                  <span>{menu.name}</span>
                  {menu.subMenu && (activeMenu === menu.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                </button>
                
                {menu.subMenu && activeMenu === menu.name && (
                  <div className="pl-4 pb-3">
                    {/* Category headings for mobile */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {menu.subMenuHeading.map((heading, i) => (
                        <h4 key={i} className="font-semibold text-sm text-blue-700">
                          {heading}
                        </h4>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {menu.subMenu.slice(0, 4).map((subMenu, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded hover:bg-blue-50">
                          <div className="bg-blue-100 p-1 rounded"> 
                            {subMenu?.icon && <subMenu.icon size={16} />}
                          </div>
                          <span className="text-sm font-medium">{subMenu.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {menu.subMenu.length > 4 && (
                      <button className="text-blue-600 text-sm font-medium mt-2">
                        View all {menu.subMenu.length} programs
                      </button>
                    )}
                  </div>
                )}
              </li>
            ))}
            
            {/* Additional menu items */}
            <li className="border-b border-gray-200 last:border-b-0">
              <a href="/scheduler" className="block py-3 font-medium hover:text-blue-600">Scheduler</a>
            </li>
            <li className="border-b border-gray-200 last:border-b-0">
              <a href="/contact" className="block py-3 font-medium hover:text-blue-600">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobMenu;