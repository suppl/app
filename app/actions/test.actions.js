import * as types from '../constants/action-types.constants';

export function add(amount) {
    return {
        type: types.ADD,
        amount
    };
}

export function minus(amount) {
    return {
        type: types.MINUS,
        amount
    };
}