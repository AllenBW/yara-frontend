import { gql, makeVar } from '@apollo/client';

export const test = makeVar(false);

export const GET_TEST = gql`query getTest{test @client}`;
