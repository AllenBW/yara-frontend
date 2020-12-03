import { GET_TEST, test } from '../../store/variables';
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Main } from '@redhat-cloud-services/frontend-components';
import { withRouter } from 'react-router-dom';

const Dashboard = () => {

    const stuff = gql`query MyQuery {hosts {edges {node {
    id
    inventoryId
    nodeId
    hostname
    account
      }
    }
  }
}`;
    const { data, loading, error } = useQuery(stuff);
    const { data: testData, loading: testLoading, error: testError } = useQuery(GET_TEST);

    useEffect(() => {
        console.error(data, loading, error, testData, testLoading, testError, test);
    }, [data, loading, error, testData, testLoading, testError]);

    return <Main>
    Dashboard
    </Main>;
};

export default withRouter(Dashboard);
