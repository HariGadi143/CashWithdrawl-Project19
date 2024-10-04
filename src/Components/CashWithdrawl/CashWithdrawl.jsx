import React, { Component } from "react";
import styles from "./CashWithdrawl.module.css";

class CashWithdrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 2000,
    };
  }

  render() {
    const { cash } = this.state;
    console.log(cash, "hariCash");
    return (
      <div className={styles.mainContainer}>
        <h1>CashWithdrawl</h1>
      </div>
    );
  }
}

export default CashWithdrawl;
