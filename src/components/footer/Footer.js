import footerlogo from '../../Assets/Images/SiteLogo3.svg';
// import social from '../../Assets/Images/social-1.svg';
// import social2 from '../../Assets/Images/social-2.svg';
// import social3 from '../../Assets/Images/social-3.svg';
import Union from '../../Assets/Images/Union.svg';
import keyboard from '../../Assets/Images/ic-keyboard-arrow-right-48px.svg';
import { Link } from "react-router-dom";
import footer from "./footer.module.css";

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
      <div className={footer.container}>
        <div className="flex justify-center shadow-sm px-6 py-4 items-center bg-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded w-[65%]">
          <h4 className="font-normal mr-2">Subscribe to our newsletter</h4>
          <form className="border-2 rounded border-gray-300 bg-white p-1">
            <input
              className={footer.footersearch}
              type="email"
              placeholder="Enter your email.."
            />
            <button className="p-3  rounded bg-[#7DD145] text-white ">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className={footer.sub_footer}>
        <div className={footer.left}>
          <img src={footerlogo} alt="" style={{ width: "50px" }} />
        </div>
        <div className={footer.center}>
          <nav className={footer.sub_center}>
            <div className={footer.link}>
              {link.map((link) => (
                <Link className={footer.link} key={link.id} to={link.to}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={footer.searchbar}>
              <input
                className={footer.text_input}
                type="text"
                placeholder="Search"
              />
              <img
                src={Union}
                style={{ width: "14px" }}
                alt=""
                className={footer.sear}
              />
            </div>
          </nav>

          <div className={footer.link}>
            {navlink.map((navlink) => (
              <Link className={footer.link} key={navlink.id} to="/LandingPage">
                {navlink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={footer.right}>
          {/* <div className={footer.social}>
            <div className={footer.sub_social}>
              <img src={social} alt="" style={{ width: "20px" }} />

              <img src={social2} alt="" style={{ width: "20px" }} />
            </div>

            <div className={footer.sub_social}>
              <img src={social3} alt="" style={{ width: "20px" }} />

              <img src={social} alt="" style={{ width: "20px" }} />
            </div>
          </div> */}
          <div className={footer.sub_right}>
            <img
              className={footer.back_up}
              src={keyboard}
              alt=""
              style={{ width: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
