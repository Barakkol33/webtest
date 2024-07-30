import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import DynamicTable from "./DynamicTable";

const Tabs = ({ data }) => {
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
        <DynamicTable data={data[activeTab]} columnField="project" />
      </div>
    </div>
  );
};

Tabs.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.object)
      )
    )
  ).isRequired,
};

export default Tabs;
