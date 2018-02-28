import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import InfiniteScroll from 'react-infinite-scroll-component';
import {articleListRequest} from "../../../../modules/article/service";

class Articles extends Component {
  static displayName = 'Articles'
  static propTypes = {
    articles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    meta:PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
    this.nextArticles = this.nextArticles.bind(this)

  }

  renderArticles() {
    return this.props.articles.map((article, index) => {
      return <Article key={`article-${index}`}
                      index={index}
                      article={article}/>
    })
  }
  nextArticles() {
      this.props.dispatch(articleListRequest({ url: this.props.meta.next_page_url }))
  }
  componentDidUpdate() {
    console.log(this.props)
    this.state.articles.push( <Article key={`article-0`}
                                       index={0}
                                       article={this.props.articles[0]}/>)
  }
  render() {
    return (<section id="components-articles">
      <div className="container">
        <div className="row">
            <InfiniteScroll
                pullDownToRefresh
                pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>}
                releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
                refreshFunction={this.nextArticles}
                next={this.nextArticles}
                hasMore={true}
                loader={<h1>Loading...</h1>}>
                { this.state.articles }
                </InfiniteScroll>

        </div>
      </div>
    </section>
    )
  }
}

export default Articles
