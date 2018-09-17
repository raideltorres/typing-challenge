/* ******************************************** */
/*            Typing container                  */
/* ******************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Importing the defined actions
import * as HomeActions from '../../containers/Home/actions';

// Importing styles
import { Typing } from './styles';

// Importing components
import TypingResults from '../TypingResults';
import Timer from '../Timer';

// TypingContainer component
class TypingContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      timerDisplay: false,
      results: false,
      sampleText: 'This is a sample text to type'
    };
  }

  // Redux action to change data
  changeText(event) {
    // Dispatching the redux action to change the text value in the store
    this.props.dispatch(HomeActions.changeText(event.target.value));

    // Chronometer logic
    if (!this.state.timerDisplay && !this.state.results) {
      this.setState({
        timerDisplay: true,
      });
    }

    // Stop Condition of the test. In this case the stop condition will be
    // when the user types in the same number of characters as in the sample text.
    // since in this case the sample text have a fixed length of 29 characters
    // I will code the stop condition based on that, I could create a variable
    // sample text but I don't think that is asked in the requirements
    if (this.props.typingData.text.length >= this.state.sampleText.length - 1) {
      this.setState({
        results: true,
      });
    }

    // Words logic
    // Return and dispatch the number of words using regular expressions
    // This will count numbers as words, since I did not validated this bc
    // is not specified in the requirements
    const words = event.target.value.trim().split(/\s+/).length;
    this.props.dispatch(HomeActions.changeWords(words));
  }

  countWordsPerMinute() {
    const { words, time } = this.props.typingData;

    // Convert time to minutes
    const minutes = time / 60000;

    // Return the amount of words per minute
    return (words / minutes).toFixed(2);
  }

  render() {
    return (
      <Typing>
        <Grid container>
          <Grid container item md={7} xs={12}>
            <Grid item xs={12}>
              <Paper className="section input">
                <Typography align="center" className="description">
                  {
                    `In this app we will use a fixed sample text that will be "${this.state.sampleText}".
                    So the test will start wen the user types the first character in the input below and
                    it will end wen the user types the same number of characters as in the sample text
                    (26 in this case)`
                  }
                </Typography>
                <TextField
                  id="text-input"
                  fullWidth
                  disabled={this.state.results}
                  label="Sample text to type"
                  onChange={(e) => { this.changeText(e); }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="section result">
                <Typography variant="display2" align="center">
                  { this.props.typingData.text }
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item md={5} xs={12}>
            <Grid item xs={12}>
              <Paper className="section status">
                {
                  this.state.timerDisplay ?
                    <div>
                      <Timer
                        dispatch={this.props.dispatch}
                        typingData={this.props.typingData}
                        results={this.state.results}
                      />
                      <TypingResults
                        title={'Words'}
                        data={this.props.typingData.words}
                      />
                      {
                        this.state.results ?
                          <TypingResults
                            title={'Words per minute'}
                            data={this.countWordsPerMinute()}
                          /> : null
                      }
                    </div> :
                    <Typography variant="display1" align="center">
                      Start typing sample text to begin test
                    </Typography>
                }
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Typing>
    );
  }
}

TypingContainer.propTypes = {
  dispatch: PropTypes.func,
  typingData: PropTypes.object,
};

export default TypingContainer;
