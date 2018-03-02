import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import InfiniteScroll from 'react-infinite-scroll-component';
import {articleListRequest} from "../../../../modules/article/service";
import Http from "../../../../utils/Http";
import * as articleActions from "../../../../modules/article/store/actions";

class Articles extends Component {
    static displayName = 'Articles'
    static propTypes = {
        articles: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
        meta: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            meta: []
        }
        this.nextArticles = this.nextArticles.bind(this)

    }
    componentDidMount(){
        this.setState({meta:this.props.meta})
    }

    renderArticles() {
        if (this.state.articles.length === 0) {

            return this.props.articles.map((article, index) => {
                this.state.articles.push(<Article key={`article-${index}`}
                                                  index={index}
                                                  article={article}/>)
            })
        }
        else console.log(this.state.meta)
    }

    nextArticles() {
        Http.get(this.state.meta.nextPageUrl)
            .then((res) => {
                this.state.articles = res.data
                this.state.meta = res.meta
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }

    render() {
        return (<section id="components-articles">
                <div className="container">
                    <div className="row">
                        <InfiniteScroll
                            pullDownToRefresh
                            pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595; Pull down to
                                refresh</h3>}
                            releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
                            refreshFunction={this.nextArticles}
                            next={this.nextArticles}
                            hasMore={true}
                            loader={<h1>Loading...</h1>}>
                            {this.renderArticles() && this.state.articles}
                        </InfiniteScroll>

                    </div>
                </div>
            </section>
        )
    }
}

export default Articles
