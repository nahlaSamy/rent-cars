import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.module.css'; 
import TestimonialCarousel1 from '../../assets/TestimonialCarousel1.png'; 
import star from '../../assets/star.png'; 

export default function Testimonial() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let testimonials = [
    {
      name: 'Charlie Johnson',
      image: TestimonialCarousel1, 
      rating: 8.5,
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      time: 'Last updated 3 mins ago',
    },
    {
      name: 'Charlie Johnson 2',
      image: TestimonialCarousel1,
      rating: 7.5,
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      time: 'Last updated 3 mins ago',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center my-4">What People Say About Us ?</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card mb-3  shadow h-100" >
            <div className="row g-0 flex-md-row flex-column align-items-center justify-content-between">
              <div className="col-md-6">
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-start w-100 h-100" />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div className="d-flex align-items-baseline">
                    <img src={star} alt="" />
                    <h6 className="mx-1">{testimonial.rating}</h6>
                  </div>
                  <p className="card-text my-4">{testimonial.text}</p>
                  <div className="card-text mt-auto">
                    <p className="bold mb-0">{testimonial.name}</p>
                    <small className="text-muted">{testimonial.time}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
