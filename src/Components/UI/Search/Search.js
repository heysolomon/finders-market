import search from '../../../Assets/Images/search-icon.png'
import classes from './search.module.css'

const  Search = () => {
    return(
        <div className={classes.search}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <input type="text" placeholder="I'm looking for..." />
            <div className={classes.img}>
                <img src={search} alt=""/>
            </div>
                
        </div>
    </div>
    );
}

export default Search