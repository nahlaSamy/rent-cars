

import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import carImage from '../../assets/car.png';
import styles from './HeroSection.module.scss'; 

let HeroSection = () => {
    let [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        return () => setAnimate(false);
    }, []);

    return (
        <section className={`container-fluid ${styles.heroContent}`}>
            <NavBar />
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row py-5">
                    <div className={`col-md-6 ${animate ? styles.animateImg : ''}`}>
                        <h1 className={styles.heading}>
                            Find, book  and  <br />rent a car <span className={styles.highlight}>Easily</span>
                        </h1>
                        <p className={styles['sub-text']}>
                            Get a car wherever and whenever you need it with <br />your iOS and Android device.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={carImage}
                            alt="Car"
                            className={`img-fluid ${styles['car-image']} ${animate ? styles.animateImg : ''}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



