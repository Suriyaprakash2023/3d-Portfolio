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

import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

// import { SiLeetcode } from "react-icons/si";
// ...


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
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
                        <div className="my-3 ">
                            <Link
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
                            <FaTwitterSquare size={30} />
                            </Link>
                        </div>
                          
                        <div className="flex items-center gap-3">
                            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                            <div className='outline-button'>  
                                  <button className='btn text-white ' >
                                    <span>Contact me</span>
                                    <RiContactsFill size={16} />
                                </button>
                            </div>
                            </Link>

                            <Link className='gradient-button ms-3' role="button" 
                            >
                            <span >Get Resume</span>
                            <MdDownload size={16} />
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