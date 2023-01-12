import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    name: '',
    loading: false,
  };

  handleChange = (element) => {
    const { name, value } = element.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { name } = this.state;
    const { history } = this.props;
    const timer = 1500;
    createUser({ name });
    this.setState({ loading: true });
    setTimeout(() => {
      history.push('/search');
    }, timer);
  };

  render() {
    const { name, loading } = this.state;
    const three = 3;
    const validation = name.length < three
      ? <button type="button" data-testid="login-submit-button" disabled>Entrar</button>
      : (
        <button
          type="button"
          data-testid="login-submit-button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>);
    return (
      <div data-testid="page-login">
        { !loading
          ? (
            <form>
              <label htmlFor="name">
                Nome:
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="name"
                  id="name"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              { validation }
            </form>)
          : <p>Carregando...</p>}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
