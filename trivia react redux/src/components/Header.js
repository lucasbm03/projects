import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { gravatarEmail, nome, score } = this.props;
    const email = md5(gravatarEmail.gravatarEmail).toString();
    return (
      <>
        <img data-testid="header-profile-picture" alt="profile-img" src={ `https://www.gravatar.com/avatar/${email}` } />
        <p data-testid="header-player-name">{ nome }</p>
        <p data-testid="header-score">{ score }</p>
      </>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  gravatarEmail: globalState.playerReducer.gravatarEmail,
  nome: globalState.playerReducer.gravatarEmail.name,
  score: globalState.playerReducer.score,
});

export default connect(mapStateToProps)(Header);
