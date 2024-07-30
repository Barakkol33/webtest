import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DynamicTable from './DynamicTable';
import './Portfolio.css';

const Portfolio = ({ data, columnField }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);

  return (
    <div>
      <div className="tabs">
        {Object.keys(data).map(tab => (
          <button
            key={tab}
            className={`tab-button ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <DynamicTable data={data[activeTab]} columnField={columnField} />
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.object)
      )
    )
  ).isRequired,
};

export default Portfolio;
