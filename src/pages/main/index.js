import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        texts: [],
        textCount: {},
        page: 1
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = async (page = 1) => {
        const response = await api.get(`/vocabularies?page=${page}`);

        console.log(response)

        const { count, rows } = response.data;

        this.setState({texts: rows, textCount: count, page: page})
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadData(pageNumber);
    };

    nextPage = () => {
        const { page } = this.state;

        const pageNumber = page + 1;
        this.loadData(pageNumber);
    };

    render() {
        const { texts, page } = this.state;

        return (
            <div className="texts-list">
                {this.state.texts.map(text => (
                    <div key={text?.id}>{text?.text}</div>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}