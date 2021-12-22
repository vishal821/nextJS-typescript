import React, { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"

const ModalPopup = (props:any) =>  {
	// Modal open state
	const [isModalOpen, setModal] = useState(props?.open);
	// Toggle for Modal
	const toggleModalPopup = () => setModal(!isModalOpen);
	return (
		<>
			<Modal isOpen={isModalOpen}
				toggle={toggleModalPopup}>
				<ModalBody>
					Simple Modal with just ModalBody...
				</ModalBody>
			</Modal>
		</>
	);
}

export default ModalPopup;
