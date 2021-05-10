import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventsPage from './EventsPage';
import { AuthPage } from './AuthPage';

const routesArr = () => ([
        {
            path: '/',
            component: EventsPage,
            exact: true
        },
        {
            path: '/events',
            component: EventsPage,
            exact: false
        },
        {
            path: '/login',
            component: AuthPage,
            exact: false
        },
        {
            path: '/ab',
            component: () => <h1>AB</h1>,
            exact: false
        },
        {
            path: '/bc',
            component: () => <h1>BC</h1>,
            exact: false
        },
        {
            path: '*',
            component: () => <h1>Not Found</h1>,
            exact: false
        },
    ]);

export default () => {
    return (
        <Switch>
            {
                routesArr && routesArr().map( route => (
                    <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                ))
            }
        </Switch>
    )
}