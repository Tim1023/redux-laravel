import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import InfiniteScroll from 'react-infinite-scroll-component';
import Http from "../../../../utils/Http";
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

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
            nextPageUrl: "/articles/published?page=2",
            hasMore: true
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
        this.setState({hasMore:false})
        Http.get(this.state.nextPageUrl)
            .then((res) => {
                this.setState({nextPageUrl: res.data.next_page_url})

                res.data.data.map((article) => {
                    moreDivs.push(<Article key={`article-${article.id}`}
                                           index={article.id}
                                           article={article}/>)
                })
                this.setState({articles: this.state.articles.concat(moreDivs)});
                if (this.state.nextPageUrl)
                {
                    this.setState({hasMore:true})
                }
                else {
                    this.setState({hasMore:false})
                }

            })
            .catch((err) => {
                console.error(err)
                this.setState({hasMore:false})
            })
    }

    render() {
        return (<section id="components-articles">
                <div className="container">
                    <div className="row">

                        <InfiniteScroll
                            pullDownToRefresh
                            pullDownToRefreshContent={<Typography variant="title" style={{textAlign: 'center'}}>
                                <CircularProgress />
                            </Typography>}
                            releaseToRefreshContent={<Typography variant="title" style={{textAlign: 'center'}}>
                                <CircularProgress />
                            </Typography>}
                            refreshFunction={this.nextArticles}
                            next={this.nextArticles}
                            hasMore={this.state.hasMore}
                            loader={<Typography variant="title" style={{textAlign: 'center'}}>
                                <CircularProgress />
                            </Typography>}>
                            {this.renderArticles() && this.state.articles}
                        </InfiniteScroll>

                    </div>
                </div>
            </section>
        )
    }
}

export default Articles
