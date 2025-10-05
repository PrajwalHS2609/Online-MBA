"use client"
import React, { useState } from "react";
import "./LpMbaOnlineHeader.css"
const LpMbaOnlineHeader = () => {
    const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    educationLevel: "",
    workExperience: "",
    specialisation: "",
  });

  const [success, setSuccess] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (!formData.fullname || !formData.email || !formData.phone) {
      setError(true);
      setErrorMessage("Please fill all required fields.");
      return;
    }
    setError(false);
    setSuccess(true);
    setReferenceNumber(Math.floor(100000 + Math.random() * 900000)); // dummy ref number
  };
  return (
 <section className="hero-gradient">
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-left">
            <h1>Master of Computer Applications from VIT</h1>
            <h2>Online MCA - A Pathway to Career Excellence</h2>
            <p>
              A two-year, UGC Entitled and AICTE Approved programme delivered
              through live online and recorded sessions by VIT faculty. Ranked
              among India's Top 10 universities (NIRF 2024), this programme is
              designed to meet the evolving demands of the global IT industry.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <button className="btn-primary">Enquire Now</button>
              <button className="btn-secondary">Download Brochure</button>
            </div>
            <div className="award-info">
              <i className="fas fa-award"></i>
              <span>Ranked among India's Top 10 Universities by NIRF 2024</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="form-container">
              {success ? (
                <div className="success-message">
                  <div className="icon">✓</div>
                  {referenceNumber
                    ? `Your Reference Number: ${referenceNumber}. Thank you for your interest. We will contact you shortly.`
                    : "Thank you for your interest. We will contact you shortly."}
                  <div className="text-xl font-bold mb-2">What to do next?</div>
                  <div className="ty-item flex flex-col gap-2 p-4 pb-5">
                    <div className="flex items-center gap-2">
                      <a
                        className="downloadBrochureLink"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Brochure
                      </a>
                    </div>
                  </div>
                  <a
                    className="btn-primary"
                    href="https://registration.vitonline.in"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "block", marginTop: "1rem", textAlign: "center" }}
                  >
                    APPLY NOW
                  </a>
                </div>
              ) : (
                <>
                  {error && <div className="error-message">{errorMessage}</div>}
                  <h3>Get Program Details</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      placeholder="Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                    >
                      <option value="">Education Level</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="diploma">Diploma</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleChange}
                    >
                      <option value="">Work Experience</option>
                      <option value="Still a Student">Still a Student</option>
                      <option value="Less than 5 Years">Less than 5 Years</option>
                      <option value="5-10 Years">5-10 Years</option>
                      <option value="10-15 Years">10-15 Years</option>
                      <option value="16-20 Years">16-20 Years</option>
                      <option value=">20 Years">+ 20 Years</option>
                    </select>
                    <select
                      name="specialisation"
                      value={formData.specialisation}
                      onChange={handleChange}
                    >
                      <option value="">Preferred Specialisation</option>
                      <option value="Artificial intelligence (AI) & Machine learning">
                        Artificial intelligence (AI) & Machine learning
                      </option>
                      <option value="Cyber security">Cyber security</option>
                    </select>
                    <button type="submit">Enquire Now</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LpMbaOnlineHeader
