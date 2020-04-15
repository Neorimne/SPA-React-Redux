import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';

   
const Dialogs = (props) => {
    
    let state = props.messagesPage;

    let dialogElements = state.dialogData
        .map((el) => <DialogItem name={el.name} id={el.id} />);

    let messageElements = state.messageData
        .map((el) => <Message message={el.message} id={el.id} />);
    
    let newMessageBody = state.newMessageBody;    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (event) => {
        let messageBody = event.target.value;
        props.updateNewMessageBody(messageBody);
        //props.store.dispatch(updateNewMessageBodyCreator(messageBody));
    }

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
               <div>{messageElements}</div>
               <div>
                   <div><textarea value={newMessageBody} 
                                  placeholder="Enter your message" 
                                  onChange={onMessageChange}>
                        </textarea>
                    </div>
                   <div><button onClick={onSendMessageClick}>Send</button></div>
               </div> 
            </div>
        </div>
    )
}

export default Dialogs; 