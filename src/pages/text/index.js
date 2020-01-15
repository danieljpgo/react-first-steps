import React, {Component} from 'react';
import api from '../../services/api'

export default class Index extends Component {
    state = {
        text: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/vocabularies/${id}`);

        this.setState({ text: response.data })
    }

    render() {
        const { text } = this.state;

        return (
            <div className="text-info">
                <h1>{text.text}</h1>
            </div>
        )
    }
}