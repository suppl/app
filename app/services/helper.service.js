import * as React from "react";
import moment from "moment";
import * as _ from "lodash";

export const SetUrl = (url) => {
    console.log('SetUrl', url);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const getWidth = () => (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

export const IsDesktop = () => getWidth() > 900;

export const IsMobile = () => getWidth() < 600;

export const IsTablet = () => !IsMobile() && !IsDesktop();

export const CalcTotals = (user) => {
    let historyItems = Object.values(user.history || {});

    let totals = {
        NEAT           : 0,
        durationSeconds: 0,
        durationMinutes: 0,
    };

    _.each(historyItems, item => {
        totals.NEAT += item.NEAT;
        totals.durationSeconds += item.durationSeconds;
        totals.durationMinutes += ((item.durationSeconds - (item.durationSeconds % 60))  / 60);
    });

    return totals;
};

export const CalcStreak = (user) => {
    if (!user.streak) return 0;

    let count = -1;
    let date;

    do {
        count += 1;
        date = moment().subtract(count + 1, 'days').format('YYYYMMDD');
    } while (user.streak[date] !== undefined);

    const today = moment().format('YYYYMMDD');

    if (user.streak[today] !== undefined) {
        count += 1;
    }

    return count;
};

export const CalcComplete = (user) => {

    return !user.done ? 0 : Object.values(user.done).length;

};

export const If = React.createClass({
    displayName: 'If',

    render: function () {
        if (this.props.condition)
            return (this.props.children);
        return null;
    }
});
