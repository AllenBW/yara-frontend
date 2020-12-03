import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { routes } from '../../profiles/local-frontend-and-api';

const uri = `${routes['/api/yara'].host}/graphql`;

const client = props => new ApolloClient({ cache, uri, ...props });

export { client };
