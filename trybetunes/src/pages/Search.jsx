import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Load from './Load';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      btnDisabled: true,
      listAlbum: [],
      clearSearchBar: '',
      loading: false,
      firstClick: true,
    };
  }

  disparaEvent = (event) => {
    const { value } = event.target;
    this.setState({
      search: value }, this.buttonDisabled);
  };

  buttonDisabled = () => {
    const { search } = this.state;
    if (search.length >= 2) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
    console.log(this.state);
  };

  clearSearchBar = async () => {
    const { search } = this.state;
    this.setState({ loading: true, clearSearchBar: search, firstClick: false });
    const object = await searchAlbumsAPI(search);
    this.setState({
      listAlbum: object, loading: false, search: '',
    }, this.disabledButton);
  };

  render() {
    const {
      btnDisabled,
      search,
      clearSearchBar,
      loading,
      listAlbum,
      firstClick } = this.state;

    const check = (
      firstClick ? (<> </>) : <h3>Nenhum álbum foi encontrado</h3>
    );
    const textResult = (
      <>
        <p>
          Resultado de álbuns de:
          {' '}
          { clearSearchBar }
        </p>
        <div>
          {
            listAlbum.length === 0 ? <h3>Nenhum álbum foi encontrado</h3>
              : listAlbum.map((ele) => (
                <div
                  key={ `${ele.collectionName}_${ele.collectionId}` }
                >
                  <div>
                    <p>{ele.collectionName}</p>
                    <Link
                      to={ `/album/${ele.collectionId}` }
                      data-testid={ `link-to-album-${ele.collectionId}` }
                    >
                      <p>
                        <img
                          src={ ele.artworkUrl100 }
                          alt={ ele.collectionName }
                        />
                      </p>
                    </Link>
                    <p>
                      {ele.artistName}
                    </p>
                  </div>
                </div>
              ))
          }
        </div>
      </>
    );

    return (
      <div data-testid="page-search">
        <Header />
        {loading ? <Load /> : (
          <form>
            <label htmlFor="pesquisa">
              <input
                type="text"
                value={ search }
                data-testid="search-artist-input"
                placeholder="Nome do Artista"
                onChange={ this.disparaEvent }
              />
            </label>
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ btnDisabled }
              onClick={ this.clearSearchBar }
            >
              Procurar
            </button>
          </form>
        )}
        { (listAlbum.length > 0)
          ? textResult
          : check}
        <div />
      </div>
    );
  }
}

export default Search;
