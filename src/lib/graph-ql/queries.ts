const baseUrl = process.env.WP_URL || 'http://localhost:8000';
import { gql, GraphQLClient } from 'graphql-request';
//import type { Category } from './types';


const client = new GraphQLClient(`${baseUrl}/graphql`);