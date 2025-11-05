"use client";
import React from "react";
import "./OnlineMbaFaq.css";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/Images/faq.jpg";
import Image from "next/image";
const OnlineMbaFaq = () => {
  return (
    <div className="onlineMbaFaq-container">
      <div className="onlineMbaFaq-wrapper">
        <div className="onlineMbaFaq-content">
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="0">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>1. What is an Online MBA Course?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  An Online MBA (Master of Business Administration) is a
                  postgraduate management programme that can be completed
                  entirely online. It is designed for graduates and working
                  professionals who wish to enhance their managerial,
                  leadership, and business skills without leaving their job or
                  relocating.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="1">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5> 2. Is an Online MBA degree valid and recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  Yes. Most online MBA courses offered by reputed universities
                  in India and abroad are approved by UGC and AICTE. They hold
                  the same academic weight and recognition as traditional,
                  on-campus MBA programmes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="2">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>3. Who can apply for an Online MBA course?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  Any graduate from a recognised university can apply. Most
                  universities require a minimum of 50% marks in graduation (45%
                  for reserved categories). Some institutions may prefer
                  candidates with prior work experience.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="3">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>
                  4. Is work experience mandatory for admission to an Online
                  MBA?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  No, work experience is not mandatory. However, having 2–3
                  years of professional experience can strengthen your
                  application and enhance your learning experience.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="4">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>
                  5. How long does it take to complete an Online MBA course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  Typically, the Online MBA is a 2-year programme, divided into
                  four semesters. However, some universities offer accelerated
                  or flexible-duration courses to accommodate working
                  professionals.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="5">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>
                  6. What are the specialisations available in Online MBA
                  programmes?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  Popular Online MBA specialisations include Marketing, Finance,
                  Human Resource Management, Operations, Business Analytics, IT
                  Management, International Business, Project Management, and
                  more. The choice of specialisation depends on your career
                  goals and interests.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="6">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5> 7. What is the admission process for an Online MBA?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  The general process includes: 1. Register and fill out the
                  online application form. 2. Upload necessary documents
                  (academic records, ID proof, experience letters if
                  applicable). 3. Pay the application/processing fee. 4. Await
                  document verification and admission confirmation. Some
                  universities may require entrance exam scores such as CAT,
                  MAT, or CMAT.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="7">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5> 8. What is the average fee for an Online MBA course?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  Online MBA fee ranges between ₹1,20,000 and ₹2,50,000,
                  depending on the university and specialisation. Most
                  institutions provide flexible payment options such as
                  semester-wise payments, EMIs, or scholarships.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="8">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>9. How is an Online MBA different from a Regular MBA?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  An Online MBA offers the same academic curriculum and learning
                  outcomes as a regular MBA. The only difference lies in the
                  delivery mode—students attend live or recorded online classes,
                  access e-learning materials, and complete assignments
                  digitally, offering flexibility and convenience.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="9">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>10. Can I pursue an Online MBA while working full-time?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  Yes, absolutely. Online MBA programmes are designed for
                  working professionals. The flexible learning schedule allows
                  you to balance work and study effectively without compromising
                  either.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="10">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>11. Do Online MBA students receive placement support?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  Many universities provide placement assistance, virtual job
                  fairs, resume workshops, and interview preparation sessions to
                  help students secure suitable career opportunities after
                  course completion.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="11">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>
                  12. What are the career prospects after completing an Online
                  MBA?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  Graduates can explore managerial roles in finance, marketing,
                  human resources, operations, consulting, IT, and
                  entrepreneurship. Many students also use the degree to advance
                  into leadership or executive positions within their current
                  organizations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="12">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>
                  13. Will I get a certificate after completing the Online MBA?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  Yes. Upon successful completion, you will receive a degree
                  certificate from the university, equivalent to that of an
                  on-campus MBA, mentioning that it’s a Master of Business
                  Administration programme.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="13">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5> 14. What are the advantages of doing an Online MBA?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>
                  {" "}
                  Key advantages include:
                  <ul>
                    <li>Flexibility in learning schedule</li>
                    <li>Affordable tuition fees</li>
                    <li>Access to global faculty and peers</li>
                    <li>Career advancement without quitting your job</li>
                    <li>
                      Opportunity for global networking and industry exposure
                    </li>
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="onlineMbaFaq-accItem" eventKey="14">
              <Accordion.Header className="onlineMbaFaq-accHeader">
                <h5>15. Are Online MBA classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="onlineMbaFaq-body">
                <p>Most universities offer a hybrid model — live interactive
                sessions with faculty along with recorded lectures for flexible
                learning. This ensures you never miss a class, even with a busy
                schedule.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="onlineMbaFaq-content">
          <Image src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnlineMbaFaq;
