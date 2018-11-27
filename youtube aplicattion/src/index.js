import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAb5pVvARZ8aCIeqybY2v-oZFsQzCJUxX8';



//Create a new component.This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state= {
       videos: [],
      selectedVideo: null
     };

this.videoSearch('food');

  }

videoSearch(term){
  //Search bar-ul youtube uli care cauta cuvinte folosite frecvent
  YTSearch({key : API_KEY, term: term}, (videos) =>{
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
     });
  });
}

  //rendering SearchBar-ului creat in cealalta fila
render(){
  //debounce ia functia de search si o updateaza la 3s ptr a evita laggingul
  const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
  return(
    <div>
    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
     onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
     videos={this.state.videos} />
    </div>
  );
}

}


//Take this component and put it on the page
ReactDOM.render(<App />,document.querySelector(".container"));
