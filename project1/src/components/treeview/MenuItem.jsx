import PropTypes from 'prop-types'
import MenuList from './MenuList';
import { useState } from 'react';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleChildrenToggle(currentId) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentId] : !displayCurrentChildren[currentId]
    })
  }
  return (
    <li className='list-unstyled'>
      <div className='d-flex align-items-center'>
        <h4>{item.label}</h4>
        {
          item && item.children && item.children.length > 0 ? <i className={`fa fa-angle-double-${displayCurrentChildren[item.id] ? "up" : "down"} previous mx-4`} onClick={() => handleChildrenToggle(item.id)}></i> : null
        }
      </div>
      {
        displayCurrentChildren[item.id] && item && item.children && item.children.length > 0 ?
          <MenuList list={item.children} />
          : null
      }
    </li>
  )
}

MenuItem.propTypes = {
  item: PropTypes.object
}

export default MenuItem;
