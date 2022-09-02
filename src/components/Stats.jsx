import React, { useEffect, useState } from "react";
import { statsData } from "../api/data";
import "../styles/stats.css";
import {
  CRow,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowTop, cilOptions } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    statsData()
      .then((res) => {
        if (res.status === 200) {
          setStatus(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/error401");
        } else if (err.response.status === 404) {
          navigate("/error404");
        } else if (err.response.status === 500) {
          navigate("/error500");
        } else {
          navigate("/maintenance");
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(status);
  return (
    <div>
      <h5
        className="text-primary text-opacity-50 "
        style={{ marginTop: "25px" }}
      >
        Take a look at your stats below
      </h5>
      <div className="widgetContainer">
        {status.map((elm, idx) => {
          const { label, Rate } = elm;
          const widgetColor = [
            "primary",
            "dark",
            "warning",
            "success",
            "danger",
          ];
          const symbol = ["ل.د", "kn", "₦", "؋", "MT"];
          return (
            <div key={idx} className="widget">
              <CWidgetStatsA
                className="p-3 stats  rounded-5 shadow "
                color={widgetColor[idx]}
                value={
                  <>
                    {symbol[idx]} {Rate}{" "}
                    <div>
                      <span className="fs-6 fw-normal">
                        (40.9% <CIcon icon={cilArrowTop} />)
                      </span>
                    </div>
                  </>
                }
                title={label}
                action={
                  <CDropdown alignment="end">
                    <CDropdownToggle
                      color="transparent"
                      caret={false}
                      className="p-0"
                    >
                      <CIcon
                        icon={cilOptions}
                        className="text-high-emphasis-inverse"
                      />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Action</CDropdownItem>
                      <CDropdownItem>Another action</CDropdownItem>
                      <CDropdownItem>Something else here...</CDropdownItem>
                      <CDropdownItem disabled>Disabled action</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
