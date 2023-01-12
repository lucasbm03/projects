import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    loading: false,
    check: false,
    // favoriteSongs: [],
  };

  componentDidMount() {
    this.keepFavorites();
  }

  addFavorites = async ({ target }) => {
    const { album } = this.props;
    if (target.checked) {
      this.setState({ loading: true, check: true });
      await addSong(album);
      this.setState({ loading: false });
    }
  };

  keepFavorites = async () => {
    const getSongs = await getFavoriteSongs();
    const { album } = this.props;
    const eai = getSongs.some((song) => song.trackId === album.trackId);
    return eai ? this.setState({ check: true }) : this.setState({ check: false });
  };

  render() {
    const { album } = this.props;
    const { loading, check } = this.state;
    return (
      loading ? <Loading />
        : (
          <div>
            <p>{ album.trackName }</p>
            <audio data-testid="audio-component" src="{previewUrl}" controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor={ album.trackId }>
              Favorita
              <input
                data-testid={ `checkbox-music-${album.trackId}` }
                id={ album.trackId }
                type="checkbox"
                onChange={ this.addFavorites }
                checked={ check }
              />
            </label>
          </div>)
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.shape().isRequired,
  // musicsList: PropTypes.shape().isRequired,
};

export default MusicCard;
