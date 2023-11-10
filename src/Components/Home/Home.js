import React from 'react'
import './Home.css'
import { useEffect } from 'react'
import Products from '../Products/Products';
import { Faker } from 'react-fakers';
import { toast } from 'react-toastify';  
import { ToastContainer } from 'react-toastify';

function Home() {
    useEffect(()=>Slider(0),[]);
  return (
    <div className='home'>
        <div className="home_Container">
            <div className="HomeToastContainer">
                <ToastContainer/>
            </div>
            <div className="homeSliderContainer">
                <div className="homeSlide">
                    <img src="/assets/img1.jpg" alt="" className='homeImg'/>
                </div>
                <div className="homeSlide">
                    <img src="/assets/img2.jpg" alt="" className='homeImg'/>
                </div>
                <div className="homeSlide">
                    <img src="/assets/img3.jpg" alt="" className='homeImg'/>
                </div>
                <div className="homeSlide">
                    <img src="/assets/img4.jpg" alt="" className='homeImg'/>
                </div>
                <div className="homeSlide">
                    <img src="/assets/img5.jpg" alt="" className='homeImg'/>
                </div>
                <div className="homeSlide">
                    <img src="/assets/img6.jpg" alt="" className='homeImg'/>
                </div>
            </div>
           <div className="Home_Row">
           <Products 
            id={12301}
            title="Product1"
            price={130}
            rating={5}
            image="https://www.bing.com/th?id=OIP.ZpgL-9LjKksUTspHysxIzwHaJ-&w=150&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
             <Products 
            id={12302}
            title="Product2"
            price={190}
            rating={3.7}
            image="https://th.bing.com/th/id/OIP.tRyXg87M_e6VAgogaPfBwgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7"
            />
              <Products 
            id={12303}
            title="Product3"
            price={290}
            rating={4}
            image="https://t4.ftcdn.net/jpg/00/50/28/73/240_F_50287358_6YUbcdQKIUJ2aXqQPB0JXS14HztBsS2o.jpg"
            />
             <Products 
            id={12304}
            title="Product4"
            price={300}
            rating={4.5}
            image="https://th.bing.com/th/id/OIP.E-UWMOijusNJFIyrjEDYVwHaJv?w=184&h=243&c=7&r=0&o=5&pid=1.7"
            />
              <Products 
            id={12305}
            title="Product5"
            price={110}
            rating={3.9}
            image="https://www.bing.com/th?id=OIP.01W5VHMg221bzb_CpfMuYAHaHd&w=150&h=152&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
           </div>
           <div className="Home_Row">
           <Products 
            id={12306}
            title="Product6"
            price={170}
            rating={5}
            image="https://www.bing.com/th?id=OIP.agtlwlb8wl13JnygSFiIfgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
             <Products 
            id={12307}
            title="Product7"
            price={130}
            rating={4.4}
            image="https://th.bing.com/th/id/OIP.VdubFH_2YVwdUzZfBbLMqgHaHn?w=211&h=218&c=7&r=0&o=5&pid=1.7"
            />
              <Products 
            id={12308}
            title="Product8"
            price={165}
            rating={4.1}
            image="https://th.bing.com/th?id=OIP.PVzN-rzHq5ZeQSvO9pJBPAHaKL&w=213&h=293&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2"
            />
           </div>
           <div className="Home_Row">
           <Products 
            id={12309}
            title="Product9"
            price={1200}
            rating={3.6}
            image="https://th.bing.com/th?id=OIP.ovaJ_U5kNF2o4F7nFb9GsAHaGN&w=272&h=228&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
             <Products 
            id={12310}
            title="Product10"
            price={2060}
            rating={4}
            image="https://th.bing.com/th?id=OIP.kO6Sv_K23W_woagEMroQ3gHaFK&w=299&h=208&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
           </div>
           <div className="Home_Row">
           <Products 
            id={12311}
            title="Product11"
            price={1030}
            rating={5}
            image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
             <Products 
            id={12312}
            title="Product12"
            price={947}
            rating={3.7}
            image="https://th.bing.com/th?id=OIP.MjdMEdESeeWaUme2JCdWBgAAAA&w=282&h=221&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
              <Products 
            id={12313}
            title="Product13"
            price={575}
            rating={4}
            image="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
           </div>
        </div>
    </div>

  )
}

function Slider(Counter){
    const slides=document.querySelectorAll(".homeImg");
    slides.forEach((slide,index)=>{
        if(index !== Counter){
            slide.style.visibility=`hidden`;
            slide.classList.add(`image-${index}`);
        }
    });
    moveCorousal(Counter,slides,slides.length)
}

function moveCorousal(Counter,slides,len){
    if(slides){
        if(Counter>=len-1)Counter=0;
        else Counter +=1;
        slides.forEach((slide,index)=>{
            if(index===Counter){
                slide.style.visibility=`visible`
            }else{
                slide.style.visibility=`hidden`
            }
        });
    }
    setTimeout(()=>{
        moveCorousal(Counter,slides,len);
    },4000);

}

export default Home