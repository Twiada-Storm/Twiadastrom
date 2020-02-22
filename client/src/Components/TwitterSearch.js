import React, { Component } from 'react'

export class TwitterSearch extends Component {
    state = {
        searchTerm: '',
        responseToPost: '',
        search: '',
        twitterResponse: [],
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
        body.map((tweet) =>
          resp.push(tweet.text)
        )
        this.setState({
          twitterResponse: [...resp]
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

                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                    {
                      this.state.twitterResponse.map((item, index) => {
                        return (<p key={index}> {item}</p>)
                      })
                    }
                </div>
                
            </div>
        )
    }
}

export default TwitterSearch
