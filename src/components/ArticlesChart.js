import React, {Component} from 'react'

class ArticlesChart extends Component {
    static propTypes = {

    }

    componentDidMount() {
        console.log('-----> my this.refs.chart', this.refs.chart);
    }

    render() {
        return (
            <div ref='chart'>
                chart test
            </div>
        )
    }
}

export default ArticlesChart