import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { routes } from '../../profiles/local-frontend-and-api';

const env = process.env.NODE_ENV;
const uri = `${env === 'development' ? routes['/api/malware'].host : ''}/api/malware-detection/v1/graphql`;

const client = props => new ApolloClient({ cache, uri, ...props });

export { client };
