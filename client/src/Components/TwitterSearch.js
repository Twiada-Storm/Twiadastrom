import React, { Component } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

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

                <div style={{ display: 'grid', 
                              justifyContent: 'center',
                              gridTemplateColumns: 'repeat(auto-fit, 230px)', 
                              gridAutoRows:'minmax(min-content, max-content)', 
                              gridAutoFlow: 'dense'}}>
                    {
                      this.state.twitterIds.map((item, index) => {
                        return (
                            <div style={{ height: 'auto', width: '200px'}}>
                                <TwitterTweetEmbed key={index} tweetId={item}/>
                            </div>)
                      })
                    }
                </div>
                
            </div>
        )
    }
}

export default TwitterSearch
