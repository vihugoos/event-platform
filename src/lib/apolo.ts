import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pw55wn2rwa01z48j0hcr7e/master',
    cache: new InMemoryCache()
})
