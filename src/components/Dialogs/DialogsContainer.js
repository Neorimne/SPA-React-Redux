import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;