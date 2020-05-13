import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, Legend,} from 'recharts';

export class TweetSentimentPieChart extends Component {
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
    sortData COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    render() {
        const { data } = this.props;
        let sortedData = data.sort(this.sortData);
        return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default TweetSentimentPieChart
