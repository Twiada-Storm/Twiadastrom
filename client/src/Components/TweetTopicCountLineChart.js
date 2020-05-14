import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export class TweetTopicCountLineChart extends Component {
    constructor(props){
        super(props)
        this.state = {
    
        }
    }

    render() {
        const { data } = this.props;
        data.reverse()
        return (
            <div style={{ margin: '1%'}}>
                <h2 style={{ color: '#282c34', display: 'flex', justifyContent: 'center'}}>Tweet Count for Past 7 days</h2>
                <div>
                <LineChart
                      width={500}
                      height={400}
                      data={data}
                    //   margin={{
                    //     top: 5, right: 30, left: 20, bottom: 5,
                    //   }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default TweetTopicCountLineChart
