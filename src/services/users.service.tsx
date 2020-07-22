import { SignUpRequest } from "./models/signup.model";
import api from "./api.service";


export function signUp(data: SignUpRequest): Promise<any> {
    return api.post('/users', data).then((res) => {
        console.log(res.data);
        return res.data;
    })
}

export function update(data: SignUpRequest): Promise<any> {
    return api.post('/users/updateuser', data).then((res) => {
        console.log(res.data);
        return res.data;
    })
}