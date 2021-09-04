import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};


export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet?: Maybe<Tweet>;
  createManyTweet?: Maybe<Array<Maybe<Tweet>>>;
  updateTweet?: Maybe<Tweet>;
  removeTweet?: Maybe<Tweet>;
};


export type MutationCreateTweetArgs = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  like: Scalars['Int'];
  retweet: Scalars['Int'];
  userInfo: Scalars['JSON'];
};


export type MutationCreateManyTweetArgs = {
  data?: Maybe<Array<Maybe<TweetInput>>>;
};


export type MutationUpdateTweetArgs = {
  tweetId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  tweetBody?: Maybe<Scalars['String']>;
  retweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  retweet?: Maybe<Scalars['Int']>;
  userInfo?: Maybe<Scalars['JSON']>;
};


export type MutationRemoveTweetArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Tweet?: Maybe<Tweet>;
  allTweets?: Maybe<Array<Maybe<Tweet>>>;
  _allTweetsMeta?: Maybe<ListMetadata>;
};


export type QueryTweetArgs = {
  id: Scalars['ID'];
};


export type QueryAllTweetsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<TweetFilter>;
};


export type Query_AllTweetsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<TweetFilter>;
};

export type Tweet = {
  __typename?: 'Tweet';
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  like: Scalars['Int'];
  retweet: Scalars['Int'];
  userInfo: Scalars['JSON'];
};

export type TweetFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tweetId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  tweetBody?: Maybe<Scalars['String']>;
  retweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  retweet?: Maybe<Scalars['Int']>;
  userInfo?: Maybe<Scalars['JSON']>;
  tweetId_neq?: Maybe<Scalars['String']>;
  userId_neq?: Maybe<Scalars['String']>;
  tweetBody_neq?: Maybe<Scalars['String']>;
  retweetId_neq?: Maybe<Scalars['String']>;
  createdAt_neq?: Maybe<Scalars['String']>;
  like_lt?: Maybe<Scalars['Int']>;
  like_lte?: Maybe<Scalars['Int']>;
  like_gt?: Maybe<Scalars['Int']>;
  like_gte?: Maybe<Scalars['Int']>;
  like_neq?: Maybe<Scalars['Int']>;
  retweet_lt?: Maybe<Scalars['Int']>;
  retweet_lte?: Maybe<Scalars['Int']>;
  retweet_gt?: Maybe<Scalars['Int']>;
  retweet_gte?: Maybe<Scalars['Int']>;
  retweet_neq?: Maybe<Scalars['Int']>;
  userInfo_neq?: Maybe<Scalars['JSON']>;
};

export type TweetInput = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  like: Scalars['Int'];
  retweet: Scalars['Int'];
  userInfo: Scalars['JSON'];
};

export type AllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTweetsQuery = { __typename?: 'Query', allTweets?: Maybe<Array<Maybe<{ __typename?: 'Tweet', userId: string, tweetId: string, tweetBody: string, retweetId?: Maybe<string>, createdAt: string, userInfo: any }>>> };


export const AllTweetsDocument = gql`
    query AllTweets {
  allTweets {
    userId
    tweetId
    tweetBody
    retweetId
    createdAt
    userInfo
  }
}
    `;

/**
 * __useAllTweetsQuery__
 *
 * To run a query within a React component, call `useAllTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTweetsQuery(baseOptions?: Apollo.QueryHookOptions<AllTweetsQuery, AllTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTweetsQuery, AllTweetsQueryVariables>(AllTweetsDocument, options);
      }
export function useAllTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTweetsQuery, AllTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTweetsQuery, AllTweetsQueryVariables>(AllTweetsDocument, options);
        }
export type AllTweetsQueryHookResult = ReturnType<typeof useAllTweetsQuery>;
export type AllTweetsLazyQueryHookResult = ReturnType<typeof useAllTweetsLazyQuery>;
export type AllTweetsQueryResult = Apollo.QueryResult<AllTweetsQuery, AllTweetsQueryVariables>;