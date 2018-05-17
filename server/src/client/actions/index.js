import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POST = 'fetch_post';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://restsims.com/wp-json/wp/v2/posts');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const fetchPost = (path) => async dispatch => {
  const res = await axios.get(`https://restsims.com/wp-json/wp/v2/posts?slug=${path}`);

  dispatch({
    type: FETCH_POST,
    payload: res
  });
};
