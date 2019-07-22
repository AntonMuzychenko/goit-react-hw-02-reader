import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

class Reader extends Component {
  state = {
    items: this.props.items,
  };
  render() {
    const { items } = this.state;
    // console.log('items', items);
    return (
      <div>
        <Publication />
        <Counter />
        <Controls />
      </div>
    );
  }
}

export default Reader;
