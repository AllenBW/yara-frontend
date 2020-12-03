import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './Components/Loading/Loading';
import PropTypes from 'prop-types';

const Dashboard = lazy(() => import(/* webpackChunkName: "Yara Dashboard" */ './Routes/Dashboard/Dashboard'));
const Details = lazy(() => import(/* webpackChunkName: "Yara Details" */ './Routes/Details/Details'));
const Oops = lazy(() => import(/* webpackChunkName: "Oops" */ './Routes/OopsPage/OopsPage'));
const Noperms = lazy(() => import(/* webpackChunkName: "Noperms" */ './Routes/NoPermissionsPage/NoPermissionsPage'));

const paths = { dashboard: '/', details: '/details', oops: '/oops', noperms: '/nopermissions' };

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
    root.setAttribute('role', 'main');

    return (<Route {...rest} component={Component} />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = () => <Switch>
    <InsightsRoute key='dashboard' exact path={paths.dashboard} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}> <Dashboard /> </Suspense>} />
    <InsightsRoute key='details' exact path={paths.details} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}> <Details /> </Suspense>} />
    <InsightsRoute key='noperms' exact path={paths.noperms} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}> <Noperms /> </Suspense>} />
    <InsightsRoute key='oops' exact path={paths.oops} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}> <Oops /> </Suspense>} />
    <Redirect path='*' to={paths.oops} push />
</Switch>;
