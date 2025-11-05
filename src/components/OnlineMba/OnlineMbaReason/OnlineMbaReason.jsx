import React from "react";
import "./OnlineMbaReason.css";
const OnlineMbaReason = () => {
  const benefits = [
    {
      title: "Affordability:",
      desc: "Online MBA programs are generally more cost-effective than traditional on-campus degrees. With lower tuition fees and no expenses for travel, accommodation, or relocation, learners can study without financial strain. Additionally, many universities offer flexible payment options such as EMIs and financial aid, making higher education more accessible while allowing you to continue earning alongside your studies.",
    },
    {
      title: "Flexibility:",
      desc: "One of the greatest strengths of an Online MBA is the freedom it offers. You can study from anywhere, at any time, accessing course materials, lectures, and resources online. This flexibility is ideal for working professionals who want to balance their academic growth with their professional responsibilities, without taking a career break.",
    },
    {
      title: "Networking:",
      desc: "An Online MBA connects you with a diverse and global community of peers, industry experts, and academicians. Through interactive sessions, webinars, and virtual discussions, students can exchange ideas, share experiences, and expand their professional network. These interactions often open doors to valuable collaborations, mentorships, and new career opportunities.",
    },
    {
      title: "Self-paced and Personalised Learning:",
      desc: "Online MBA programs are designed to cater to individual learning styles. Learners can set their own schedules, revisit materials, and progress at a comfortable pace. This personalized approach mirrors one-on-one mentorship, allowing every student to take charge of their educational journey and achieve mastery in their chosen domain efficiently.",
    },
  ];
  return (
    <div className="onlineMbaReason-container">
      <div className="onlineMbaReason-content">
        <h2>
          Top Reasons to Pursue an <span>Online MBA</span> and Its Key Benefits
        </h2>
        <p>
          As an Online MBA student, you gain not only a world-class education
          but also several advantages that make the learning journey more
          enriching and practical.
        </p>
      </div>
      <div className="onlineMbaReason-content">
        {benefits.map((item, index) => (
          <div className="benefit-box" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default OnlineMbaReason;
