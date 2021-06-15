import React, { Component } from 'react';

export default class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentWidth: 0,
      currentHeight: 0,
    };
  }

  handleResize = () => {
    this.setState({
      currentHeight: window.innerHeight,
      currentWidth: window.innerWidth,
    });
  };

  componentDidMount () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  render () {
    const { currentHeight, currentWidth } = this.state;
    return (
      <div>
        Current width of viewport is: {currentWidth}
        Current height of viewport is: {currentHeight}
      </div>
    );
  }
}
