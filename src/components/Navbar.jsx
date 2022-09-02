import { useState } from "react";
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CForm,
  CButton,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const logoutFn = () => {
    navigate("/");
  };
  return (
    <div>
      <CNavbar
        expand="lg"
        colorScheme="light"
        className=" bg-light shadow fixed-top "
      >
        <CContainer className="d-flex justify-content-between w-100 ">
          <div className="mx-5">
            <CNavbarBrand className="text-info">Admin Dashboard</CNavbarBrand>
          </div>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <div>
            <CCollapse className="navbar-collapse" visible={visible}>
              <CButton
                type="submit"
                color="info"
                variant="outline"
                onClick={logoutFn}
                shape="rounded-pill"
                className="mx-5"
              >
                Logout
              </CButton>
            </CCollapse>
          </div>
        </CContainer>
      </CNavbar>
    </div>
  );
};
export default Navbar;
