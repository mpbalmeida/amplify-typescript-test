// tslint:disable
// this is an auto generated file. This will be overwritten

export const createChat = `mutation CreateChat($input: CreateChatInput!) {
  createChat(input: $input) {
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
export const updateChat = `mutation UpdateChat($input: UpdateChatInput!) {
  updateChat(input: $input) {
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
export const deleteChat = `mutation DeleteChat($input: DeleteChatInput!) {
  deleteChat(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
