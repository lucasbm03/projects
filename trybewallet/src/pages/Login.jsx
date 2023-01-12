import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginClickAction } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonIsDisabled: true,
    };
  }

  buttonChange = () => {
    const { email, password } = this.state;
    const tamanhoMinimo = 6;
    const passwordvalidation = password.length >= tamanhoMinimo;
    const emailRegex = /\S+@\S+\.\S+$/;
    const emailValidation = emailRegex.test(email);
    const validateCorreto = emailValidation && passwordvalidation;
    this.setState({ buttonIsDisabled: !(validateCorreto) });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => this.buttonChange());
  };

  handleButtonClick = (element) => {
    element.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(loginClickAction(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonIsDisabled } = this.state;
    return (
      <div>

        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            name="email"
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            placeholder="Senha"
            name="password"
            value={ password }
            type="password"
            onChange={ this.handleChange }
          />
        </label>

        <button
          disabled={ buttonIsDisabled }
          type="button"
          onClick={ this.handleButtonClick }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
