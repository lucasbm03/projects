import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { APICurrencies, APIExpenses } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(APICurrencies());
  }

  handleSave = () => {
    const { dispatch } = this.props;
    this.setState((prev) => ({
      id: prev.id + 1,
      description: '',
      value: '',
    }));
    dispatch(APIExpenses(this.state));
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { walletState } = this.props;
    const { currencies } = walletState;
    const { value, description,
      currency, method, tag } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="select-currencie">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((elemento, index) => (
              <option value={ elemento } key={ index }>
                { elemento }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Modo de pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Lazer">Lazer</option>
            <option value="Saúde">Saúde</option>
            <option value="Transporte">Transporte</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSave }
        >
          Adicionar Despesa
        </button>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  walletState: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet,
});

export default connect(mapStateToProps)(WalletForm);
