const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const ADD_LIKE = `ADD_LIKE`;

let initialState = {
    posts: [
        {id: 1, message: "TE AVEN BAXTALE", likesCount: 4},
        {id: 2, message: "TE AVEN BAXTALE", likesCount: 5}
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            //this._callSubscriber() См. комменты сверху
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            //this._callSubscriber() См. комменты сверху
            return state
        case ADD_LIKE:
            let id = action.id
            for (const item of state.posts) {
                if (item.id === id) {
                    item.likesCount++
                }
            }
            return state
        default:
            return state

    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeCreator = (id) => ({type: ADD_LIKE, id: id})

export default profileReducer