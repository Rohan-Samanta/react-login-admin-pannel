import React from "react";
import Error from "../assets/401.svg";
import { useNavigate } from "react-router-dom";

function Error401() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>You don't have the permission</h1>
      <br />
      <img
        style={{ height: "50vh", width: "50vw" }}
        src={Error}
        alt="404 Error"
      />
      <br />
      <br />
      <button className="btn btn-info " onClick={() => navigate("/")}>
        Go to home
      </button>
    </div>
  );
}

export default Error401;
