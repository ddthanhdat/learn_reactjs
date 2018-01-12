import React from 'react';

const List = props => (
  <div>
    <ul class="list-group">
      {
        props.items.map((item, index) => <li class="list-group-item" key={index}>{item}</li>)
      }
    </ul>
  </div>

);

export default List;