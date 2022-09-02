import React from "react";
import Error from "../assets/404.svg";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hmm! Look like page is not found</h1>
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

export default Error404;
