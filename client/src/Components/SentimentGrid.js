import React, { Component } from 'react'
import './Masonry.css'

export class SentimentGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            test: [
                4, 
                5, 
                2,
                1,
                2,
                4,
                6,
                7,
            ]
        }
    }

    breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    render() {
        // const { data } = this.props;
        return (
            <div>
                                {
                                  this.state.test.map((item, index) => {
                                    return (

                                        <article style={{ 
                                            background: '#fff',
                                            display: 'block',
                                            padding: '18px',
                                            border: '1px solid #eee',
                                            marginTop: '21px',
                                            marginBottom: '21px',
                                            marginLeft: '21px',
                                            marginRight: '21px',
                                            overflow: 'hidden',
                                            boxShadow: '6px 4px 9px 1px rgba(119, 119, 119, 0.75)'

                                        }}>
                                        <div style={{ float: 'left', width: '39%'}}>
                                          {/* <img src="{{=imgSrc}}" /> */}
                                          <p> Testing tweet body goes here
                                            {/* <a href="{{=tweetLink}}" target="_blank">Link</a> */}
                                          </p>
                                        </div>
                                        <div style={{ float: 'right', width: '55%', borderLeft: '1px dashed', paddingLeft: '21px' }}>
                                          <table style={{ width: '100%', border: '1px solid'}}>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Score</td>
                                              <td style={{ border: '1px solid'}}>80</td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Comparative</td>
                                              <td style={{ border: '1px solid'}}> 0.285234234928342 </td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Favorited</td>
                                              <td style={{ border: '1px solid'}}> 0 </td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Retweeted</td>
                                              <td style={{ border: '1px solid'}}> 14 </td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Words Matched</td>
                                              <td style={{ border: '1px solid'}}> awesome </td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Positive Words</td>
                                              <td style={{ border: '1px solid'}}> awesome </td>
                                            </tr>
                                            <tr style={{ border: '1px solid'}}>
                                              <td style={{ border: '1px solid'}}>Negative Words</td>
                                              <td style={{ border: '1px solid'}}> sad </td>
                                            </tr >
                                          </table>
                                        </div>
                                      </article>
                                        )
                                  })
                                }                             
            </div>
        )
    }
}

export default SentimentGrid
