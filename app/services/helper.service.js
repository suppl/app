import * as React from "react";

export const SetUrl = (url) => {
    console.log('SetUrl', url);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const getWidth = () => (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

export const IsDesktop = () => getWidth() > 900;

export const IsMobile = () => getWidth() < 600;

export const IsTablet = () => !IsMobile() && !IsDesktop();

export const If = React.createClass({
    displayName: 'If',

    render: function()
    {
        if (this.props.condition)
            return (this.props.children);
        return null;
    }
});
