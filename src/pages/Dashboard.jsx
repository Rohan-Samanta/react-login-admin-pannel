import React, { useEffect, useState } from "react";
import Stats from "../components/Stats";
import { userData } from "../api/data";
import "../styles/dashboard.css";
import { BsSearch } from "react-icons/bs";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [value, setValue] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [error, setError] = useState("");

  const getData = () => {
    userData()
      .then((res) => {
        if (res.status === 200) {
          setValue(res.data);
          setCopyData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(userList);

  const changeData = (e) => {
    // console.log(!isNaN(e));
    let getChangeData = e.toLowerCase();
    // console.log(isNaN(getChangeData));
    if (getChangeData == "") {
      setCopyData(value);
    } else if (isNaN(e)) {
      // console.log(e);
      let storeData = copyData.filter((element, key) => {
        // console.log(element.id);
        return element.name.toLowerCase().match(getChangeData);
      });
      setCopyData(storeData);
    } else {
      let newStoreData = copyData.filter((element, key) => {
        // console.log(element.id);
        return element.id.toString().match(getChangeData.toString());
      });
      setCopyData(newStoreData);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Stats />
      <br />
      <h3 className="text-primary ">All the user list here</h3>
      <br />

      {/* Search bar */}
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3" style={{ width: "300px" }}>
          <label className="input-group-text" htmlFor="search">
            <BsSearch />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => changeData(e.target.value)}
            className="form-control searchBox "
            placeholder="Search By User Name Or Id"
          />
        </div>
      </div>
      <p className="text-danger"> {error}</p>

      {/* User list */}
      <div className="allUser">
        {copyData.map((elm) => {
          const { name, avatar, id } = elm;
          return (
            <div key={id}>
              <div className="userContainer">
                <img
                  src={avatar}
                  alt="user image is here"
                  height={100}
                  width={100}
                  className="image"
                />
                <h4>{name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
