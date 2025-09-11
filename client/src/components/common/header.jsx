import { Link } from 'react-router-dom';
import { 
  GlobeLock, 
  Cloud, 
  Shield, 
  Server, 
  Home, 
  Users, 
  BookOpen, 
  Settings,
  Calendar,
  Phone,
  MoreHorizontal
} from 'lucide-react';
import logo from '/logos/logo.png';
import DesktopMenu from './DesktopMenu';
import MobMenu from './MobMenu';

// Menus data
const Menus = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    subMenuHeading: ["Company", "Team", "Values", "Careers"],
    subMenu: [
      {
        name: "Our Story",
        icon: BookOpen,
        desc: "Learn about our journey",
        link: "/about/story"
      },
      {
        name: "Leadership Team",
        icon: Users,
        desc: "Meet our experts",
        link: "/about/team"
      },
      {
        name: "Our Values",
        icon: Shield,
        desc: "What drives us forward",
        link: "/about/values"
      },
      {
        name: "Careers",
        icon: Settings,
        desc: "Join our team",
        link: "/about/careers"
      },
      {
        name: "Partners",
        icon: Users,
        desc: "Our trusted partners",
        link: "/about/partners"
      },
      {
        name: "Testimonials",
        icon: BookOpen,
        desc: "What clients say about us",
        link: "/about/testimonials"
      }
    ],
    gridCols: 4,
  },
  {
    name: "Training",
    subMenuHeading: ["CyberSecurity", "Microsoft Azure", "Microsoft Security", "Microsoft 365"],
    subMenu: [
      // CyberSecurity
      {
        name: "Computer Secure Computer User C|SCU",
        icon: GlobeLock,
        desc: "Foundation cybersecurity course",
        category: "CyberSecurity"
      },
      {
        name: "Certified Ethical Hacker C|EH v13",
        icon: GlobeLock,
        desc: "Learn ethical hacking techniques",
        category: "CyberSecurity"
      },
      {
        name: "Certified Network Defender C|ND",
        icon: GlobeLock,
        desc: "Network defense strategies",
        category: "CyberSecurity"
      },
      {
        name: "Computer Hacking Forensic Investigator C|HFI",
        icon: GlobeLock,
        desc: "Digital forensics training",
        category: "CyberSecurity"
      },
      
      // Microsoft Azure
      {
        name: "Azure Fundamentals AZ-900",
        icon: Cloud,
        desc: "Azure cloud basics",
        category: "Microsoft Azure"
      },
      {
        name: "Azure Administrator AZ-104",
        icon: Cloud,
        desc: "Azure administration",
        category: "Microsoft Azure"
      },
      {
        name: "Azure Developer AZ-204",
        icon: Cloud,
        desc: "Azure development",
        category: "Microsoft Azure"
      },
      {
        name: "Azure Solutions Architect AZ-305",
        icon: Cloud,
        desc: "Azure architecture",
        category: "Microsoft Azure"
      },
      
      // Microsoft Security
      {
        name: "Security Operations Analyst SC-200",
        icon: Shield,
        desc: "Security operations",
        category: "Microsoft Security"
      },
      {
        name: "Identity and Access Administrator SC-300",
        icon: Shield,
        desc: "Identity management",
        category: "Microsoft Security"
      },
      {
        name: "Information Protection Administrator SC-400",
        icon: Shield,
        desc: "Data protection",
        category: "Microsoft Security"
      },
      {
        name: "Security Engineer SC-100",
        icon: Shield,
        desc: "Security engineering",
        category: "Microsoft Security"
      },
      
      // Microsoft 365
      {
        name: "Microsoft 365 Fundamentals MS-900",
        icon: Server,
        desc: "M365 basics",
        category: "Microsoft 365"
      },
      {
        name: "Teams Administrator MS-700",
        icon: Server,
        desc: "Teams administration",
        category: "Microsoft 365"
      },
      {
        name: "Enterprise Administrator Expert MS-100",
        icon: Server,
        desc: "Enterprise administration",
        category: "Microsoft 365"
      },
      {
        name: "Security Administrator MS-500",
        icon: Server,
        desc: "M365 security",
        category: "Microsoft 365"
      }
    ],
    gridCols: 4,
  },
  {
    name: "Courses",
    subMenuHeading: ["Technical", "Certification", "Specialized", "Workshops"],
    subMenu: [
      {
        name: "Cloud Computing Fundamentals",
        icon: Cloud,
        desc: "Cloud basics course",
        link: "/courses/cloud-fundamentals"
      },
      {
        name: "Advanced Network Security",
        icon: Shield,
        desc: "Network protection",
        link: "/courses/network-security"
      },
      {
        name: "DevOps Masterclass",
        icon: Settings,
        desc: "DevOps practices",
        link: "/courses/devops"
      },
      {
        name: "Data Science Bootcamp",
        icon: Server,
        desc: "Data analysis training",
        link: "/courses/data-science"
      }
    ],
    gridCols: 2,
  },
  {
    name: "Services",
    subMenuHeading: ["Consulting", "Implementation", "Support", "Managed Services"],
    subMenu: [
      {
        name: "IT Security Audit",
        icon: Shield,
        desc: "Comprehensive security assessment",
        link: "/services/security-audit"
      },
      {
        name: "Cloud Migration",
        icon: Cloud,
        desc: "Seamless cloud transition",
        link: "/services/cloud-migration"
      },
      {
        name: "24/7 Support",
        icon: Settings,
        desc: "Round-the-clock assistance",
        link: "/services/support"
      },
      {
        name: "Custom Solutions",
        icon: Server,
        desc: "Tailored IT solutions",
        link: "/services/custom-solutions"
      }
    ],
    gridCols: 2,
  },
  {
    name: "Scheduler",
    link: "/scheduler"
  },
  {
    name: "Contact Us",
    link: "/contact"
  },
  {
    name: "More",
    subMenuHeading: ["Resources", "Events", "Blog", "Support"],
    subMenu: [
      {
        name: "Resource Library",
        icon: BookOpen,
        desc: "Whitepapers and guides",
        link: "/resources"
      },
      {
        name: "Upcoming Events",
        icon: Calendar,
        desc: "Workshops and webinars",
        link: "/events"
      },
      {
        name: "Blog & Articles",
        icon: BookOpen,
        desc: "Latest insights",
        link: "/blog"
      },
      {
        name: "Help Center",
        icon: Settings,
        desc: "Get help and support",
        link: "/support"
      }
    ],
    gridCols: 2,
  }
];

export default function NavigationBar() {
  return (
    <header className="h-16 text-[15px] fixed top-0 left-0 right-0 flex items-center bg-[#103d5d] z-50">
      <nav className='px-3.5 flex justify-between items-center w-full max-w-7xl mx-auto'>
        <div className='flex items-center gap-x-3 z-[999] relative'>
          <img src={logo} alt='SysCare Logo' className='h-8 md:h-10 lg:h-12 w-auto object-contain' />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-x-1'>
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className='flex items-center gap-x-5'>
          <button className='bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors'>
            Enquiry Now
          </button>
          <div className='lg:hidden'>
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
}