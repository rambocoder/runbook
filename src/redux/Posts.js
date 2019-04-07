import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./ExampleAction";

export class Post extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
    //console.log(this.props);
  }
  render() {
    return (
        <ul className="list-group list-group-flush">
          {this.props.articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      );
  }
}
const mapStateToProps = (state) => {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);



//export const Form = connect(null, mapDispatchToProps)(ConnectedForm);