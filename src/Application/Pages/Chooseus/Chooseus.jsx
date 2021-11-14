import React from 'react'
import './Chooseus.css'
import {MdHighQuality, MdSupportAgent} from  'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi'

const style = {color: "#0086FF" , fontSize: "7em"}
const stylew ={color: "white" , fontSize: "5.5em"}
const Chooseus = () => {
    return (
                <div class="container" id="/aboutus">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">High Quality Hardware</h5>
                                <MdHighQuality style = {style}/>
                                <p class="card-text">We use the latest hardware solution that are updated and  maintained regularly</p>
                            </div>
                        </div>
                    </div>
                <div class="col">
                <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">Dedicated 24/7 Support</h5>
                                <MdSupportAgent style={style}/>
                                <p class="card-text">If you have a question about our  Servers services, use our 24/7 support</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="col">
                <div class="row">
                        <div class="col">
                            <div class="card highlight">
                                <div class="card-body">
                                <h5 class="card-title">30-Day-Money back Guarantee</h5>
                                <GiReceiveMoney style={stylew}/>
                                <p class="card-text">If you are unsatisfied with our services, we will return you all your  money  during  first 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Chooseus
