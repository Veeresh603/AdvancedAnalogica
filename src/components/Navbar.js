import React, { useState } from "react"
import links from "../constants/links"
import styled from "styled-components"
import {Link} from "gatsby"

const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavStyles>
      <div className="masthead">
        <Link to="/"><img src={Logo} alt="Analogica Logo" /></Link>
        <button
          className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link onClick={toggleNav} to={item.path}>{item.text}</Link>
            </li>
          )
        })}
        <LinkedTo to="">Let's Connect</LinkedTo>
      </ul>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  display: flex;
  width: 100%;
  left: 0;
  right: 0;
  padding-top:1rem;
  /* padding-left: 7rem;
    padding-right: 7rem; */
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    /* grid-template-rows: 70px; */
    grid-column-gap: 5px;
  box-sizing: border-box;
   @media (max-width:991px){
     /* padding-left: 2px; */
   }
  .masthead {
    grid-area: 1/2/2/6;
    z-index: 3;
    width: 100%;
    img {
      margin-left: 0px;
      width: 145px !important;
      margin-top:9px;
      @media (min-width: 768px) {
        width: 100px;
      }
      @media (max-width:991px){
        /* margin-left:30px; */

      }
      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }
  .nav-links {
    grid-area:1/5/2/11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    position: fixed;
    text-align: center;
    background: #000000;
    margin: 0;
    height: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;
    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      margin-top:-11px;
      a {
        text-decoration: none;
        text-transform: lowercase;
        color: white;
        transition: 0.3s;
        &.active {
          color: #e609b5;
        }
       
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }
    &.show-nav {
      transform: translateX(0%);
    }
  }
  .toggle-btn {
    position: absolute;
    right: 30px;
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: #000000;
    border: none;
    cursor: pointer;
    
    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;
      &:nth-child(1) {
        transform: translateY(-5px);
      }
      &:nth-child(3) {
        transform: translateY(5px);
      }
    }
    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }
  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;
      li {
        margin-left: 1rem;
      }
    }
    
  }
`
const LinkedTo = styled(Link)`
   width:130px;
   background-color: var(--primaryColor);
   text-align: center;
   text-decoration: none;
   align-items:center;
   align-self: center;
   justify-content: center;
   margin-left:15px;
   padding-top:15px;
   padding-bottom: 15px;
   color: white;
   border-radius: 5px;
  
 
`

export default Navbar