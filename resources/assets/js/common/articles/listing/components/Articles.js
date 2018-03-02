import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import InfiniteScroll from 'react-infinite-scroll-component';
import Http from "../../../../utils/Http";

class Articles extends Component {
    static displayName = 'Articles'
    static propTypes = {
        articles: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            nextPageUrl: "/articles/published?page=2"
        }
        this.nextArticles = this.nextArticles.bind(this)

    }

    renderArticles() {
        if (this.state.articles.length === 0) {

            return this.props.articles.map((article) => {
                this.state.articles.push(<Article key={`article-${article.id}`}
                                                  index={article.id}
                                                  article={article}/>)
            })

        }
        else {
            return true

        }
    }

    nextArticles() {
        let moreDivs = [];
        Http.get(this.state.nextPageUrl)
            .then((res) => {
                this.setState({nextPageUrl: res.data.next_page_url})

                res.data.data.map((article) => {
                    moreDivs.push(<Article key={`article-${article.id}`}
                                           index={article.id}
                                           article={article}/>)
                })
                this.setState({articles: this.state.articles.concat(moreDivs)});
            })
            .catch(() => {
                // TODO: handle err
                console.error(this.state.articles)
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
