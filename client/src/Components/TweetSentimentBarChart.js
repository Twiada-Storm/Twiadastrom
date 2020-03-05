import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

export class TweetSentimentBarChart extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    sortData = (a, b) => {
        const scoreA = a.score;
        const scoreB = b.score;
        let comparison = 0;
        if (scoreA > scoreB) {
          comparison = 1;
        } else if (scoreA < scoreB) {
          comparison = -1;
        }
        return comparison;
    }

    render() {
        const { data } = this.props;
        let sortedData = data.sort(this.sortData);
        return (
            <div style={{ margin: '1%'}}>
                <h2 style={{ color: '#282c34', display: 'flex', justifyContent: 'center'}}>Sentiment Score Analysis (Negative to Positive)</h2>
                <div>
                <BarChart
                      width={500}
                      height={400}
                      data={sortedData}
                    //   margin={{
                    //     top: 5, right: 30, left: 20, bottom: 5,
                    //   }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="score" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default TweetSentimentBarChart
