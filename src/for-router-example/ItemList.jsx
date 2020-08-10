import React from 'react';
import {Link} from 'react-router-dom';

const items = [
  {
    id: 1,
    label: 'cat'
  },
  {
    id: 2,
    label: 'dog'
  }
];

const ItemList = () => (
    <div>
      <ul>
        {items.map(item => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.label}</Link>
            </li>
        ))}
      </ul>
    </div>
);

export default ItemList;
