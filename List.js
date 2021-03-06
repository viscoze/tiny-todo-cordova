import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Item from './Item.js'

class List extends Component {
  render() {
    return (
      <div id="list">
        {
          this.props.items.map(
            (item, index) => <Item key={item.content}
                                   index={index}
                                   content={item.content}
                                   checked={item.checked}
                                   deleteItem={this.props.deleteItem.bind(null, item.id)}
                                   checkItem={this.props.checkItem.bind(null, item.id)}
                                   editItem={this.props.editItem.bind(null, item.id)} />
          )
        }
      </div>
    );
  }
}

export default SortableContainer(List);
