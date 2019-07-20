/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
  };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      })
      .catch(err => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album}>
        {album.title}
      </AlbumDetail>
    ));
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
