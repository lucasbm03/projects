import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../component/Header';
import MusicCard from '../component/MusicCard';

class Album extends React.Component {
  state = {
    artist: '',
    albumName: '',
    albumList: [],
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const musics = await getMusics(params.id);
    console.log(musics);
    this.setState({
      artist: musics[0].artistName,
      albumName: musics[0].collectionName,
      albumList: musics,
    });
  }

  render() {
    const { artist, albumName, albumList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h1 data-testid="artist-name">{artist}</h1>
        <h3 data-testid="album-name">{albumName}</h3>
        { albumList.map((music, index) => index > 0
        && <MusicCard key={ index } album={ music } musicsList={ albumList } />) }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Album;
