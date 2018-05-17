import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class Post extends Component {
  constructor(props) {
  super(props)
}

  componentDidMount() {
      this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        post list:
        {this.props.post[0].id}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

function loadData(store, params) {

  console.log(`val is: ${params.id}`);

  return store.dispatch(fetchPost(params.id));
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchPost })(Post)
};
