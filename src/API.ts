/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateChatInput = {
  id?: string | null,
  title?: string | null,
  isGroup: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateChatInput = {
  id: string,
  title?: string | null,
  isGroup?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChatInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  text: string,
  createdAt?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  isGroup?: ModelBooleanFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null,
  text?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
};

export type CreateChatMutation = {
  createChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
};

export type UpdateChatMutation = {
  updateChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
};

export type DeleteChatMutation = {
  deleteChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateChatSubscription = {
  onCreateChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat:  {
    __typename: "Chat",
    id: string,
    title: string | null,
    isGroup: boolean,
    messages:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chat:  {
        __typename: "Chat",
        id: string,
        title: string | null,
        isGroup: boolean,
        createdAt: string | null,
        updatedAt: string | null,
      },
      createdAt: string | null,
    } >,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    text: string,
    chat:  {
      __typename: "Chat",
      id: string,
      title: string | null,
      isGroup: boolean,
      messages:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string | null,
      } >,
      createdAt: string | null,
      updatedAt: string | null,
    },
    createdAt: string | null,
  } | null,
};
