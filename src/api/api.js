import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c9701fa-238a-4d69-97c1-bcdbd68c1f8c"

    }
})


class Api {
    constructor(currentPage, pageSize) {
        this.currentPage = currentPage;
        this.pageSize = pageSize
    };
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
}


export default Api;