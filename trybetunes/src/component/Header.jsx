import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const username = await getUser();
    this.setState({ loading: false, name: username });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading />
          : (
            <section>
              <div data-testid="header-user-name">{name.name}</div>
              <nav>
                <span>
                  <NavLink
                    to="/search"
                    data-testid="link-to-search"
                  >
                    Search
                  </NavLink>
                </span>
                <br />
                <span>
                  <NavLink
                    to="/favorites"
                    data-testid="link-to-favorites"
                  >
                    Favorites
                  </NavLink>
                </span>
                <br />
                <span>
                  <NavLink
                    to="/profile"
                    data-testid="link-to-profile"
                  >
                    Profile
                  </NavLink>
                </span>
              </nav>
            </section>
          ) }
      </header>
    );
  }
}

export default Header;
