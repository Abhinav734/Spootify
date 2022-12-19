import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

export default class Discover extends Component {

  client_id = '4e12241b06264d24992dad544503d427';
    client_secret = '6a1ab7a65f654f0db522e52b240defb5'
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }
  componentDidMount(){
    


    fetch ('https://accounts.spotify.com/api/token',{headers: new Headers(
      {
        'client_id': '4e12241b06264d24992dad544503d427',
        'response_type': 'code',
        'redirect_uri': 'https://accounts.spotify.com'
  })}).then(
      res=>console.log(res.json()).then(data=> console.log(data))
    )
    fetch('https://api.spotify.com/v1/browse/new-releases', {
  
    headers: {
      'Authorization': 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64'))
    },
    json: true
  
  }
    )
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

   
console.log("a")
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
