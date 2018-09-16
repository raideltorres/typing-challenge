import React from 'react';
import PropTypes from 'prop-types';

// Importing the defined actions
import * as HomeActions from '../../containers/Home/actions';

// Importing components
import TypingResults from '../TypingResults';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      elapsed: 0,
      start: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 50);
  }

  componentDidUpdate() {
    // Canceling the interval
    if (this.props.results) {
      this.props.dispatch(HomeActions.changeTime(this.state.elapsed));
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    // Canceling the interval
    clearInterval(this.timer);
  }

  tick() {
    // This function is called every 50 ms.
    // It updates the elapsed counter.
    this.setState({
      elapsed: new Date() - this.state.start,
    });
  }

  convertTime() {
    // Get hours
    const hours = this.state.elapsed / (1000 * 60 * 60);
    const absoluteHours = Math.floor(hours);
    const h = absoluteHours > 9 ? absoluteHours : `0${absoluteHours}`;

    // Get minutes
    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const m = absoluteMinutes > 9 ? absoluteMinutes : `0${absoluteMinutes}`;

    // Get seconds
    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);
    const s = absoluteSeconds > 9 ? absoluteSeconds : `0${absoluteSeconds}`;

    // Get tenths
    const milliseconds = (seconds - absoluteSeconds) * 100;
    const absoluteMilliseconds = Math.floor(milliseconds);
    const ms = absoluteMilliseconds > 9 ? absoluteMilliseconds : `0${absoluteMilliseconds}`;

    return `${h}:${m}:${s}:${ms}`;
  }

  render() {
    return (
      <TypingResults
        title={'Timer'}
        data={this.convertTime()}
      />
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
  results: PropTypes.bool,
};

export default Timer;
