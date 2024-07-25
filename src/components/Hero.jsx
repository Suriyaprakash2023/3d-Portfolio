// import React from 'react'
import HeroBgAnimation from './HeroBgAnimation'
// import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/HeroImage.jpg'
import HeroImg from './images/HeroImage1.webp';
import Typewriter from 'typewriter-effect';
// import { Bio } from '../../data/constants';
import { Bio } from './data/constants';
import { Link } from 'react-router-dom';
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import './Hero.css';

import { FaFacebook } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";



// import { SiLeetcode } from "react-icons/si";
// ...


const HeroSection = () => {
    return (
        <div id="about" >
            <HeroContainer className='hero-container'>
                <HeroBg >
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left" className='mt-5'>
                        {/* <Title>Hi, I am <br /> <Span className='pink-font'> {Bio.name} </Span></Title> */}
                        <TextLoop>
                            I am a
                            <Span className='green-font'>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton className='gradient-button' href={Bio.resume} target='display'>Check Resume</ResumeButton> */}

                        <div className="flex items-center gap-3 my-3 ">
                            <Link
                                to='https://github.com/Suriyaprakash2023'
                                href={Bio.github}
                                target='_blank'
                                className=" icon-link"
                            >
                                <BsGithub size={30} />
                            </Link>
                            <Link
                                href={Bio.linkedIn}
                                target='_blank'
                                className="icon-link"
                            >
                                <BsLinkedin size={30} />
                            </Link>
                            <Link
                                href={Bio.facebook}
                                target='_blank'
                                className="icon-link"
                            >
                                <FaFacebook size={30} />
                            </Link>
                            <Link
                                href={Bio.leetcode}
                                target='_blank'
                                className="icon-link"
                            >
                                <SiLeetcode size={30} />
                            </Link>
                            <Link
                                href={Bio.twitter}
                                target='_blank'
                                className="icon-link"
                            >
                                <FaHackerrank size={30} />
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 my-5" id='style-buttons'>
                            <Link to="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">

                                <button class="btn" type="button">
                                    <i class="fa-regular fa-user pr-2"></i>
                                    <strong>Contact Me</strong>
                                    <div id="container-stars">
                                        <div id="stars"></div>
                                    </div>

                                    <div id="glow">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </button>

                            </Link>

                            <Link className='ms-3' role="button" >
                                {/* <span >Get Resume</span> */}


                                <button class="cssbuttons-io-button">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path></svg>
                                    <span>Download</span>
                                </button>



                            </Link>

                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection