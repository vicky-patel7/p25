import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ onClose, isOpen }) => {
    const { formData, setFormData, value, setValue, handleSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        handleSubmit(formData);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmitForm}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder="Enter Transaction Description" name="description" type="text" m={2} onChange={handleFormChange}/>
                            <FormLabel>Transaction Amount</FormLabel>
                            <Input placeholder="Enter Transaction Amount" name="amount" type="number" m={2} onChange={handleFormChange}/>
                        </FormControl>
                        <RadioGroup m={2} value = {value} onChange={setValue}>
                            <Radio name="type" value="income" colorScheme="blue" mr={2} checked = {formData.type === 'income'} onChange={handleFormChange}>Income</Radio>
                            <Radio name="type" value="expense" colorScheme="red" checked = {formData.type === 'expense'} onChange={handleFormChange}>Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={4} onClick={onClose}>Cancel</Button>
                        <Button type="submit" onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

Transaction.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool
}

export default Transaction
