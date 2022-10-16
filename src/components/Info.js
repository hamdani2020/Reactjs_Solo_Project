import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import image from "../images/i1.jpg"
const Info = () => {
  return (
    <div>
      <img src={image} alt="Infoimage" />
      <h4>Hamdani Alhassan</h4>
      <h5>Frontend Developer</h5>
      <h6>Lorem Ipsum</h6>

      <button> <FaEnvelope/>Email </button>
    </div>
  )
}

export default Info
