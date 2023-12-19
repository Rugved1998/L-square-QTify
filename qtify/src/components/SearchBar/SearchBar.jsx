import React from "react";
import styles from "./SearchBar.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"

function SearchBar({placeholder}){

const formSubmit=(event)=>{
event.preventDefault();
}

    return (<form className={styles.wrapper} onSubmit={formSubmit}>
        <input className={styles.search}  type="Area" placeholder={placeholder} required />
        <button className={styles.searchButton} type="submit">Search </button>
    </form>);
}

export default SearchBar;