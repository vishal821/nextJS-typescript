import Link from "next/link";
import { useState } from "react";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import LoginModal from "../LoginModal";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../redux/actions/signUpAction";

import { GetServerSideProps, GetStaticProps } from "next";
import { API_URL } from "../../config";

interface HeaderProps {
  names: string[];
}
export const Header = (names: any) => {
  console.log("ress", names);
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
            <Link href={"about"}>About</Link>
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
export const getServerSideProps: GetServerSideProps<HeaderProps> = async (
  context
) => {
  console.log("ress", "000");
  alert("hey");
  //   const res = await fetch(`${API_URL}/categories`);
  //   console.log("ress", res);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { names: ["anna", "banne"] } };
};
export default Header;
