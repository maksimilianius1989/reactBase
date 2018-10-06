import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? "Close" : "Open"}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody () {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
            <section>
                {article.text}
                <CommentList comment = {article.comments}/>
            </section>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('----->', ev.nativeEvent);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}