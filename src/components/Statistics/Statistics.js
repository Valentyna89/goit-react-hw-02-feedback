import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2 className={css.Stat_Title}>Statistics</h2>
      <ul className={css.Stat_List}>
        <li className={css.List_Item}>Good:{good}</li>
        <li className={css.List_Item}>Neutral:{neutral}</li>
        <li className={css.List_Item}>Bad:{bad}</li>
        <li className={css.List_Item}>Total:{total}</li>
        <li className={css.List_Item}>Positive feedbacks:{percentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
