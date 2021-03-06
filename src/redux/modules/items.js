// const RENDER_DATA_AS_ITEMS = 'RENDER_DATA_AS_ITEMS';
const FILTER_ITEMS_BY_TAG = 'FILTER_ITEMS_BY_TAG';
const SHOW_BORROW_MODAL = 'SHOW_BORROW_MODAL';

const initialState = {
    loading: true,
    // itemsData: [],
    specificUserItems: [],
    itemFilters: [],
    borrowModalDisplayed: false
};


// export function renderDataAsItems(allItems, specificUserItems) {
//     return {
//         type: RENDER_DATA_AS_ITEMS,
//         payload: { allItems, specificUserItems }
//     };
// }

export function showBorrowModal(value) {
    return {
        type: SHOW_BORROW_MODAL,
        payload: value
    };
}

export function updateItemsFilter(filters) {
    return {
        type: FILTER_ITEMS_BY_TAG,
        payload: filters
    };
}

export function ItemReducer(state = initialState, action) {
    switch (action.type) {
    // case RENDER_DATA_AS_ITEMS:
    //     return { ...state, specificUserItems: action.payload.specificUserItems, itemsData: action.payload.allItems };
    case FILTER_ITEMS_BY_TAG:
        return { ...state, itemFilters: action.payload };
    case SHOW_BORROW_MODAL:
        return { ...state, borrowModalDisplayed: action.payload };
    default:
        return state;
    }
}

// Thunk actions -- For use pre-GraphQL
// export function fetchAndRenderItems(userId) {
//     return function renderDispatch(dispatch) {
//         Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
//                    fetch(url).then(response => response.json())
//                ))).then(json => {
//                    const [items, users] = json;
//                    const allItems = items.map(item => {
//                        const itemowner = users.filter(user => user.id === item.itemowner);
//                        const itemBorrower = users.filter(user => user.id === item.borrower);
//                        item.itemowner = itemowner[0];
//                        item.itemBorrower = itemBorrower[0];
//                        return item;
//                    });
//                    let specificUserItems = [];
//                    if (userId) { // TODO: turn this into a reduce
//                        specificUserItems = allItems.filter(item => item.itemowner.id === userId);
//                    }
//                    dispatch(renderDataAsItems(allItems, specificUserItems));
//                });
//     };
// }
