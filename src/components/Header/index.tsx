import Link from "next/link";
import { useState } from "react";
import { Navbar } from "reactstrap";
import styles from "./styles.module.scss";
import ModalPopup from "../ModalPopup";
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../../redux/actions/counterActions';
import { useSelector, useDispatch } from 'react-redux'

export const Header = (props:any) => {
    const counter = useSelector((state) => state.counter.value)
    console.log("abba",props)
    const [openModal, setModal] = useState(false)

    /* function to toggle/(show/hide) modal popup */
    const openLoginpopup = () => {
        setModal(!openModal)
    }
const dispatch = useDispatch()
    return(
        <>
        <Navbar className={styles["header_back"]}>
        <button onClick={() =>  dispatch(incrementCounter())}>Increment</button>
        <h1>{counter}</h1>
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
const mapStateToProps = (state: { counter: { value: any; }; }) => ({
    counter: state.counter.value
});
const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);