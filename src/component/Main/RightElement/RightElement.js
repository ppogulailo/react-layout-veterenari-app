import React from "react";
import '../Main.css'

import  dog3 from '../../../img/dog/dog (1).png'

import dog4 from '../../../img/dog2/dog (3).png'
import dog5 from '../../../img/dog2/dog (4).png'

import cat from '../../../img/dog2/cat (1).png'


const RightElement=()=>{
    React.useEffect(()=>{
        document.body.addEventListener('click',handleOutside)
    },)

    const itemRef1=React.useRef();
    const itemRef2=React.useRef();
    const itemRef3=React.useRef();
    const itemRef4=React.useRef();
    const [pop,setPop]=React.useState(false);
    const [raz,setRaz]=React.useState(false);
    const [brand,setBrand]=React.useState(false);
    const [cost,SetCost]=React.useState(false);
    const handleOutside=(e)=>{
        if (!e.path.includes(itemRef4.current)){
            setPop(false)
        }else if(e.path.includes(itemRef4.current)){
            setPop(true)
        }
        if (!e.path.includes(itemRef1.current)){

            setRaz(false)
        }else if(e.path.includes(itemRef1.current)){
            setRaz(true)
        }
        if (!e.path.includes(itemRef2.current)){

            setBrand(false)
        }else if(e.path.includes(itemRef2.current)){
            setBrand(true)
        }
        if (!e.path.includes(itemRef3.current)){

            SetCost(false)
        }else if(e.path.includes(itemRef3.current)){
            SetCost(true)
        }
    }

    return(

                <div className='right'>
                    <div className='grid-right'>
                        <h2>Appointment</h2>
                        <button className='second-button'>Today</button>
                    </div>
                    <div>
                        <div className='right-acc'ref={itemRef1}>
                            <div className='pad-grid'>
                                <img src={dog4} alt="" className='unit5'/>
                                <div>  <div className='flex-3'><div>Butteres</div><div className='cnop-3 mini'>Old</div></div>
                                    <div className='color-new mini'>Male/Dog | 10:30am</div></div>
                                <i className={raz ? 'arrow active-a':'arrow right-arrow'}></i>

                            </div>
                        </div>
                        {raz?(
                            <div> <div className='info'>
                                <div className='mini n color-new'>Data</div>
                                <div className='mini n color-new'>Gender</div>
                                <div className='mini'>Friday 15 October,2022</div>
                                <div className='mini'>Male</div>
                                <div className='mini n color-new'>Time</div>
                                <div className='mini n color-new'>Animal</div>
                                <div className='mini'>10:30am-11:30am</div>
                                <div className='mini'>Coloban Dog</div>
                            </div>
                                <div className='pd1'>
                                    <button className='second-button-2'>Cnacel with Note</button>
                                    <button className='second-button-3'>Send Any Update </button>
                                </div></div>
                        ):(null)}



                    </div>
                    <div className='right-acc' ref={itemRef2}>
                        <div className='pad-grid'>
                            <img src={cat} alt="" className='unit5'/>
                            <div>
                                <div className='flex-3'><div>Nana</div><div className='cnop-2 mini'>New</div></div>

                                <div className='color-new mini'>Female/Cat | 11:00am</div></div>
                            <i className={brand ? 'arrow active-a':'arrow right-arrow'}></i>

                        </div>
                    </div>
                    {brand?(
                        <div> <div className='info'>
                            <div className='mini n color-new'>Data</div>
                            <div className='mini n color-new'>Gender</div>
                            <div className='mini'>Friday 15 October,2022</div>
                            <div className='mini'>Female</div>
                            <div className='mini n color-new'>Time</div>
                            <div className='mini n color-new'>Animal</div>
                            <div className='mini'>11:00am-11:30am</div>
                            <div className='mini'>Cat</div>
                        </div>
                            <div className='pd1'>
                                <button className='second-button-2'>Cnacel with Note</button>
                                <button className='second-button-3'>Send Any Update </button>
                            </div></div>
                    ):(null)}
                    <div className='right-acc'ref={itemRef3}>
                        <div className='pad-grid'>
                            <img src={dog5} alt="" className='unit5'/>
                            <div><div className='flex-3'><div>Piper</div><div className='cnop-2 mini'>New</div></div>
                                <div className='color-new mini'>Male/Dog | 1:30am</div></div>
                            <i className={cost ? 'arrow active-a':'arrow right-arrow'}></i>

                        </div>
                    </div>
                    {cost?(
                        <div> <div className='info'>
                            <div className='mini n color-new'>Data</div>
                            <div className='mini n color-new'>Gender</div>
                            <div className='mini'>Friday 15 October,2022</div>
                            <div className='mini'>Male</div>
                            <div className='mini n color-new'>Time</div>
                            <div className='mini n color-new'>Animal</div>
                            <div className='mini'>1:30am-2:00am</div>
                            <div className='mini'>Dog</div>
                        </div>
                            <div className='pd1'>
                                <button className='second-button-2'>Cnacel with Note</button>
                                <button className='second-button-3'>Send Any Update </button>
                            </div></div>
                    ):(null)}
                    <div className='right-acc'ref={itemRef4}>
                        <div className='pad-grid'>
                            <img src={dog3} alt="" className='unit5'/>
                            <div><div className='flex-3'><div>Chiquita</div><div className='cnop-2 mini'>New</div></div>
                                <div className='color-new mini'>Female/Dog | 3:00am</div></div>
                            <i className={pop ? 'arrow active-a':'arrow right-arrow'}></i>

                        </div>
                    </div>
                    {pop?(
                        <div> <div className='info'>
                            <div className='mini n color-new'>Data</div>
                            <div className='mini n color-new'>Gender</div>
                            <div className='mini'>Friday 15 October,2022</div>
                            <div className='mini'>Female</div>
                            <div className='mini n color-new'>Time</div>
                            <div className='mini n color-new'>Animal</div>
                            <div className='mini'>3:00am-3:30am</div>
                            <div className='mini'>Dog</div>
                        </div>
                            <div className='pd1'>
                                <button className='second-button-2'>Cnacel with Note</button>
                                <button className='second-button-3'>Send Any Update </button>
                            </div></div>
                    ):(null)}

                    <div className='pd1'>
                        <button className='second-button-2'>See All </button>
                    </div>

                </div>



    )
}
export default RightElement;