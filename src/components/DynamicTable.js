import React from 'react';
import PropTypes from 'prop-types';
import JsonCard from './JsonCard';
import './DynamicTable.css';

const DynamicTable = ({ data, columnField }) => {
  // Extract unique groups, test values and column values
  const groups = Object.keys(data);
  const columns = [...new Set(
    groups.flatMap(group =>
      Object.values(data[group]).flat().map(item => item[columnField])
    )
  )];

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          <th>Group</th>
          <th>Test</th>
          {columns.map(columnValue => (
            <th key={columnValue}>{columnValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {groups.map((group, groupIndex) => {
          const groupTests = Object.keys(data[group]);
          return (
            <>
              {groupTests.map((testValue, testIndex) => (
                <tr key={`${group}-${testValue}`}>
                  {testIndex === 0 && (
                    <td rowSpan={groupTests.length}>{group}</td>
                  )}
                  <td>{testValue}</td>
                  {columns.map(columnValue => {
                    const cellData = data[group][testValue].filter(item => item[columnField] === columnValue);
                    return (
                      <td key={`${testValue}-${columnValue}`}>
                        {cellData.map((item, index) => (
                          <JsonCard key={index} data={item} />
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </>
          );
        })}
      </tbody>
    </table>
  );
};

DynamicTable.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.object)
    )
  ).isRequired,
  columnField: PropTypes.string.isRequired,
};

export default DynamicTable;
