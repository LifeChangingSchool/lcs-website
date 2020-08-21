/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppOct2020 = /* GraphQL */ `
  query GetAppOct2020($id: ID!) {
    getAppOct2020(id: $id) {
      id
      submitted1
      submitted2
      firstName
      lastName
      phoneNumber
      channel
      referralCode
      essay1
      essay2
      essay3
      essay4
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAppOct2020s = /* GraphQL */ `
  query ListAppOct2020s(
    $filter: ModelAppOct2020FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppOct2020s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        submitted1
        submitted2
        firstName
        lastName
        phoneNumber
        channel
        referralCode
        essay1
        essay2
        essay3
        essay4
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
