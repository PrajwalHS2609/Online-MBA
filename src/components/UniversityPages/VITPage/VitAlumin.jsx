import React from "react";
import "./../UniversityPages.css";
import { FaCalendarCheck, FaNetworkWired, FaNewspaper, FaSuitcase } from "react-icons/fa";

const VitAlumin = () => {
  return (
    <div className="universityAlumin-container">
      <h2>
        Become a Proud Member of the <span>VIT</span> Alumni Network
      </h2>
      <p>
        On successful completion of the MBA programme, learners gain access to
        the VIT Alumni Association and its privileges, including:
      </p>
      <div className="universityAlumin-content">
        <div className="universityAlumin-item">
          <FaCalendarCheck className="universityAlumin-icon"/>
          <h5>Alumni Meets</h5>
          <p>
            Invitations to alumni meets at VIT Vellore and regional chapters
            worldwide.
          </p>
        </div>
        <div className="universityAlumin-item">
          <FaNewspaper  className="universityAlumin-icon"/>
          <h5>Community Updates</h5>
          <p>Access to alumni newsletters and community updates.</p>
        </div>
        <div className="universityAlumin-item">
          <FaNetworkWired  className="universityAlumin-icon"/>
          <h5>Networking</h5>
          <p>Professional networking with batchmates, seniors, and juniors.</p>
        </div>
        <div className="universityAlumin-item">
          <FaSuitcase className="universityAlumin-icon"/>
          <h5>Job Board</h5>
          <p>Access to alumni job board and achievements showcase.</p>
        </div>
      </div>
    </div>
  );
};

export default VitAlumin;
