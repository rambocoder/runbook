import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { ADD_ARTICLE } from './ExampleConstants';

import { getData } from './ExampleAction';



const mapsStatetoProps = state => {
    return { articles: state.articles};
}

export const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

export const List = connect(mapsStatetoProps)(ConnectedList);

export class ExampleComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles: [
                {title: 'First Title'},
                {title: 'Second title'}
            ]
        };
    }
    render() {
        const { articles } = this.state;
        return <ul>{articles.map( el => <li key={el.id}>{el.title}</li>)}</ul>;
    }
}



/*
mapStateToProps connects a part of the Redux state to the props of a React component
mapDispatchToProps connects Redux actions to React props
*/

export class ConnectedForm extends Component {
    constructor(){
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id }); // Relevant Redux part!!

    }
    render() {
        const { title } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
            </button>
          </form>
        );
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
};

export const Form = connect(null, mapDispatchToProps)(ConnectedForm);

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddlerware = ({getState, dispatch}) => {
    return function(next) {
        return function (action) {
            // check
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word =>action.payload.title.includes(word));
                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }
            return next(action)
        }
    }
}
