import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {TableCell, TableRow} from 'material-ui/Table';
import Button from 'material-ui/Button';
import blue from "material-ui/colors/blue";

const displayName = 'ArticleRow'
const propTypes = {
    index: PropTypes.number.isRequired,
    article: PropTypes.object.isRequired,
    togglePublish: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
}
const styles = {
    btn: {
        width: '55px'
    }
}
const ArticleRow = ({index, article, togglePublish, handleRemove}) => {
    return (<TableRow key={index}>
        <TableCell scope="row">{index + 1}</TableCell>
        <TableCell>{article.title}</TableCell>
        <TableCell>{article.description}</TableCell>
        <TableCell>{article.createdAt && article.createdAt.format('MMMM, DD YYYY')}</TableCell>
        <TableCell>{article.updatedAt && article.updatedAt.format('MMMM, DD YYYY')}</TableCell>
        <TableCell>{article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')}</TableCell>
        <TableCell>
            <div className="btn-group" role="group" aria-label="Actions">
                {
                    article.published
                        ? <Button onClick={() => togglePublish(article.id)} style={styles.btn} color="primary">withdraw</Button>
                        : <Button onClick={() => togglePublish(article.id)} style={styles.btn} color="primary">Publish</Button>
                }
                <Link to={`articles/${article.id}/edit`}><Button color="primary"> Edit </Button></Link>
                <Button onClick={() => handleRemove(article.id)} color="secondary">Delete</Button>
            </div>
        </TableCell>
    </TableRow>)
}

ArticleRow.displayName = displayName
ArticleRow.propTypes = propTypes

export default ArticleRow