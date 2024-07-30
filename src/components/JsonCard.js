import React from 'react';
import PropTypes from 'prop-types';
import './JsonCard.css';

const JsonCard = ({ data }) => {
  return (
    <div className="json-card">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="json-line">
          <span className="json-key">{key}:</span> <span className="json-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

JsonCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JsonCard;
