import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        texts: []
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const response = await api.get('/vocabularies');
        this.setState({texts: response.data.rows})
    };

    render() {
        return (
            <div className="texts-list">
                {this.state.texts.map(text => (
                    <h2 key={text?.id}>{text?.text}</h2>
                ))}
            </div>
        )
    }
}