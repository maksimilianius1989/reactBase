import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        updateIndex: 0
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? "Close" : "Open"}
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref => {
        // this.container = ref
        // console.log('----->r', ref)
    }

    componentDidMount() {
        // console.log('----->', 'did');
    }

    getBody () {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <button
                    onClick={() => {
                        this.setState({updateIndex: this.state.updateIndex + 1})
                    }}
                >update</button>
                <CommentList comment = {article.comments} ref={this.setCommentsRef} key={this.state.updateIndex}/>
            </section>
        )
    }

    setCommentsRef = ref => {
        console.log('----->', 'ref', ref)
    }
}

export default Article