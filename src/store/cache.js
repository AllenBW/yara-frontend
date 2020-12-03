import { InMemoryCache } from '@apollo/client';
import { test } from './variables';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                test: {
                    read() {
                        return test();
                    }
                }
            }
        }
    }
});
