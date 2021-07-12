import React from "react";
import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

const Statistics = ({ stats, title }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
