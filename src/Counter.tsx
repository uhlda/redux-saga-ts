import * as React from 'react';

interface Props {
  value: number; 
  onIncrement: () => void; 
  onDecrement: () => void;
}

class Counter extends React.Component<Props> {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {this.props.value} times
        </div>
      </div>
    );
  }
}

export default Counter;
