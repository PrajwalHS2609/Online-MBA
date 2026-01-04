"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../Images/faq.png";
import Image from "next/image";
const VitFaq = () => {
  return (
    <div className="serviceFaq-container">
      <h2>FAQ's for 2026 <span>VIT</span> Online MBA Admission</h2>

      <div className="serviceFaq-wrapper">
        <div className="serviceFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="serviceFaq-accItem" eventKey="0">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  1. What is the 2026 VIT Online MBA Admission for Working
                  Professionals?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  The 2026 VIT Online MBA Admission for Working Professionals is
                  a flexible, fully online management program offered by Vellore
                  Institute of Technology. It is designed to help professionals
                  upgrade their management skills without leaving their jobs,
                  using online classes, recorded lectures, and continuous
                  assessments.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  2. Is the VIT Online MBA suitable for full-time working
                  professionals?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  Yes. The program is specifically structured for working
                  professionals. Classes are delivered through a mix of live
                  sessions and recorded content, allowing learners to study at
                  their convenience while balancing work and personal
                  commitments.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  3. Who is eligible to apply for the VIT Online MBA Admission
                  2026?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  Graduates from a recognized university are eligible to apply
                  for the Online MBA Admission for 2026. While prior work
                  experience is not always mandatory, professionals with
                  industry exposure benefit more from the practical and
                  application-based curriculum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  4. Is the VIT Online MBA degree recognized and valid for jobs?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  Yes. The online MBA offered by Vellore Institute of Technology
                  is widely recognized by employers. The degree carries the same
                  academic credibility as on-campus programs and is suitable for
                  career growth, promotions, and role transitions.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. How flexible is the learning schedule for working
                  professionals?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  The learning schedule is highly flexible. Students can access
                  recorded lectures anytime, attend live sessions when possible,
                  and complete assignments within defined timelines. This
                  flexibility makes it ideal for professionals with demanding
                  work schedules.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  6. What specializations are available in the VIT Online MBA
                  program?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  The program offers industry-relevant specializations such as
                  Marketing, Finance, Human Resource Management, Operations,
                  Business Analytics, and other emerging management domains.
                  These options allow professionals to align their MBA with
                  career goals.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>7. What is the duration of the VIT Online MBA program? </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  The VIT Online MBA typically has a duration of two years,
                  divided into semesters. The structure allows working
                  professionals to progress steadily without academic overload.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. How does the admission process work for the 2026
                  intake?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  The Tamilnadu VIT Online MBA Admission process is completely
                  online. Candidates submit their application, upload required
                  documents, and complete the admission formalities digitally,
                  making it convenient for professionals across locations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="8">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Can this MBA help in career growth and salary improvement?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  Yes. Many working professionals pursue the 2026 VIT Online MBA
                  Admission for Working Professionals to move into managerial
                  roles, gain leadership responsibilities, or shift domains. The
                  program enhances strategic thinking, communication, and
                  decision-making skills valued by employers.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="8">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. Can professionals from outside Tamil Nadu apply for the
                  VIT Online MBA?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <p>
                  Absolutely. While popular among learners seeking VIT online
                  MBA Courses in Chennai and the VIT online MBA Course in
                  Vellore, the program is open to applicants from all over
                  India. The online format removes geographical limitations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="serviceFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default VitFaq;
