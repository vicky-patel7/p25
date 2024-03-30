import PropTypes from "prop-types";
import MenuList from "./MenuList";


const TreeView = ({ menus = [] }) => {
  return (
    <div className='container'>
      <MenuList list={menus}/>
    </div>
  )
}

TreeView.propTypes = {
  menus: PropTypes.array
}

export default TreeView
