import './App.scss';

import { NotificationsPortal, notifications } from '@redhat-cloud-services/frontend-components-notifications/';
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/files/Registry';
import { withRouter } from 'react-router-dom';

const registry = getRegistry();
registry.register({ notifications });
const App = (props) => {

    useEffect(() => {
        insights.chrome.init();
        // nothing to identify, YET
        //insights.chrome.identifyApp('yara');
        insights.chrome.hideGlobalFilter?.();
    }, []);

    return <Provider store={registry.getStore()}>
        <NotificationsPortal />
        <Routes childProps={props} />
    </Provider>;
};

export default withRouter(App);
