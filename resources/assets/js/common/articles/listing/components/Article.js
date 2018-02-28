// import libs
import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';
// import components
import {Link} from 'react-router-dom'
import Typography from 'material-ui/Typography';

const displayName = 'ArticleComponent'
const propTypes = {
    index: PropTypes.number.isRequired,
    article: PropTypes.object.isRequired,
}

const renderAuthor = (article) => {
  return article.user && `By ${ article.user.name }`
}

const renderPublishedAt = (article) => {
    return article.publishedAt && `at ${article.publishedAt.format('MMMM D, YYYY')}`
}

function render({article}) {
    return <Paper className="col-12 col-sm-9 mb-5 mx-auto" elevation={6}>
        <div className="card-body">
            <Typography variant="headline" component="h3">{article.title}</Typography>
            <Typography className="card-subtitle mb-2 text-muted">{renderPublishedAt(article)} {renderAuthor(article)}</Typography>
            <Typography component="p">{article.description}</Typography>
            <Link to={`blog/${article.slug}`} className="card-link">Read More</Link>
        </div>
    </Paper>
}

render.displayName = displayName
render.propTypes = propTypes

export default render
