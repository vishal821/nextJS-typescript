import Link from "next/link";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import ModalPopup from "../ModalPopup";

export const Footer = () => {
    return(
        <>
        <div className={styles["footer_back"]}>
        <p>
            This is footer part
        </p>
        </div>
        </>
    )
}

export default Footer;