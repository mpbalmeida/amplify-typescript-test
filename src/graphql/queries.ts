// tslint:disable
// this is an auto generated file. This will be overwritten

export const getChat = `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    title
    isGroup
    messages {
      id
      text
      chat {
        id
        title
        isGroup
        createdAt
        updatedAt
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;
export const listChats = `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      isGroup
      messages {
        id
        text
        createdAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    text
    chat {
      id
      title
      isGroup
      messages {
        id
        text
        createdAt
      }
      createdAt
      updatedAt
    }
    createdAt
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      chat {
        id
        title
        isGroup
        createdAt
        updatedAt
      }
      createdAt
    }
    nextToken
  }
}
`;
