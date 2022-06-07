import TypeIt from "typeit-react";
import classes from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import Search from "../UI/Search/Search";
// import Search from '../UI/Search/Search';

const Header = ({ showInfo }) => {
  return (
    <div className={classes.header}>
      <Navbar showInfo={showInfo} />
      <div className={`pt-[100px] ${classes.hero}`}>
        <div></div>
        <div className={classes.cta}>
          <h1>
            <TypeIt>Welcome to Finders Market</TypeIt>
          </h1>
          <p>
            An online marketplace that aims at eliminating middlemen. It also
            aims at providing both the farmers and consumers with transportation
            and storage facilities for their goods
          </p>
          <div className="w-50">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
