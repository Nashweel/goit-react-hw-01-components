import React from "react";
import PropTypes from "prop-types";
import s from "../TransactionHistory/TransactionHistory.module.css";

const TransationHistory = ({ items }) => (
  <table className={s.tarnsactionHistory}>
    <thead className={s.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={s.tbody}>
      {items.map(({ id, type, amount, currency }, i) => {
        const trClassName = i % 2 === 0 ? s.grey : s.white;

        return (
          <tr key={id} className={trClassName}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransationHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransationHistory;
