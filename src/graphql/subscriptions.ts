// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateChat = `subscription OnCreateChat {
  onCreateChat {
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
export const onUpdateChat = `subscription OnUpdateChat {
  onUpdateChat {
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
export const onDeleteChat = `subscription OnDeleteChat {
  onDeleteChat {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
