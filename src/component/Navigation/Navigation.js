import React from "react";
import './Navigation.css'
import header from '../../img/footprint.png'
import window from '../../img/3/windows-free-icon-font.png'
import lapa from '../../img/3/paw-free-icon-font.png'
import apteka from '../../img/3/doctor-free-icon-font.png'
import dolar from '../../img/3/usd-circle-free-icon-font.png'
import calendar from '../../img/3/calendar-free-icon-font.png'
import calendar2 from '../../img/3/folders-free-icon-font.png'
import file from '../../img/3/file-free-icon-font.png'
import {NavLink} from "react-router-dom";
const Navigation=()=>{
    return(
        <div className='bord'>
            <div className='height'>
                <div className='height-block'>
                    <img src={header} alt="" className='header-img'/>
                    <h1 className='logo'>Veterinary</h1>
                </div>
            </div>
            <div className='buttons'>
                <NavLink to='/'  activeClassName='active'><div className='button-active'>
                    <img src={window} alt="" className='unit'/>
                    <span className='ml-5'>Overviews</span>
                </div></NavLink>
                <div className='button'>
                    <img src={lapa} alt="" className='unit'/>
                    <span className='ml-5'>Patients</span>
                </div>
                <div className='button'>
                    <img src={calendar} alt="" className='unit'/>
                    <span className='ml-5'>Appointments</span>
                </div>
                <div className='button'>
                    <img src={apteka} alt="" className='unit'/>
                    <span className='ml-5'>Good store</span>
                </div>
                <div className='button'>
                    <img src={dolar} alt="" className='unit'/>
                    <span className='ml-5'>Finance</span>
                </div>
                <div className='button'>
                    <img src={file} alt="" className='unit'/>
                    <span className='ml-5'>Invices</span>
                </div>
                <div className='button'>
                    <img src={calendar2} alt="" className='unit'/>
                    <span className='ml-5'>Documents</span>
                </div>
            </div>
        </div>
    )
}
export default Navigation;