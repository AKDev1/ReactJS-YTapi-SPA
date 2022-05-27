import '../css/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component }  from 'react';
import youtube from '../apis/youtube';
import Header from './header';
import Navbar from './navbar';

class App extends React.Component{
  state = {
    videos: [],
    KEY: 'AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM',
    htmlCode: []
  }

  handleSubmit = async(searchQuery) => {
    if(searchQuery.length >= 2){
      //Using Fetch API
      //Change the number of maxResults to show more videos in one API call
      const baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
      const URL =  baseURL + searchQuery + '&key=' + this.state.KEY;
      let data = await fetch(URL);
      let parsedData = await data.json();

      const Code = [];

      //Using axios HTTP request - Uncomment the code below and comment the code above to fetch using axios

      // const res = await youtube.get('/search', {
      //   params:{
      //     q: searchQuery
      //   }
      // });

      this.setState({
        // if using axios to fetch, type 'vidoes: res.data.items'. If using fetch API, type 'videos: parsedData.items'.
        videos: parsedData.items  
      });

      this.state.videos.forEach(function(video){
        const visitLink = "https://www.youtube.com/watch?v=" + video.id.videoId;
        Code.push(<Col className='col' lg={3}>
          <div className='video-item item'>
            <a href={visitLink}><img className={'video-thumbnail ' + video.id.kind.slice(8,)} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/></a>
            <div className='content'>
              <a href={visitLink}><div className='title'>{video.snippet.title.length < 38?video.snippet.title:video.snippet.title.slice(0,38)+'...'}</div></a>
              <p className='description'>{video.snippet.description.length < 38?video.snippet.description:video.snippet.description.slice(0,38)+'...'}</p>
            </div>
          </div>
        </Col>)
      });

      this.setState({
        htmlCode: Code
      });
      console.log("resp", parsedData);
    } else{
      console.log("String length too short!");
    }
  };
  
  render() {
    return (
      <html>
        <Header/>
        <body>
          <Navbar handleFormSubmit={this.handleSubmit}/>
          <div className='main-content'>
            <Container fluid={true}>
              <Row>
                {this.state.htmlCode}
              </Row>
            </Container>
          </div>
        </body>
      </html>
    );
  }  
}

export default App;