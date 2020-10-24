import {SignUpRequest} from './models/signup.model';
import api from './api.service';
import {User} from './models/user.model';
import {AxiosRequestConfig} from 'axios';

export function signUp(data: SignUpRequest): Promise<any> {
  return api.post('/users', data).then((res) => {
    return res.data;
  });
}

export function update(data: SignUpRequest): Promise<any> {
  return api.post('/users/updateuser', data).then((res) => {
    return res.data;
  });
}

export function uploadImageProfile(data: any): Promise<any> {
  return api.post('/users/profilepic', data).then((res) => {
    return res.data;
  });
}

export function getUserById(id: string): Promise<User> {
  console.log(id);
  const config = {
    params: {id},
  } as AxiosRequestConfig;
  return api.get('/users/userById', config).then((res) => {
    return res.data;
  });
}
export function followById(id: string): Promise<any> {
  return api.post(`/users/follow/${id}`).then((res) => {
    return res.data;
  });
}

export function getUsersByName(data: any){


  const config = {
    params: data,
  } as AxiosRequestConfig;

  console.log(config)
  return api.get('/users/searchusers', config).then((res) => {
    return res.data;
  });
}
