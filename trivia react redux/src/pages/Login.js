import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import getUserToken from '../helpers/api';
import { login } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      gravatarEmail: '',
      name: '',
      isDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateButton);
  };

  validateButton = () => {
    const { gravatarEmail, name } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validateEmail = regex.test(gravatarEmail);
    const validate = validateEmail && name.length > 0;
    this.setState({
      isDisable: !validate,
    });
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const usertoken = await getUserToken();
    localStorage.setItem('token', usertoken);
    history.push('/game');
    dispatch(login(this.state));
  };

  pushToConfig = () => {
    const { history } = this.props;
    history.push('/config');
  };

  render() {
    const { gravatarEmail, name, isDisable } = this.state;
    return (
      <section className="content">
        <label htmlFor="name">
          <input
            placeholder="Digite seu Nome"
            data-testid="input-player-name"
            type="name"
            name="name"
            id="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="gravatarEmail">
          <input
            placeholder="Digite seu Email"
            data-testid="input-gravatar-email"
            type="email"
            name="gravatarEmail"
            id="email"
            value={ gravatarEmail }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="btn-play"
          type="button"
          disabled={ isDisable }
          onClick={ this.handleClick }
        >
          Play
        </button>
        <button
          data-testid="btn-settings"
          type="button"
          onClick={ this.pushToConfig }
        >
          Configurações
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
