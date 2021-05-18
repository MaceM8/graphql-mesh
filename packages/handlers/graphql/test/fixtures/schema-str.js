module.exports = /* GraphQL */ `
  type Query {
    certificates: [Certificate!]!
  }

  type Certificate {
    id: ID!
    name: String!
  }
`;
