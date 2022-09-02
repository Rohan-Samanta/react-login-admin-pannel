import React from "react";
import Error from "../assets/maintenance.svg";
import { useNavigate } from "react-router-dom";

function Maintenance() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Our Maintenance is going on</h1>
      <br />
      <img
        style={{ height: "50vh", width: "50vw" }}
        src={Error}
        alt="Maintenance Error"
      />
      <br />
      <br />
      <button className="btn btn-info " onClick={() => navigate("/")}>
        Go to home
      </button>
    </div>
  );
}

export default Maintenance;
