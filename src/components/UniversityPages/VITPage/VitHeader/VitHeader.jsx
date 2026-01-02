import React from 'react'
import './VitHeader.css'
const VitHeader = () => {
  return (
  <div className="vitHeader-container">
      {/* <Image src={banner} alt="banner" /> */}
      <div className="vitHeader-cover">
        <div className="vitHeader-content">
          <h6> Top-Ranked Online Degree & Certification Programs</h6>
          <h2>Online Learning Real-World Value</h2>
          <p>
            ​Earn Industry-recognized Degrees and Certifications Online - just
            as credible as Campus-Based Learning.
          </p>
          <div className="vitHeader-btnContainer">
            <button className="button-87" role="button" onClick={handlePop}>
              Enroll Now{" "}
            </button>
            <a href="tel:6362946008">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="vitHeader-content">
          
        </div>
      </div>
    </div>
  )
}

export default VitHeader
