export interface User {
    username:string,
    name:string,
    password:string,
    latitud:number,
    longitud:number
}

export interface UserQuerie {
    username:string,
    latitud:string,
    longitud:string
}

export interface User_Login {
    username:string,
    password:string
}