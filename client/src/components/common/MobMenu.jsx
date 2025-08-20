import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const MobMenu = ({ Menus }) => {
    const [isOpen, setIsOpen] = useState(false);
    //*toggleDrawer
    const toggleDrawer = () => {
        setIsOpen(!isOpen);

    }
  return (
    <div>
     <button className='z-[999] relative'
     onClick={toggleDrawer}>
        {
            isOpen ? <X/> : <Menu />
        }
     </button>
     <div>
        <ul>
            {
            Menus?.map(({name, subMenu}, i ) => {
                const hasSubMenu = subMenu?.length > 0;
                return (
                    <li key={name}>
                        <span>
                            {name}
                            {hasSubMenu && <ChevronDown/>}
                        </span>

                    </li>
                )
            })
            }
        </ul>
     </div>
    </div>
  )
}

export default MobMenu
