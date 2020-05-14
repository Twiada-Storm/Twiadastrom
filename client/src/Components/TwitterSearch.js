import React, { Component } from 'react';
import './Masonry.css'
import TweetTopicLineChart from './TweetTopicCountLineChart';
import TweetSentimentBarChart from './TweetSentimentBarChart';
import TweetMasonry from './TweetMasonry';
//import Button from '@material-ui/core/Button';
import Button from "react-bootstrap/Button";
import SentimentGrid from './SentimentGrid';
import FullScreenDialog from './Conditional';

import CheckboxLabels from './VisualOptions.js';

export class TwitterSearch extends Component {
    state = {
        searchTerm: '',
        responseToPost: '',
        search: '',
        twitterResponse: [],
        twitterIds: [],
        sevenDays: [],
        sentiments: [],
        analysis : [],
        show: false,
        prevSearch : ''
    };

    callAll = async e => {
      e.preventDefault();
      this.setState({
        prevSearch: this.state.searchTerm
      })
      await this.callTwitter();
      await this.callSevenDays();
      await this.callSentiment();
      await this.callSentimentAnalysis();
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
          // searchTerm: '',

        })
      };

      callSentimentAnalysis = async e => {
        // e.preventDefault();
        const url = '/twitter/sentimentAnalysis'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ searchTerm: this.state.searchTerm }),
          headers: { 'Content-Type': 'application/json'}});
        const body = await response.json();
        let analysis = []
        body.map((result) => {
          analysis.push(result)
        })

        this.setState({
          analysis: [...analysis],
          searchTerm: '',

        })
      };

      toggleGrid(){
        console.log(this.state.show)
        this.state.show = !this.state.show
        console.log(this.state.show)
      }

      clearEverything(){
        window.location.reload();
      }




    render() {
        return (
          <div style={{ display: 'flex',flexDirection: 'column'}}>
            <form onSubmit={this.callAll} style={{ display: 'flex', justifyContent:'center', marginRight: '2%'}}>
              <input
                type="text"
                placeholder="Tweet Subject"
                value={this.state.searchTerm}
                onChange={e => this.setState({ searchTerm: e.target.value })} />
              <button type="submit">Search</button>
              <button style={{ marginLeft: '2%'}} onClick={this.clearEverything}>Clear Search</button>
              </form>
              <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', marginLeft: '26%'}}>
                <FullScreenDialog data={this.state.analysis}/>
                <CheckboxLabels />
                <h2>{this.state.prevSearch}</h2>
              </div>

              <div style={{ minHeight: '500px', marginTop: '1%', display: 'flex', flexDirection: 'row'}}>
                  <TweetTopicLineChart data={this.state.sevenDays}/>
                  <TweetSentimentBarChart data={this.state.sentiments}/>
              </div>

              <div>
              <TweetMasonry data={this.state.twitterIds}/>
              </div>
      </div>
        )
    }
}

export default TwitterSearch
