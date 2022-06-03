import { gql } from '@apollo/client';

export const QUERY_USER = gql`
{
    user {
        username
        _id
        email
        password
    }
}`