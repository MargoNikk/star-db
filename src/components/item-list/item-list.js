import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ItemNavList = (props) => {
  const { data, children: renderLabel } = props;

  const items = data.map((item) => {
    const label = renderLabel ? renderLabel(item) : item.name;
    const { id } = item;

    return (
      <li className="list-group-item" key={id}>
        <Link to={`/starships/${id}`}>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul className="item-list list-group">
        {items}
      </ul>
    </div>
  );
};

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const label = renderLabel ? renderLabel(item) : item.name;
    const { id } = item;

    return (
      <li className="list-group-item"
        key={id}
        onClick={onItemSelected.bind(this, id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => { }
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func
};

export default ItemList;

export {
  ItemNavList
};