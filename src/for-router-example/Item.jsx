import React from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';

const Item = () => {
  const {id} = useParams();
  const history = useHistory();
  const location = useLocation();

  console.log('history = ', history);
  console.log('location = ', location);
  return <h2>item id {id}</h2>;
};

export default Item;
