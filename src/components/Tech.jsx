import React from "react";
// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// import { VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
// import { experiences } from "../constants";
// import { textVariant } from "../utils/motion";
import { MyTheme } from "./themes/default";
import styled from "styled-components";
import { skills } from "./data/constants";

import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import image from "./images/HeroImage1.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => MyTheme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => MyTheme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns grid */
    gap: 70px; /* Adjust gap as needed */
    width: 100%;
  
    /* Center items in the second row */
    & > *:nth-child(n+3):nth-child(-n+4) {
      grid-column: span 2; /* Ensures they span two columns */
      display: flex;
      justify-content: center;
    }
  }
  

`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => MyTheme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => MyTheme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => MyTheme.text_primary + 80};
  border: 1px solid ${({ theme }) => MyTheme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;



const Tech = () => {
  return (
    <div className="container">
      <div className="flex flex-row flex-wrap justify-center gap-10">

        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>

        <div className='w-full flex justify-center'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
    
        
        
        <Container id="skills" > 
            <Wrapper>
              <SkillsContainer>
                {skills.map((skill, id) => (
                  <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
                    <Tilt
                      options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                      }}
                      className="bg- p-5 rounded-2xl sm:w-[560px] w-full"
                    >
                      
                      <div className="relative w-full h-[310px]">
                        <div className="w-full h-full object-cover rounded-2xl">
                       
                          <Skill key={skill.id}>
                          <div className="col-6">
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                              {skill.skills.map((item, id) => (
                                <SkillItem
                                  className="skill-item"
                                  style={{
                                    border: "1px solid rgb(104, 201, 246)",
                                  }}
                                  key={item.id}
                                >
                                  <SkillImage src={item.image} />
                                  {item.name}
                                </SkillItem>
                              ))}
                            </SkillList>
                            </div>
                          </Skill>
                         
                        </div>


                      </div>
                    </Tilt>
                  </motion.div>

                ))}
               
              </SkillsContainer>  
            </Wrapper>
          </Container>
         
         


      </div>
    </div>
  );
};
export default SectionWrapper(Tech, "");

// import './Tech.css';
// const Tech = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-6">
//           row-1 col-1
//         </div>
//         <div className="col-6">
//           row-1 col-2
//         </div>
//       </div> 




//       <div className="row">
//         <div className="col-6">
//           row-2 col-1
//         </div>
//         <div className="col-6">
//           row-2 col-2
//         </div>
//       </div> 




      
//     </div>
//   );
// };
// export default SectionWrapper(Tech, "");