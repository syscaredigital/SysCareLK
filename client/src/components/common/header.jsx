import { GlobeLock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/logos/logo.png';
import DesktopMenu from './DesktopMenu';


//Menus data
 const Menus = [
  {
    name: "Professional",
    subMenuHeading: ["CyberSecurity", "Microsoft Azure", "Microsoft Security", "Microsoft 365"],
    subMenu: [
      {
        name: "Computer Secure Computer User C|SCU",
        icon: GlobeLock,

      },

      {
        name: "Certified Ethical Hacker C|EH v13",
        icon: GlobeLock,
      },
      {
        name: "Certified Network Defender C|ND",
        icon: GlobeLock,

      },
      {
        name: ""
      }


    ],
    gridCOls: 4,
  }
]


export default function NavigationBar() {
   return (
    <div>
      <headers className="h-16 text-[15px] fixed inset-0 flex-center bg-[#103d5d]" >
        <nav className='px-3.5 flex-center-between w-full max-w-7xl max-auto'>
          <div className='flex-center gap-x-3 z-[999] relative'>
            <img src= {logo} alt='SysCare Logo' className='h-8 md:h-10 lg:h-12 w-auto object-contain' />
          </div>

          <ul>
            {
              Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))
            }
          </ul>
        </nav>
      </headers>
    </div>
   )
}