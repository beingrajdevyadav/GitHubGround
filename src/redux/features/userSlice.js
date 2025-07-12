import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avatar_url : "",
    bio:"",
    followers : 0,
    following: 0,
    login: "",
    name: "",
    public_repos: 0,
    repos_url: "",
    html_url: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers:{
        setUser:(state, action)=>{
             const { avatar_url, bio, followers, following, login, name, repos_url, public_repos, html_url } = action.payload;

             state.avatar_url = avatar_url;
             state.bio = bio;
             state.followers = followers;
             state.following = following;
             state.login = login;
             state.name = name;
             state.public_repos = public_repos;
             state.repos_url = repos_url;
             state.html_url = html_url;
        },

        clearUser : (state)=>{
            Object.assign(state, initialState);
        }
    }
});


export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;