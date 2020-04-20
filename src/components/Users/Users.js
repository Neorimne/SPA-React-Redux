import React from 'react';
import Axios from 'axios';

class Users extends React.Component {
    
    constructor(props){
        super(props);
        Axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    console.log('it works')
                    this.props.setUsers(response.data.items);
            })
    }    
    render() {
        return (
         <div>
        {
            this.props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src="https://manchestertriathlonclub.org.uk/wp-content/uploads/2016/09/8016-200-copy.png" 
                            width="120px" alt="img"/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
        </div>)
    }
}

export default Users;