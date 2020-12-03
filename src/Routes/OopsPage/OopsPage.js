import { Main, Unavailable } from '@redhat-cloud-services/frontend-components';
import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';

const OopsPage = () => {
    useEffect(() => {
        insights?.chrome?.appAction?.('oops-page');
    }, []);
    return <Main>
        <Unavailable />
    </Main>;
};

export default withRouter(OopsPage);
