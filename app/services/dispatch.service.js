import {store} from './../app';

export const Dispatch = (data, delay = 1) => {
    if (typeof data == 'string') {
        setTimeout(() => store.dispatch({
            type: data
        }), delay);
    } else {
        setTimeout(() => store.dispatch(data), delay);
    }
};

export const CreateReducer = (name, reducerClass) => {
    const initialState = reducerClass.initialState;
    const actions = reducerClass.actions;

    return (state = initialState, action) => {
        if (!actions[action.type]) return state;

        const newState = Object.assign({}, state, actions[action.type](action, state));
        console.info(`NEW ${name.toUpperCase()} STATE:`, action.type, newState);

        return newState;
    };
};

export const Store = () => store;

export const State = () => store.getState();

export default Dispatch;