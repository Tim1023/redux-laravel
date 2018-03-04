// import libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {articleListRequest, articleUpdateRequest, articleRemoveRequest} from '../../service'

// import components
import ArticleRow from './components/ArticleRow'
import Pagination from './components/Pagination'
import {Link} from 'react-router-dom'
import Table, {
    TableCell,
    TableHead,
    TableRow,
    TableBody,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import blue from 'material-ui/colors/blue';

const styles = {
    bgColor: {
        backgroundColor: blue["500"]
    },
    overFlow: {
        overflowX: 'auto'
    }
}
class Page extends Component {
    static displayName = 'ArticlesPage'
    static propTypes = {
        meta: PropTypes.object.isRequired,
        articles: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.togglePublish = this.togglePublish.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.pageChange = this.pageChange.bind(this)
    }

    componentWillMount() {
        const {dispatch} = this.props

        dispatch(articleListRequest({}))
    }

    pageChange(pageNumber) {
        this.props.dispatch(articleListRequest({pageNumber}))
    }

    togglePublish(id) {
        const article = this.props.articles.find(article => (article.id === id))

        if (!article)
            return

        article.published = !article.published
        if (article.published) {
            article.publishedAt = moment()
        } else {
            article.publishedAt = null
        }

        this.props.dispatch(articleUpdateRequest(article.toJson()))
    }

    handleRemove(id) {
        this.props.dispatch(articleRemoveRequest(id))
    }

    renderArticles() {
        return this.props.articles.map((article, index) => {
            return <ArticleRow key={index}
                               article={article}
                               index={index}
                               togglePublish={this.togglePublish}
                               handleRemove={this.handleRemove}/>
        })
    }

    render() {
        return <Paper className="col-sm-9 mx-sm-auto col-md-10 my-4 pb-4" role="main" elevation={4}>
            <Toolbar>
                <Typography variant="title">Articles
                </Typography>
                <Link to='/articles/create' className="ml-auto">
                    <Button variant="fab" aria-label="add"  style={styles.bgColor}  className="text-white">
                        <AddIcon/>
                    </Button>
                </Link>
            </Toolbar>
            <Table className="table table-responsive table-striped" style={styles.overFlow}>
                <TableHead className="thead-inverse">
                    <TableRow>
                        <TableCell >#</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Created At</TableCell>
                        <TableCell >Updated At</TableCell>
                        <TableCell >Published At</TableCell>
                        <TableCell className="pl-4" >Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderArticles()}
                </TableBody>
            </Table>
            <Pagination meta={this.props.meta} onChange={this.pageChange}/>
        </Paper>
    }
}

export default Page
