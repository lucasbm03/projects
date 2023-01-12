import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../redux/actions';

class Table extends Component {
  handleDelete = ({ target }) => {
    const { id } = target;
    const { dispatch } = this.props;
    console.log(id);
    dispatch(deleteExpenseAction(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((e) => (
              <tr key={ e.id }>
                <td>{ e.description }</td>
                <td>{ e.tag }</td>
                <td>{ e.method }</td>
                <td>{ Number(e.value).toFixed(2) }</td>
                <td>{ e.exchangeRates[e.currency].name }</td>
                <td>{ (+e.exchangeRates[e.currency].ask).toFixed(2) }</td>
                <td>{ (+e.exchangeRates[e.currency].ask * e.value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ this.handleDelete }
                    id={ e.id }
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
