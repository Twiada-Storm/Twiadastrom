import React, { Component } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css'
import './Masonry.css'

export class TwitterSearch extends Component {
    state = {
        searchTerm: '',
        responseToPost: '',
        search: '',
        twitterResponse: [],
        twitterIds: []
    };

    callTwitter = async e => {
        e.preventDefault();
        const url = '/twitter/tweetSearch'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ searchTerm: this.state.searchTerm }),
          headers: { 'Content-Type': 'application/json'}});
        const body = await response.json();
        let resp = [];
        let ids = [];
        body.map((tweet) =>
          resp.push(tweet.text)
        )
        body.map((tweet) => 
            ids.push(tweet.id_str)
        )
        this.setState({
          twitterResponse: [...resp],
          twitterIds: [...ids]
        })
      };

      breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };


    render() {
        return (
            <div style={{ display: 'flex',flexDirection: 'column'}}>
                <form onSubmit={this.callTwitter} style={{ display: 'flex', justifyContent:'flex-end', marginRight: '2%'}}>
                  <input
                    type="text"
                    placeholder="Tweet Subject"
                    value={this.state.searchTerm}
                    onChange={e => this.setState({ searchTerm: e.target.value })}
                  />
                  <button type="submit">Search</button>
                </form>

                <div style={{ minHeight: '500px', border: '1px solid black', marginTop: '1%'}}></div>

                <div >
                              <Masonry
                                breakpointCols={this.breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                              >
                                {
                                  this.state.twitterIds.map((item, index) => {
                                    return (
                                            <TwitterTweetEmbed key={index} tweetId={item}/>
                                        )
                                  })
                                }
                              </Masonry>
                    
                </div>
                
            </div>
        )
    }
}

export default TwitterSearch
