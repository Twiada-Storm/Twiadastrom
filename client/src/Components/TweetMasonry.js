import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './Masonry.css'

export class TweetMasonry extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    render() {
        const { data } = this.props;

        return (
            <div>
                <Masonry
                                breakpointCols={this.breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                              >
                                {
                                  data.map((item, index) => {
                                    return (
                                            <TwitterTweetEmbed key={index} tweetId={item}/>
                                        )
                                  })
                                }
                              </Masonry>
            </div>
        )
    }
}

export default TweetMasonry
