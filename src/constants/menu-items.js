import React from "react"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"


export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/courses",
    title: "courses",
  },
  {
    path: "/contact",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/analogica-software-dev-pvt-ltd/?viewAsMember=true",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/analogica.in/",
    name: "Instagram",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/analogicaXpress",
    name: "Twitter",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
