import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c9701fa-238a-4d69-97c1-bcdbd68c1f8c"

    }
})


class Api {

    static getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => {
            return res.data
        })
    }

    static Unfollow(id){
        return instance.delete(`/follow/${id}`).then((res)=>{return res})
    }
    static Follow(id){
        return instance.post(`/follow/${id}`).then((res)=>{return res})
    }
    
    static GetProfile(id){
        return instance.get(`profile/${id}`).then(res=>res)
    }
    static GetStatus(id){
        return instance.get(`/profile/status/`+id)
    }
    static UpdateStatus(status){
        return instance.put(`/profile/status`,{status:status})
    }

    static Login(email,password,rememberMe=false){
        return instance.post(`/auth/login`,{email,password,rememberMe})
    }
    
    static  IfLogin(){
        return instance.get(`auth/me`).then((res)=>{return res})
    }//if already login,return res.data.data, then сетаем их в стор

    static LogOut(){
        return instance.delete(`/auth/login`)
    }

}


export default Api;