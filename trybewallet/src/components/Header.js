import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  totalUpdate = () => {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      let total = 0;
      expenses.forEach((elemento) => {
        total += Number(elemento.value)
         * Number(elemento.exchangeRates[elemento.currency].ask);
      });
      return total.toFixed(2);
    }
    return '0.00';
  };

  render() {
    const { email } = this.props;

    return (
      <header>
        <section>
          <div>
            <h1>TrybeWallet</h1>
          </div>
          <div>
            <p data-testid="email-field">{email}</p>
            <p data-testid="header-currency-field">BRL</p>
            <p data-testid="total-field">
              { this.totalUpdate() }
            </p>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
