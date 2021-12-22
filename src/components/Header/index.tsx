import Link from "next/link";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import ModalPopup from "../ModalPopup";

export const Header = () => {
    return(
        <>
        <Navbar className={styles["header_back"]}>
        <ul>
            <li><Link href={"#"}>Home </Link></li>
            <li><Link href={"#"}>About</Link></li>
            <li><Link href={"#"}>Services</Link></li>
            <li><Link href={"#"}>Login</Link></li>
            <li><Link href={"#"}>Signup</Link></li>
        </ul>
        </Navbar>
        </>
    )
}

export default Header;