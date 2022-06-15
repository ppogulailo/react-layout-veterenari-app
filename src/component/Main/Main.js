import React from "react";
import './Main.css'
import lapa from '../../img/grid-card/premium-icon-paw-2475265.png'
import dollar from '../../img/grid-card/dollar (2).png'
import sell from '../../img/grid-card/tag.png'
import aptek from '../../img/grid-card/folder (2).png';
import Grapg from "./Grapg";
import  dog1 from '../../img/dog/dog.png'
import  dog2 from '../../img/dog/cat.png'
import  dog3 from '../../img/dog/dog (1).png'
import next from '../../img/2/next (1).png'

import RightElement from "./RightElement/RightElement";

const Main=()=>{
    return(
        <div className='main'>
            <div className='flex-1'>
                <h1>Overview</h1>
                <span>Friday 15 October,2022</span>
            </div>
            <div className='main-page'>
                <div className='left'>
                    <div className='top-grid'>
                        <div className="top-block">
                            <div className='flex-2'>
                                <h2>345</h2>
                                <div className='visibiliti'>kk</div>
                                <img src={lapa} alt="" className='unit2'/>
                            </div>
                            <span className='f'>Old patients</span>
                        </div>
                        <div className="top-block">
                            <div className='flex-2'>
                                <h2>54</h2>
                                <div className='visibiliti'>kkk</div>
                                <img src={aptek} alt="" className='unit2'/>

                            </div>
                            <span className='f'>New patients</span>
                        </div>
                        <div className="top-block">
                            <div className='flex-2'>
                                <h2>378k</h2>
                                <div className='visibiliti'>k</div>

                                <img src={sell} alt="" className='unit2'/>

                            </div>
                            <span className='f'>Good sales</span>
                        </div>
                        <div className="top-block">
                            <div className='flex-2'>
                                <h2>$570k</h2>
                                <img src={dollar} alt="" className='unit2'/>
                            </div>
                            <span className='f'>Balance</span>
                        </div>
                    </div>
                    <div className='middle-grid'>
                        <div className='middle-grid-2'>
                            <span className='main-text'>Good sale analytic</span>
                            <span className='second-text'> Good food</span>
                            <span className='second-text'>Good Medicine</span>
                            <button className='second-button'>Last Year </button>

                        </div>
                        <Grapg/>
                    </div>
                    <div className='bot-grid'>
                        <div className='middle-grid-3'>
                            <span className='main-text'>Active Patient List</span>
                            <button className='second-button'>See All </button>
                        </div>
                        <div className='bot-grid-1'>
                            <div className="color-new g">Patients</div>
                            <div className="color-new none-768 g">Diseases</div>
                            <div className="color-new text-align g">Data & Time</div>
                            <div className="color-new text-align g  ">Result</div>
                        </div>
                        <div className="account">
                            <div className='flex-1'>
                                <img src={dog1} alt="" className='unit2'/>
                                <div className='account-text'>Mitzi
                                    <div className='color-new mini'>Male/Dog</div>
                                </div>

                            </div>
                            <div  className='gg'>
                                <div>Polio Infection</div>
                                <div className='color-new mini'>Patient</div>
                            </div>
                            <div  className='ggg'>Fri 15 oct 2022
                                <div className='color-new mini'>10:00am-10:30am</div>
                            </div>
                            <div >
                                <button className='cnop'>Procesing</button>
                            </div>
                            <div className='flex'><img src={next} alt="" className='unit3'/></div>
                        </div>
                        <div className="account">
                            <div className='flex-1'>
                                <img src={dog3} alt="" className='unit2'/>
                                <div className='account-text'>Jemmy
                                    <div className='color-new mini'>Female/Dog</div>
                                </div>

                            </div>
                            <div className='gg'>
                                <div>Polio Infection</div>
                                <div className='color-new mini'>Patient</div>
                            </div>
                            <div  className='ggg'>Fri 15 oct 2022
                                <div className='color-new mini'>11:30am-12:00am</div>
                            </div>
                            <div >
                                <button className='cnop1'>Waiting</button>
                            </div>
                            <div className='flex'><img src={next} alt="" className='unit3'/></div>
                        </div>
                        <div className="account">
                            <div className='flex-1'>
                                <img src={dog2} alt="" className='unit2'/>
                                <div className='account-text'>Mochi
                                    <div className='color-new mini'>Male/Cat</div>
                                </div>

                            </div>
                            <div className='gg'>
                                <div>Polio Infection</div>
                                <div className='color-new mini'>Patient</div>
                            </div>
                            <div  className='ggg'>Fri 15 oct 2022
                                <div className='color-new mini'>2:30am-3:00am</div>
                            </div>
                            <div >
                                <button className='cnop2'>Approved</button>
                            </div>
                            <div className='flex'><img src={next} alt="" className='unit3'/></div>
                        </div>
                    </div>
                </div>
               <RightElement />
            </div>

        </div>
    )
}
export default Main;