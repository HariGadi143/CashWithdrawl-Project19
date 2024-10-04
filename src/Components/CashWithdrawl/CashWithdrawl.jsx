import React, { Component } from "react";
import styles from "./CashWithdrawl.module.css";

class CashWithdrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 2000,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.cash < 0 && prevState.cash >= 0) {
      this.setState({ cash: 2000 });
    }

    console.log("Component did mount");
  }
  handleCashWithdraw = (amount) => {
    this.setState((prevState) => ({
      cash: prevState.cash - amount,
    }));
  };

  render() {
    const { cash } = this.state;
    console.log(cash, "hariCash");
    return (
      <div className={styles.mainContainer}>
        <div className={styles.withdrawlContainer}>
          <div className={styles.topContainer}>
            <h1 className={styles.nameSymbol}>H</h1>
            <h1 className={styles.name}>Hari Gadi</h1>
          </div>
          <div className={styles.amountCon}>
            <h1 className={styles.balanceText}>Your Balance</h1>
            <div>
              <h1 className={styles.cashText}>{cash} </h1>
              <p className={styles.rupeesText}>In Rupees</p>
            </div>
          </div>
          <div className={styles.withdrawCon}>
            <h1 className={styles.cashText}>Withdraw</h1>
            <h1 className={styles.balanceText}>CHOOSE SUM(IN RUPEES)</h1>
          </div>
          <div className={styles.tabsWrapper}>
            {tabData.map((item, index) => {
              return (
                <button
                  key={item?.id}
                  className={styles.tabItem}
                  onClick={() => {
                    this.handleCashWithdraw(item?.value);
                  }}
                >
                  {item?.value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CashWithdrawl;

const tabData = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];
