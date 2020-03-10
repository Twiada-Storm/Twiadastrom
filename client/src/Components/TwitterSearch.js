import React, { Component } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css'
import './Masonry.css'
import TweetTopicLineChart from './TweetTopicCountLineChart';
import TweetSentimentBarChart from './TweetSentimentBarChart';
import TweetMasonry from './TweetMasonry';
import Button from "react-bootstrap/Button";

export class TwitterSearch extends Component {
    state = {
        searchTerm: '',
        responseToPost: '',
        search: '',
        twitterResponse: [],
        twitterIds: [],
        sevenDays: [],
        sentiments: []
    };

    callAll = async e => {
      e.preventDefault();
      await this.callTwitter();
      await this.callSevenDays();
      await this.callSentiment();
    }

    callTwitter = async e => {
        // e.preventDefault();
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
          twitterIds: [...ids],
          // searchTerm: ''
        })
      };

      callSevenDays = async e => {
        // e.preventDefault();
        const url = '/twitter/lastSevenDays'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ searchTerm: this.state.searchTerm }),
          headers: { 'Content-Type': 'application/json'}});
        const body = await response.json();
        let dates = []
        body.map((tweet) => {
          dates.push(tweet)
        })
        this.setState ({
          sevenDays: [...dates],
          // searchTerm: ''
        })
      };

      callSentiment = async e => {
        // e.preventDefault();
        const url = '/twitter/sentiment'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ searchTerm: this.state.searchTerm }),
          headers: { 'Content-Type': 'application/json'}});
        const body = await response.json();
        let scores = []
        body.map((score) => {
          scores.push(score)
        })
        scores.sort()
        this.setState({
          sentiments: [...scores],
          searchTerm: '',

        })
      };

    render() {
        return (
            <div style={{ display: 'flex',flexDirection: 'column'}}>
                <formControl onSubmit={this.callAll} style={{ display: 'flex', justifyContent:'flex-end', marginRight: '2%'}}>
                  <input
                    class = "searchBar"
                    type="text"
                    placeholder="Tweet Subject"
                    value={this.state.searchTerm}
                    onChange={e => this.setState({ searchTerm: e.target.value })}
                  />
                  <Button variant="outline-secondary" type="submit">Search</Button>
                </formControl>


                <div style={{ minHeight: '500px', border: '1px solid black', marginTop: '1%', display: 'flex', flexDirection: 'row'}}>
                    <TweetTopicLineChart data={this.state.sevenDays}/>
                    <TweetSentimentBarChart data={this.state.sentiments}/>
                </div>

                <div >
                  <TweetMasonry data={this.state.twitterIds}/>
                </div>

            </div>
        )
    }
}

export default TwitterSearch
