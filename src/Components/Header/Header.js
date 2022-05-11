// import Navbar from "./Navbar";
import Navbar from '../Navbar/Navbar';
import { Button } from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import classes from './header.module.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <Navbar />
            <div className={classes.hero}>
                <div></div>
                <div className={classes.cta}>
                    <h1>Welcome to Finders Market</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est dolorum perferendis, ullam velit iusto suscipit pariatur?</p>
                    <Search />
                </div>
                <Button>
                    This is a button
                </Button>
            </div>
            </div>
           
    );
}

export default Header;