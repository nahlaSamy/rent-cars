import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import PopularCars from '../PopularCars/PopularCars'
import RentalDeals from '../RentalDeals/RentalDeals'
import Testimonial from '../Testimonial/Testimonial'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'


export default function Home() {
  return (
    <div className='container-fluid'>
            <div className="row ">
                <div className="col ">
                    <HeroSection/>

                </div>
            </div>
            <div className="row bg-grey" >
                <div className="col">
                    <PopularCars/>
                </div>
            </div>
            <div className="row " >
                <div className="col">
                    <RentalDeals/>
                </div>
            </div>
            <div className="row " >
                <div className="col">
                    <WhyChooseUs/>
                </div>
            </div>
            <div className="row " >
                <div className="col">
                    <Testimonial/>
                </div>
            </div>
            <div className="row " >
                <div className="col">
                    <Footer/>
                </div>
            </div>

          
        </div>
  )
}
