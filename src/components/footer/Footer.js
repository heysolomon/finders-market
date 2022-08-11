import footerlogo from '../../Assets/Images/finderslogo.png';
import social from '../../Assets/Images/social-1.svg';
import social2 from '../../Assets/Images/social-2.svg';
import social3 from '../../Assets/Images/social-3.svg';
import keyboard from '../../Assets/Images/ic-keyboard-arrow-right-48px.svg';
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const link = [
    {
      id: 1,
      name: "About",
      to: "/LandingPage",
    },
    {
      id: 2,
      name: "Feature",
      to: "/LandingPage",
    },
    {
      id: 3,
      name: "Pricing",
      to: "/LandingPage",
    },
    {
      id: 4,
      name: "Gallery",
      to: "/LandingPage",
    },
    {
      id: 5,
      name: "Team",
      to: "/LandingPage",
    },
  ];
  const navlink = [
    {
      id: 1,
      name: "Privacy Policy",
    },
    {
      id: 2,
      name: "Terms of Use",
    },
    {
      id: 3,
      name: "Sales and Refunds",
    },
    {
      id: 4,
      name: "Legal",
    },
    {
      id: 5,
      name: "Site Map",
    },
  ];
  return (
    <div>
      <div className='bg-[#4f7f19] pb-[150px]'>
        <div className="footer-xs ">
          <p className=' font-bold '>Subscribe to our newsletter</p>
          <input className='p-2 max-w-[400px] w-[95%] m-auto rounded-md my-3 ' type="search" placeholder='Enter your email' />
          <button className=' shadow-lg bg-[#7DD145] text-white p-2 max-w-[200px] text-[14px] sm:text-[16px] rounded w-[40%] m-auto'>Subscribe Now</button>
        </div>
        <div className=' flex justify-around py-10'>
          <div className=' sm:flex text-white'>
            {
              link.map((items) => (
                <p key={items.id} className=' sm:mx-5'>{items.name}</p>
              ))
            }
          </div>
          <div className=' text-white'>
            {
              navlink.map((items) => (
                <p key={items.id}>{items.name}</p>
              ))
            }

          </div>
        </div>
        <div className='flex '>
          <img className=' w-40' src={footerlogo} alt='' />
          <div className='flex justify-around  items-center mt-5 w-[40%] max-w-[200px] m-auto'>
            <img src={social} alt='' />
            <img src={social2} alt='' />
            <img src={social3} alt='' />
          </div>
        </div>
        <Link to="" className=' bg-white p-3 w-10 rounded float-right mx-5  animate-bounce'>
          <img className=' ' src={keyboard} alt='' />
        </Link>
      </div>


    </div>
  );
};

export default Footer;
