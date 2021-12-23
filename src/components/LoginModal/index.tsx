import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"
import InputField from '../FormFields';
import { signup } from '../../redux/actions/signUpAction';

const LoginModal = (props:any) =>  {
    const dispatch = useDispatch();
	// Modal open state
	const [isModalOpen, setModal] = useState(props?.open);
	// Toggle for Modal
	const toggleLoginModal = () => setModal(!isModalOpen);

    /* submit form */
    const submit = (e:any) => {
        e.preventDefault();
        let formdata = {
            email: e.target.email.value,
            password: e.target.password.value 
        }
        dispatch(signup(formdata))
    }
	return (
		<>
			<Modal isOpen={isModalOpen}
				toggle={toggleLoginModal}>
				<ModalBody>
					<form onSubmit={(e)=> submit(e) }>
                        <InputField label="Email" name="email"/>
                        <InputField label="Password" name="password"/><br/>
                        <Button color="success" type='submit'>Submit</Button>
                    </form>
				</ModalBody>
			</Modal>
		</>
	);
}

export default LoginModal;
