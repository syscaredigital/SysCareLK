import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
const DesktopMenu = ({menu}) => {
  const [isHover,setIsHover] = useState(false);

  //*toogle hover menu
  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  //* animation variants
  
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <motion.li className='group/link' onHoverStart={toggleHoverMenu}
    onHoverEnd={toggleHoverMenu}
    >
      <span className='flex-center gap-1 cursor-point px-3 py-1 rounded-xl hover:bg-white/5'>
        {menu.name}
        {hasSubMenu && (<ChevronDown className='mt-[0.6px] group-hover/link:rotate-180 duration-200'/>)}
      </span>
      {
        hasSubMenu && (
             <motion.div className='sub-menu' initial={{ opacity: 0, rotateX: -15, display: "none" }}
  animate={
    isHover
      ? { opacity: 1, rotateX: 0, display: "block" }
      : { opacity: 0, rotateX: -15, transitionEnd: { display: "none" } }
  }
  transition={{ duration: 0.5 }} >
            
              <div className={`
              grid gap-7 
              ${
                menu.gridCols === 3 ? 'grid-cols-3' : menu.gridCols === 2 ?  'grid-cols-2' : 'grid-cols-1'
              }
              `
                }>
                {
                  menu?.subMenu?.map((subMenu, i) => (
                    <div key={i} className='relative cursor-pointer '>
                      <div className='flex-center gap-x-4 group/menubox'>
                        <div className='bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white/15 group-hover/menubox:text-gray-900 duration-300'> 
                          {subMenu?.icon && <subMenu.icon />}
                        </div>
                        <div>
                          <h6 className='font-semibold'>{subMenu?.name}</h6>
                          <p className='text-sm text-gray-400'>{subMenu?.desc}</p>
                        </div>
                        </div>
                       </div>

                  ) )
                }
              </div>
             </motion.div>
        )
      }
      
    </motion.li>
  )
}

export default DesktopMenu
