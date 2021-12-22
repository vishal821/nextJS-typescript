import Link from "next/link";
import { useState } from "react";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import ModalPopup from "../ModalPopup";

export const Header = () => {
    const [openModal, setModal] = useState(false)

    /* function to toggle/(show/hide) modal popup */
    const openLoginpopup = () => {
        setModal(!openModal)
    }
    
    return(
        <>
        <Navbar className={styles["header_back"]}>
        <ul>
            <li><Link href={"#"}>Home </Link></li>
            <li><Link href={"#"}>About</Link></li>
            <li><Link href={"#"}>Services</Link></li>
            <li><a onClick={openLoginpopup}>Login</a></li>
            <li><Link href={"#"}>Signup</Link></li>
        </ul>
        </Navbar>
        {openModal && (
            <ModalPopup open={openModal}/>
        )}
        </>
    )
}

export default Header;