import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function TypingResults({ title, data }) {
  return (
    <div className="status-inner">
      <Typography variant="headline">
        { title }
      </Typography>
      <Typography variant="headline">
        { data }
      </Typography>
    </div>
  );
}

TypingResults.propTypes = {
  title: PropTypes.string,
  data: PropTypes.any,
};

export default TypingResults;
