import React, {Component} from 'react'
import Button from 'material-ui/Button';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import blue from 'material-ui/colors/blue';

const style = {
    link: {
        float: 'right',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
    },
    button: {
        backgroundColor: blue["500"],
    }

}

class ScrollTop extends Component {
    constructor() {
        super()

        this.delayInMs = '16'
        this.scrollStepInPx = 50

        this.state = {
            intervalId: 0,
            showScoller: false,
        }

        this.toggleScroll = this.toggleScroll.bind(this)
        this.scrollStep = this.scrollStep.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.toggleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.toggleScroll)
    }

    toggleScroll() {
        if (window.pageYOffset > 200) {
            this.setState({showScoller: true})
        } else {
            this.setState({showScoller: false})
        }
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId)
        }
        window.scroll(0, window.pageYOffset - this.scrollStepInPx)
    }

    scrollToTop(e) {
        e.preventDefault()

        let intervalId = setInterval(this.scrollStep, this.delayInMs)
        this.setState({intervalId: intervalId})
    }

    render() {
        if (this.state.showScoller) {
            return (<a href="#" title='Back to top'
                       style={style.link}
                       onClick={(e) => {
                           this.scrollToTop(e)
                       }}>
                <Button variant="fab" className="text-white" style={style.button}>
                    <ArrowUpward/>
                </Button>
            </a>)
        }
        return null
    }
}

export default ScrollTop
