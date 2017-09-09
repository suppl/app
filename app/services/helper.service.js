import * as React from "react";
import moment from "moment";
import * as _ from "lodash";
import Bricklayer from 'bricklayer';

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
        NEPA           : 0,
        durationSeconds: 0,
        durationMinutes: 0,
    };

    _.each(historyItems, item => {
        totals.NEPA += item.NEPA || item.NEAT;
        totals.durationSeconds += item.durationSeconds;
        totals.durationMinutes += ((item.durationSeconds - (item.durationSeconds % 60)) / 60);
    });

    return totals;
};

export const CalcTag = (index) => {

    if (index == 1) {
        return {text: 'Legend', color: '#ffdb73'};
    }

    if (index >= 2 && index <= 3) {
        return {text: 'Superstar', color: '#c8d4fa'};
    }

    if (index >= 4 && index <= 6) {
        return {text: 'Hero', color: '#fad1c8'};
    }

    if (index >= 7 && index < 10) {
        return {text: 'Champion', color: '#a1dacc'};
    }

    return null;
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

    return !user.history ? 0 : Object.values(user.history).length;

};

export const If = React.createClass({
    displayName: 'If',

    render: function () {
        if (this.props.condition)
            return (this.props.children);
        return null;
    }
});

export const SortActivity = () => {
    let bricklayer = 0;
    let interval   = setInterval(() => {
        if (!document.querySelector('.bricklayer')) clearInterval(interval);
        bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
        if (bricklayer.elements.length) clearInterval(interval);
    }, 50);
};
