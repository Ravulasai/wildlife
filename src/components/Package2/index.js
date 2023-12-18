import {React,useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import './p2.css'

const images = [
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153600/Spot_Billed_ducks_Kabini_hwm7tw.jpg",
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153598/Kabini_Leopard_1_p4mezi.jpg",
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153599/Mom_n_me_Kabini_obupgt.jpg",
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153598/Kabini_elephant_1_os2djn.jpg",
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153666/TU_Kabini_guests_ujbmxh.jpg",
    "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153681/RC_Team_Kabini_DSC5275_rqvbui.jpg"
]

const inclusions=["Two nights stay at JLR Kabini at Viceroy rooms on sharing basis",
      "Safaris by jeep and boat as mentioned on shared basis","Forest fees","Guide fees"]
  
  const exclusions=["Any travel to and from Kabini",
      "Camera fees levied by the Govt. This can be settled before check out at the resort’s office","Anything other than mentioned in the Inclusions section"]

const Package2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
   
  const handleBack=()=> {
    window.history.back();
  }

    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Journey to the famed forests of South India - Kabini</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>80 kms from the princely state of Mysore and about 240 kms from the IT city of
            Bangalore, lies one of the most beautiful forests patches of the World. The Kabini reservoir is the
            cradle of life for its dwellers around this place. During the months of summer, hundreds of
            pachyderms from the nearby forests come and spend their time on the banks of the reservoir.
            Kabini is home for the Royal Bengal tiger, the leopard and wild dogs. It is also home for a multitude
            of birds.</p>
            <p className='list-style'>Our team at Travel Unbounded have curated a wonderful journey to this fame forests during the
            2024 Sankranthi holidays for your, your friends and families.</p>
        </div>
        </div>
        </div>
        </div>
    <div className="container mt-5">
    <div className='row carousel-container-package'>
    <div className='col-12'>
      <button className="arrow left-arrow-package" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content-package">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="arrow right-arrow-package" onClick={nextSlide}>
        &gt;
      </button>
      </div>
      </div>
      </div>
        <div className='container'>
            <div className='row'>
            <div className='col-12 list-group data-container-package' style={{width:'100%'}}>
            <h3 className='mb-5 mt-5 package-head'>Short Itinerary</h3>
            <details className=' list-group-item list-style'> <summary><b>Day-1</b></summary>
            <hr/>
            <p className='list-style'>Arrive at Kabini around 1PM, check in and proceed for lunch. Post lunch, gear up for a ride
            into the Park with tea/ coffee served at the Gol Ghar. Safari would by a jeep or the boat. You would
            be accompanied by one of the best trained Naturalists, who would share their immense knowledge
            on the flora and fauna of Kabini. Return to the resort around 6.30PM. Have tea/coffee at the Gol
            Char and return to your rooms. Dinner is served from 8.30PM till 10.00PM. Retire for the day after
            dinner. ( L D )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Wake up early, freshen yourself and assemble at the Gol Char for your hot early morning
            cup of tea/coffee. Post that you would be allocated different vehicles or boat for the jungle safari.
            Explore the beautiful jungle of Kabini.</p>
            <p className='list-style'>The boat safari is also very interesting here. The boat cruises along the river, and one can sight a
            numerous birds, crocodiles, otters and on a lucky day sight the big cats come to the river to quench
            their thirst. Herds of elephants can easily be sighted during the summer months along the banks of
            the river. Return to the resort by 9.45AM for some mouthwatering breakfast. Post breakfast, you
            can take a lazy stroll inside the resort or take some rest.</p>
            <p className='list-style'>Post lunch enjoy your afternoon safari inside the jungle. Over the last decade, Kabini a black
            leopard has made its home here and is sighted quite regularly. Lucky guests have got to sight this
            elusive cat too. Return to the resort, have you favourite hot beverage at the Gol Ghar. You can
            watch th wildlife movie which would be screened at the Interpretation center, or bask in the warmth

            of the camp fire. Dinner is served from 8.30PM till 10.00PM. Retire for the day after dinner. ( B L D)</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
             <p className='list-style'>Wake up to a hot early morning cup of tea/coffee. Winter morning boat Cruise through the
            serene backwaters of the River Kabini on a motor boat is truly a mystical experience. The mist
            which hugs the water slowly raise as the Sun creeps through the clouds. The chirpy birds are very
            active and busy diving for their morning catch. Alternatively, you can go on a jeep safari to sight the
            animals, which means you can have the boat ride the evening before. The jeep safari and the boat
            safari has to be alternate and also the zones would be changed for every safari. This would enable
            you to explore the full jungle in just 2 nights and 3 days!! Return to the resort for a hearty brunch.
            Check out. ( B )</p>
            </details>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Payment Methods</h3>
                    <ul className='list list-style'>
                        <li>Cost per person - Ex Kabini - INR <span className='number'>33,307/-</span></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% of the tour cost to be paid at the time of booking</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 mb-5">
                    <h3 class=" mt-5 mb-5 package-head">
                       Bank Details
                    </h3>
                        <p className='list-style'>Name : Travel Unbounded World pvt ltd</p>
                        <p className='list-style'>Status : Current Account</p>
                        <p className='list-style'>Bank : HDFC</p>
                        <p className='list-style'>Branch: Airport Road, Bangalore</p>
                        <p className='list-style'>Account No : <span className='number'>50200012940675</span></p>
                        <p className='list-style'> IFSC : <span className='number'>HDFC0000075</span></p>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% refund would be given as credit to travel on future trip to Kabini if cancelled on or before
                        60 days of travel</li>
                        <li>No refund if trip is cancelled on or before 59 days before the tour dates.</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
                    <ul className='list-group list-style'>
                      {inclusions.map((item, index) => (
                      <li key={index} className='list-group-item'>{item}</li>
                      ))}
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
                    <ul className='list-group list-style'>
                    {exclusions.map((item, index) => (
                    <li key={index} className='list-group-item'>{item}</li>
                    ))}
                    </ul>
                </div>
                
                <div class="col-12 col-md-12 text-center">
                    <h3 class="mb-5 mt-5 package-head">Contact</h3>
                    <p className='list-style'>ck@travelunbounded.com -  <span className='number'>+91 9845090014</span> - Chandru</p>
                    <p className='list-style'>sk@travelunbounded.com -  <span className='number'>+91 9739255255</span> - Suresh</p>
                    <p className='list-style'>sg@travelunbounded.com -  <span className='number'>+91 9884023028</span> - Supratik Gosh</p>
                </div>
                <div className='text-center mt-5'>
                <BsArrowLeftSquareFill size={30} onClick={handleBack}/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}
export default Package2;