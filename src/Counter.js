import './App.css';
import react, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  static getDerivedStateFromProps(props, state){
    return null
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('should Component Update - DO NOT RENDER');
      return false;
    }
      console.log('should Component Update - RENDER');
    return true;
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div>Counter: {this.state.count}</div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('Component Will unmount');
    console.log('----------------------');
  }
}

export default Counter;
