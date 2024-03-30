import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [formData, setFormData] = useState({
        type: 'expense',
        amount: 0,
        description: ''
    });

    const [value, setValue] = useState('expense')
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransactions, setAllTransactions] = useState([]);

    function handleSubmit(currentFormData) {
        console.log(currentFormData);
        if (!currentFormData.description || !currentFormData.amount) {
            return;
        }
        setAllTransactions([
            ...allTransactions,
            { ...currentFormData, id : Date.now() }
        ]);
    }
    return <GlobalContext.Provider
        value={{
            formData, value, totalExpense, totalIncome, allTransactions, setFormData, setValue, setTotalExpense, setTotalIncome, setAllTransactions, handleSubmit
        }}
    >{children}</GlobalContext.Provider>
}

GlobalState.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalState;