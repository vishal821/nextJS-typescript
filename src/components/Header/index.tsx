import Link from "next/link";
import { useState } from "react";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import LoginModal from "../LoginModal";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../redux/actions/signUpAction";

export const Header = (props: any) => {
  const [openModal, setModal] = useState(false);

  /* function to toggle/(show/hide) modal popup */
  const openLoginpopup = () => {
    setModal(!openModal);
  };
  return (
    <>
      <Navbar className={styles["header_back"]}>
        <ul>
          <li>
            <Link href={"#"}>Home </Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <a onClick={openLoginpopup}>Login</a>
          </li>
          <li>
            <Link href={"#"}>Signup</Link>
          </li>
        </ul>
      </Navbar>
      {openModal && <LoginModal open={openModal} />}
    </>
  );
};

export default Header;
