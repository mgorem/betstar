import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <span className="day-type">{type}</span>
      <p>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
