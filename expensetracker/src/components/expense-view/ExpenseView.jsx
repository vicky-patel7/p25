
import { Flex, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const ExpenseView = ({ type, data }) => {
  return (
    <Flex flex={1} w={'full'} background={'white'} mr={'4'} mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'gray.100'} borderRadius={'12'} display={'flex'} flexDirection={'column'}>

      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading size={'md'} color={type === 'income' ? 'blue.200' : 'red.200'}>
          {type === 'income' ? 'Income' : 'Expense'}
        </Heading>
      </Flex>


      <Flex
        mt={'4'}
        alignItems={'center'}
        border={'1px solid'}
        borderColor={type === 'expense' ? 'red.100' : 'blue.100'}
        borderRadius={'8'}
        flexDirection={'column'}
      >
        {
          data.map((item) => <>
            <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'} border={'1px solid'} p={'4'} borderColor={type === 'expense' ? 'red.100' : 'blue.100'} bg={type === 'expense' ? 'red.50' : 'blue.50'} borderRadius={'8'}>
              <Text ml={'3'} fontWeight={'bold'} color={'gray.600'}>{item.description}</Text>
              <Text>$ {item.amount}</Text>
            </Flex>
          </>)
        }
      </Flex>

    </Flex>
  )
}

ExpenseView.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
}

export default ExpenseView
