import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
        const response = jsonplaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response})
    };
