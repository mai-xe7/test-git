import React, { useEffect } from 'react';
// import '../course.css';
import { SiHtmx } from "react-icons/si";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaJava } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaMobileScreen } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import '../style.css';

function Slider() {
    useEffect(() => {
        // Initialize Swiper after component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const Swiper = window.Swiper; // Access Swiper from the global window object
            const mySwiper = new Swiper('.swiper', {
                // Swiper options
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="collection">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="content swiper-slide">
                        <div className="card card2" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <GrReactjs />
                                </div>
                                <p className="para">
                                    <b>React</b> is a powerful JavaScript library used to build dynamic, interactive user interfaces for web applications. Known for its efficiency and flexibility, React is great for beginners who want to build fast, scalable applications. React makes development intuitive and modular.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content swiper-slide">
                        <div className="card card1" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <FaJava />
                                </div>
                                <p className="para">
                                    <b>JAVA</b> is a versatile, high-performance programming language widely used in web development, mobile applications. With its powerful object-oriented features and robust performance, Java offers beginners a solid foundation in coding and opens up opportunities across various tech industries.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content swiper-slide">
                        <div className="card card3" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <GiStairsGoal />
                                </div>
                                <p className="para">
                                    <b>Beginners</b> If you're new to coding, our beginner-friendly courses will guide you through the basics. Whether you want to learn programming languages, software development, or mobile app creation, we provide easy-to-follow tutorials and hands-on projects that set you up for success in the tech world.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content swiper-slide">
                        <div className="card card4" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <FaMobileScreen />
                                </div>
                                <p className="para">
                                    <b>Mobile Application</b> Learn to build mobile applications that run on Android and iOS devices. The mobile app track covers the fundamentals of app development, including user experience design and platform-specific tools. This track helps you bring your app ideas to life.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content swiper-slide">
                        <div className="card card5" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <GiWeightLiftingUp />
                                </div>
                                <p className="para">
                                    <b>Backend Track</b> teaches you how to build the server-side logic and infrastructure of applications. You'll work with databases, APIs, and server environments using languages like Python, Node.js, or Java. This track is ideal for those interested in handling data, security, and application logic.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content swiper-slide">
                        <div className="card card6" data-aos="fade-up">
                            <div className="content">
                                <div className='iconf'>
                                    <SiHtmx />
                                </div>
                                <p className="para">
                                    <b>Frontend Track</b> focuses on the user interface of websites and applications. It covers essential technologies like HTML, CSS, and JavaScript to create responsive, visually engaging designs. Perfect for beginners, this track helps you bring your creative ideas to life on the web.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="swiper-pagination"></div>
            {/* Navigation Buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </section>
    );
}

export default Slider;
