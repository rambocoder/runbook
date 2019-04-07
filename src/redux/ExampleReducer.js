import { ADD_ARTICLE } from './ExampleConstants';

const initialState = {
    articles: [{
        title: 'Redux one'
    }],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    if (action.type == ADD_ARTICLE) {
        // Using concat(), slice(), and …spread for arrays
        // Using Object.assign() and …spread for objects
        //state.articles.push(action.payload);
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;