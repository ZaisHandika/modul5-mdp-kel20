import React from "react";
import { FaStream } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function CardProfile({ item }) {
  return (
    <div className="margin">
    <div className="cardprofile">
      <div className="topmenu">
        <FaStream className="dots" size="25" color="gray" />
      </div>
      <div className="pp">
        <img src={item.img} alt="" />
      </div>
      <p className="nama">{item.nama}</p>
      <div class="mahasiswa">Mahasiswa</div>
      <div class="striped-border"></div>
      <div className="info">
        <p className="space">
          <FaHouseUser size="20" color="blue" />
          Alamat
        </p>
        <p>{item.address}</p>
      </div>
      <div className="info">
        <p className="space">
          <FaIdCard size="20" color="blue" />
          NIM
        </p>
        <p>{item.nim}</p> 
      </div>
      <div className="info">
        <p className="space">
          <FaGithubSquare size="20" color="blue" />
          Github
        </p>
        <p>{item.git}</p>
      </div>
    </div>
    </div>

  );
}

export default CardProfile;
