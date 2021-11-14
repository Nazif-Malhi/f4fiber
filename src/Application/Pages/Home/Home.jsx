import React from 'react'
import Navbar from '../../Components/Elements/Navbar/Navbar'
import './Home.css'
import {Link} from 'react-scroll'
const Home = () => {
    return (
        <div id="/home">
            <div className="container_home">
            <Navbar/>
            <div className="content_home">
                <h2>Better Internet Service </h2>
                <div className="button_home"> 
                    Get Started
                </div> 
                <h2>For You</h2>
                <p>Just Started from Rs 20/ day</p>
            </div>
            </div>
        </div>
    )
}

export default Home
