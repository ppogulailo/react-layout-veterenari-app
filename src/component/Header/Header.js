import React from "react";
import './Header.css'
import search from '../../img/1/search-free-icon-font.png'
import bell from '../../img/1/bell-free-icon-font.png'
import mail from '../../img/1/envelope-free-icon-font.png'
import man from '../../img/man.png'
import header from "../../img/footprint.png";
import {NavLink} from "react-router-dom";
import window from "../../img/3/windows-free-icon-font.png";
import lapa from "../../img/3/paw-free-icon-font.png";
import calendar from "../../img/3/calendar-free-icon-font.png";
import apteka from "../../img/3/doctor-free-icon-font.png";
import dolar from "../../img/3/usd-circle-free-icon-font.png";
import file from "../../img/3/file-free-icon-font.png";
import calendar2 from "../../img/3/folders-free-icon-font.png";
import cross from '../../img/cross-free-icon-font.png'
const Header=()=>{

    const itemRef1=React.useRef();
    const [menu,setMenu]= React.useState(false);

    const handleOutside=()=>{
        setMenu(!menu)
        }

    return(
        <div className='bord-he' >
            <div className='grid-header'>
                        <img src={header} alt="" className='header-img block-on' ref={itemRef1} onClick={handleOutside}/>
                {menu?( <div className='buttons-add'>
                    <img src={cross} alt="" className='exit' onClick={handleOutside}/>
                    <div className='button'>
                        <img src={window} alt="" className='unit-g'/>
                        <span className='ml-52'>Overviews</span>
                    </div>
                    <div className='button'>
                        <img src={lapa} alt="" className='unit-g'/>
                        <span className='ml-52'>Patients</span>
                    </div>
                    <div className='button'>
                        <img src={calendar} alt="" className='unit-g'/>
                        <span className='ml-52'>Appointments</span>
                    </div>
                    <div className='button'>
                        <img src={apteka} alt="" className='unit-g'/>
                        <span className='ml-52'>Good store</span>
                    </div>
                    <div className='button'>
                        <img src={dolar} alt="" className='unit-g'/>
                        <span className='ml-52'>Finance</span>
                    </div>
                    <div className='button'>
                        <img src={file} alt="" className='unit-g'/>
                        <span className='ml-52'>Invices</span>
                    </div>
                    <div className='button'>
                        <img src={calendar2} alt="" className='unit-g'/>
                        <span className='ml-52'>Documents</span>
                    </div>
                </div>):(null)}
                <div className='flex-1'>
                    <h2>Veterinary</h2>
                    <img src={search} alt="" className='unit-flex'/>
                    <form>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='i'
                        />
                    </form></div>
                <div className='sms'>
                    <img src={mail} alt="" className='mail'/>
                    <img src={bell} alt="" className='mail'/>
                </div>
                <div className='profile'>
                    <img src={man} alt="" className='acc'/>
                    <div className='profile-info'>
                        <div>Steven Cloban</div>
                        <div className='p'>Specialist</div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Header;