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

export const Store = () => store;

export const State = () => store.getState();

export default Dispatch;