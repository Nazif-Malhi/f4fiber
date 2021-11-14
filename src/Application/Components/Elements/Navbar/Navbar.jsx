import React , {useState} from 'react'
import './Navbar.css'
import {MenueList} from "../../Data/MenueList"
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    const style = { color: "white", fontSize: "1.5em" }
    
    const [clicked, setClicked] = useState("false");
    const menueList=MenueList.map(( { url, title }, index) => {
        return (
            <li key={index}>
                <Link to={url} smooth={true} duration={1000}><a href={url} >{title}</a> </Link>
            </li>
        );
    })
    const HandleClick = (state) => {
        if(state==="false"){
            return "true";
        }
        return "false";
    };
    return (
    <div className="_ofNav">
        <div className="logo_ofNav">
                <font>F4-Fiber</font>
            </div>
            <div className="menu-icon" onClick={() => setClicked((old)  => HandleClick(old)) }>
            
            {clicked === "false" ? <FaBars className="bars" style={style}/> : <FaTimes className="timer" style={style}/>}
            </div>
        <ul className={clicked === "true" ? "menue-list_ofNav" : "menue-list_ofNav close"}>{menueList}</ul>
    </div>

    )
}

export default Navbar
