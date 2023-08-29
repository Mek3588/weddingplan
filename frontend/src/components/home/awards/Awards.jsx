import React from "react";
import Heading from "../../common/Heading";
import "./awards.css";

const Awards = () => {
  const userEngagementMetrics = [
    {
      icon: <i class='fa-solid fa-users'></i>, 
      num: "2000+",
      name: "Happy Users",
    },
    {
      icon: <i class='fa-solid fa-comments'></i>, 
      num: "5000",
      name: "Engaged Conversations",
    },
    {
      icon: <i class='fa-solid fa-thumbs-up'></i>, 
      num: "1860",
      name: "Likes & Reactions",
    },
    {
      icon: <i class='fa-solid fa-share'></i>, 
      num: "1000",
      name: "Shares & Referrals",
    },
  ];

  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading
            title='Engaging Millions of Users - Creating Memorable Moments'
            subtitle='User Engagement Metrics'
          />

          <div className='content grid4 mtop'>
            {userEngagementMetrics.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
