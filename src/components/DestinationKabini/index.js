import React from 'react'
import {useRef} from 'react'
import './kabini.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowDownSquareFill } from "react-icons/bs";
import Overview from '../Overview'
import Navbar  from '../Navbar';
import Footer from '../Footer'

const images = [
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1697440201/Spot_Billed_ducks_Kabini_jfkpc3.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1697440189/Mom_n_me_Kabini_s8iwhf.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1697440168/Kabini_Leopard_ciqcsb.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1697432381/Kabini_elephant_wqhzat.jpg'
]

const inclusions = ["Full board stay at a Jungle Lodges &amp; resorts","Game drives","National park permit & Entry fees","English speaking guides"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusion section"];

const itinerary_details =
        {
        name:'Kabini',
        inr:'Indian Nationals - ₹9,000',
        fn:'Foreign Nationals - $150'
        }
  



const DestinationKabini = () => {
    const sec0 = useRef();
    const sec1 = useRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();
    const sec5 = useRef();
    const sec6 = useRef();
    const sec7 = useRef();
    const sec8 = useRef();
    const sec9 = useRef();
    const sec10 = useRef();
  

    const scrollHandler = (elemRef) => {
        window.scrollTo({top:elemRef.current.offsetTop, behavior:"smooth"})
    }

    return(
    <>
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner  d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dr0vyis3o/video/upload/v1698391439/Kabini_corrected_iia9kr.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/> 
    </div>
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 data-container mt-3">
                <h2 className='bold mb-3 package-head'>Kabini - Land of the stripes and spots</h2>
                <p className='dest-text'>Situated at just 165 kms from Bangalore, this beautiful piece of forest land borders Kerala on
                one side. The Nagarhole or the snake river flows through this jungle. The Kabni backwaters is the place
                where the highest congregation of Asiatic elephants happen every year. The pachyderms from bordering
                states come to this large water body during summers as the waterholes inside the forests dry up.</p>
                <p className='dest-text'>Kabini is one place where the top three predators of the subcontinent are found. The Tiger, the leopard and
                the wild dogs roam these forests. The forests teems with spotted deers, sambhar deers, great Indian squirrel,
                Indian gaur ( Bison ) and the elusive musk deer. Birdlife is very good at Kabini.</p>
                <p className='dest-text'>Over the last decade an elusive black panther has also made his home here. Post monsoons, the leopards are
                found resting on high branches of the trees. Kabini is known as the Land of the leopards also. It is one of the
                top wilderness destinations of the World and is very easily accessible.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec3)}/> 
            </div> 
            </div>
      </div>
    </div>

    <div className="container" ref={sec3}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Getting there</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698994464/11_amte3s.png' alt='' className='weather-img'/>      
          <div className='scroll-container'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec4)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec4}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698995507/12_zmkfvb.png' alt='' className='weather-img'/>      
          <div className='scroll-container mt-3'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec5)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec5}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>VISA formalities</h2>
          <p className='dest-text'>The vast majority of visitors from abroad require a visa for India. There are different types of visa
                available, depending on the nationality of the traveler, the length of time they plan to stay in the
                country, and the purpose of the visit. The electronic visa or e-Visa for India is available for the
                majority of nationalities. It can be obtained by completing a simple online application form. The
                India e-Visa is processed quickly and delivered to the applicant by email. The link for the e-visa is to <a href='https://indianvisaonline.gov.in/evisa' target="_blank" rel="noopener noreferrer">click</a></p>
                <p className='dest-text'>Citizens of a number of countries are not able to apply online and must obtain a visa from an
                Indian embassy instead.</p>
          <div className='scroll-container'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec6)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    
    <div className="container" ref={sec6}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>Points of interest - Kabini</h2>
                <p className='dest-text'>Kabini Dam - About 50 kms before the Jungle lodges and resorts , Kabini, one has to take a
                diversion to this marvel built in the year 1974. This huge reservoir is a significant water source for
                the surrounding 25 villages. The dam has got specific timings when people are allowed to visit.</p>
                <p className='dest-text'><b>Kabini river -</b>Boating is a surreal experience in the Kabini river. During one’s stay at Jungle lodges and resorts,
                one can opt for a boat safari or go for aa friendly coracle ride. The river has a lot of surprises. Bird
                life is abundant here. One can easily site the playful river otters. On a lucky day, there is a bright
                chance of sighting even a big cat coming to quench its thirst. During summers, huge herds of
                elephants and their families can be sighted from the boat.</p>
                <p className='dest-text'><b>Mysore City -</b>The simple and the beautiful city of Mysore lies Enroute from Bangalore to Kabini. It
                s from here the yesteryear Kings ruled the princely state of Mysore. The Mysore palace is the proof
                of the wealthy life the Kings lead during those times. The architectural marvel can be visited during
                ones stay at Mysore. Mysore’s zoo is also very famous and very well kept. Mysore is famous of the
                temples and the Philomena’s church. The silk sarees, sandal wood oil , the wooden carvings are
                some of the hall mark of Mysore. A additional night stay at Mysore on the way back from Kabini
                would be very ideal for tourists to visit this city.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec7)}/> 
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec7}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Weather at Kabini</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1697458777/Kabini_zxz70w.jpg' alt='' className='weather-img'/>
            <div className='scroll-container'>
            <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec8)}/> 
            </div>        
          </div>
        </div>
      </div>
    </div>  

    <div className="container data-container it-container mb-5" ref={sec8}>
      <div className="row">
    <div class="col-12 col-md-6">
      <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
        <ul className='list-group list dest-text'>
          {inclusions.map((item, index) => (
            <li key={index} className='list-group-item'>{item}</li>
          ))}
        </ul>
    </div>
    <div class="col-12 col-md-6">
      <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
        <ul className='list-group list dest-text'>
          {exclusions.map((item, index) => (
            <li key={index} className='list-group-item'>{item}</li>
          ))}
        </ul>
    </div>
    <div className='scroll-container mt-5 mb-5'>
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec9)}/>
    </div> 
      </div>
      </div>


    <div className="container" ref={sec9}>
      <div className="row">
    <div className='col-12 mt-3'>
          <div className='it-container data-container' >
          <Overview images={images} itinerary_details={itinerary_details}/>
      <div className='scroll-container mb-5'>
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec10)}/> 
      </div>  
      </div>
      </div>
      </div>
      </div>
        
      <div className='data-container mt-5' ref={sec10}>
      <Footer/>
      </div>
    </>
    )
}
export default DestinationKabini;