import React from "react";
// import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const OneTransaction = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default OneTransaction;

OneTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}