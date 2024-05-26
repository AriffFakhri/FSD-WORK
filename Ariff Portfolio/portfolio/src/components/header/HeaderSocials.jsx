import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank" ><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com" target="_blank" ><FaSquareXTwitter /></a>
    </div>
  )
}

export default HeaderSocials