import React, { Component } from 'react'
import PropTypes from 'prop-types'
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

const styles = {
  bgColor: {
      backgroundColor: blue["500"]
  }
}
class Pagination extends Component {
  static displayName = 'Pagination'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderLinks() {
    const { meta,classes } = this.props
    const range = [...Array(meta.lastPage).keys()]

      return range.map(n => {
      const className = meta.currentPage === (n+1) ? `primary ${classes.bgColor} ` : 'light'
      
      return <button key={n}
                     type="button"
                     className={`btn btn-${className}`}
                     onClick={() => this.props.onChange(n+1)}>{n+1}</button>
    })
  }
  
  render() {
    return <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mx-auto flex-wrap" role="group" aria-label="First group">
        {this.renderLinks()}
      </div>
    </div>
  }
}
Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
