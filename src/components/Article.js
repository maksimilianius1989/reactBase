import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        // console.log('----->', 'will');
    }

    componentWillReceiveProps(nextProps) {
        // console.log('----->', 'updating', this.props.isOpen, nextProps.isOpen);
    }

    render() {
        // console.log('----->', 'render');
        const {article, isOpen, toggleOpen} = this.props
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? "Close" : "Open"}
                </button>
                {this.getBody()}
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
                <CommentList comment = {article.comments} ref={this.setCommentsRef}/>
            </section>
        )
    }

    setCommentsRef = ref => {
        console.log('----->', 'ref', ref)
    }
}

export default Article