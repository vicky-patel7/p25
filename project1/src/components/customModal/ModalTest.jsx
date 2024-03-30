import { useState } from "react"
import Modal from "./Modal";

const ModalTest = () => {
    const [showModalPopup, setModalPopup] = useState(false);

    function handleToggleModal() {
        setModalPopup(!showModalPopup);
    }


    return (
        <div className="container mt-3">
            <button className="btn btn-primary" onClick={handleToggleModal}>Open Modal Popup</button>
            {
                showModalPopup && <Modal changeHanlder = {handleToggleModal} body = {
                    <div>This is cutomised body of the modal. <p>Description Goes here</p></div>
                }/>
            }
        </div>
    )
}

export default ModalTest
