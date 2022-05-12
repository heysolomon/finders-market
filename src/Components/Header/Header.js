// import Navbar from "./Navbar";
import classes from './header.module.css'
import Navbar from '../Navbar/Navbar';
import Search from '../UI/Search/Search';
// import Search from '../UI/Search/Search';

const Header = () => {
    return(
            <div className={classes.header}>
                <Navbar />
                <div className={`pt-5 ${classes.hero}`}>
                    <div></div>
                    <div className={classes.cta}>
                        <h1>Welcome to Finders Market</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est dolorum perferendis, ullam velit iusto suscipit pariatur?</p>
                        <div className="w-50">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
           
    );
}

export default Header;
