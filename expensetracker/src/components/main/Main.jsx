import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import Summary from "../summary/Summary"
import ExpenseView from "../expense-view/ExpenseView"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions } = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;
        allTransactions.forEach((item) => {
            if (item.type === 'income') {
                income += parseFloat(item.amount);
            } else {
                expense += parseFloat(item.amount);
            }
        })
        setTotalExpense(expense);
        setTotalIncome(income);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allTransactions])

    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
                <Heading color={'blue.400'} display={["none", "block", "block", "block"]}>
                    ExpenseTracker
                </Heading>
                <Flex alignItems={'center'}>
                    <Button bg={'blue.700'} color={'black'} ml={4} onClick={onOpen}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>

            <Summary isOpen={isOpen} onClose={onClose} totalExpense={totalExpense} totalIncome={totalIncome} />

            <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                <ExpenseView data={allTransactions.filter(item => item.type === 'expense')} type={'expense'} />
                <ExpenseView data={allTransactions.filter(item => item.type === 'income')} type={'income'} />
            </Flex>

        </Flex>
    )
}

export default Main
