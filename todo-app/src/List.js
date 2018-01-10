import React from 'react';

const List = props => (
  <ul class="list-group">
    {
      props.items.map((item, index) => <li class="list-group-item" key={index}>{item}</li>)
    }
  </ul>
);

export default List;