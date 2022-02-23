import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
saveUsers(user){

  let users=[];
  if(localStorage.getItem('users')){
    console.log('local');
    users.push(user);
    users = JSON.parse(localStorage.getItem('users')) as [];
    console.log(users);
    //users.push(user);
    users = [user, ...users];
  }
  else{
    users = [user];
  }
  localStorage.setItem('users', JSON.stringify(users));

}
}
