import React from "react";

const HomeWhyMain = () => {
    const card=[
        {id:1,}
    ]
  return (
    <div className="homeBenefits">
      <div className="homeBenefitsHead">
        <h2>
          Benefits of a <span> Foreign Language</span> Course for Everyone
        </h2>
      </div>

      <div className="homeBenefitsCard">
        <div className="homeBenefitsCard-img">
          <Image src={props.img} alt="" />
        </div>
        <div className="homeBenefitsCard-Head">
          <h3>{props.head}</h3>
        </div>

        <div className="homeBenefitsCard-Content">
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyMain;
