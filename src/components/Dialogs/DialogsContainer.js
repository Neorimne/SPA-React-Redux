import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage} messagesPage={state} />
    )
}

export default DialogsContainer;