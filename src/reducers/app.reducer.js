import { CREATE_URL_ITEM, SET_URL_ITEMS} from '../constants/actions';

export default function reducer(state, action) {
    switch (action.type) {
        case CREATE_URL_ITEM:    
            return { items: [...state.items, action.payload], url: action.payload.url, shortUrl: action.payload.shortUrl};
        case SET_URL_ITEMS:    
            return {...state, items: [...state.items, ...action.payload]};
        default:
            return state;
    }
}
