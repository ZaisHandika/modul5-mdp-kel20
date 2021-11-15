import React from "react";
import "./Profile.css";
import ProfileCard from "../component/ProfileCard.js";

  const member = [
    {
      nama: "Muhammad Dzikrullah Farhan",
      nim: "21120119140134",
      img: "https://avatars.githubusercontent.com/u/63136874?v=4",
      address: "Tangerang, Indonesia",
      git: "github.com/ZikriFarhan"
    },
    {
      nama: "Zais Handika Murdhani",
      nim: "21120115130071",
      img: "https://avatars.githubusercontent.com/u/93227412?v=4",
      address: "Ngawi, Indonesia",
      git: "github.com/ZaisHandika",
    },
    {
      nama: "Nurhaidah",
      nim: "21120119120003",
      img: "https://avatars.githubusercontent.com/u/63896736?v=4",
      address: "Semarang, Indonesia",
      git: "github.com/nurhaidah346",
    },
    {
      nama: "Muhammad Firmansyah",
      nim: "21120119130102",
      img: "https://avatars.githubusercontent.com/u/93814335?v=4",
      address: "Semarang, Indonesia",
      git: "github.com/firman0352",
    },
  ];
  
  function Profile() {
    return (
      <div className="containprofile">
        <h1>Profile</h1>
        <div className="containcard">
          {member.map((per, idx) => (
            <ProfileCard key={idx} item={per} />
          ))}
        </div>
      </div>
    );
  }
  export default Profile;