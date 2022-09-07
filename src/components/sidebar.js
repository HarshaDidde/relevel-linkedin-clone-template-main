import React from 'react'
import relevel from '../images/logo.png';
import {AiOutlineTeam, AiFillBank,AiOutlineDollar} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <section className='sidebar'>
      <img src={relevel} alt="relevel"></img>
      <AiOutlineTeam/>
      <AiFillBank/>
      <AiOutlineDollar/>
      <IoSettingsOutline/>
    </section>
  )
}

export default Sidebar
