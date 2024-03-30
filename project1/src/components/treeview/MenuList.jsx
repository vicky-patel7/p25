import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const MenuList = ({list = []}) => {
  return (
    <ul className="menu-list-container">
        {
          list && list.length > 0 ?
          list.map((listItem) => <MenuItem key={listItem.id} item = {listItem}/>)
          : null
        }
    </ul>
  )
}

MenuList.propTypes = {
    list: PropTypes.array
}


export default MenuList
