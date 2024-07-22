import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
// import { Bio } from '../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import './Navbar.css';
import LogoImg from './images/Suriya.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
 
        <NavLogo to='/'>
        <img src={LogoImg}  alt="Your Image Description" className='img-logo'/>
          <Span className='nav-name' style={{  fontSize: '26px'}}>uriya</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" className="nav-link">About</NavLink>
          <NavLink href='#skills'className="nav-link">Skills</NavLink>
          <NavLink href='#experience' className="nav-link">Experience</NavLink>
          <NavLink href='#projects' className="nav-link">Projects</NavLink>
          <NavLink href='#education' className="nav-link">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton className='github-button'  target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar