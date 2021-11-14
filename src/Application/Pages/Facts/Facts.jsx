import React from "react"

import Ticker from "./Ticker"
import './Facts.css'


const Facts = () => {
   
       
    return (
        
        <div className="counter-up">
           
            <div className="contenti">
                <div className="box">
                  
                    <div className="counter" >
                      <Ticker className="count" end= {10000}/>
                    </div>
                    <div className="text">Customers</div>
                </div>
                <div className="box">
                    <div className="counter">
                      <Ticker className="count" end = {45}/>
                    </div>
                    <div className="text">Area we covered</div>
                </div>
                <div className="box">
                    <div className="counter">
                      {/* suffix="K+" for the end of  */}
                      <Ticker className="count" end = {99} suffix="%"/>
                    </div>
                    <div className="text">Satisfied Customers</div>
                </div>
            </div>
        </div>
    )
}

export default Facts

