const UDTATE_NEW_MESSAGE_BODY = 'UDTATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogData: [
        { id: 1, name: "settelleylol" },
        { id: 2, name: "ArmenDMen" },
        { id: 3, name: "SoulCold" }
    ],
    messageData: [
        { id: 1, message: "Hey" },
        { id: 2, message: "wazzup" },
        { id: 3, message: "I gotta React" }
    ],
    newMessageBody: 'test'
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UDTATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageBody
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, { id: 7, message: body }]
            }
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (messageBody) => {
    return {
        type: UDTATE_NEW_MESSAGE_BODY,
        messageBody: messageBody
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export default messagesReducer;