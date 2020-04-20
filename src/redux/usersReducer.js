const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        { id: 1, photoUrl:'https://cs.pikabu.ru/images/big_size_comm/2014-01_5/13904291032449.jpg', 
            followed: true, name: "SoulCold", status: "Boss of this gym", location: { city: 'Berlin', country: 'Deutschland' } },
        { id: 2, photoUrl:'https://cs.pikabu.ru/images/big_size_comm/2014-01_5/13904291032449.jpg', 
            followed: true, name: "settelleylol", status: "drum doc", location: { city: 'Helsinki', country: 'Finland' } },
        { id: 3, photoUrl:'https://cs.pikabu.ru/images/big_size_comm/2014-01_5/13904291032449.jpg', 
            followed: true, name: "ArmenDMen", status: "Hey buddy, nice code", location: { city: 'NY', country: 'USA' } },
        { id: 4, photoUrl:'https://cs.pikabu.ru/images/big_size_comm/2014-01_5/13904291032449.jpg', 
            followed: false, name: "Dimas228", status: "Put your status here", location: { city: 'Saratov', country: 'Russia' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;