import { IRegister } from '../models/init';

export const getListOfRegisteredUsers = () => {
    var result: IRegister[] = [];

    var users = localStorage.getItem("users");

    if (users) {
      result = JSON.parse(users);
    }
    return result;
}

export const addRegisteredUser = (newUser: IRegister) => {
    var users = getListOfRegisteredUsers();
    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users));
}

export const updateRegisteredUser = (newUser: IRegister, index: number) => {
  var users = getListOfRegisteredUsers();

  if(users.length-1 >= index){
    users[index] = newUser;
    localStorage.setItem("users", JSON.stringify(users))
  }
  else {
    console.error('error in length/index properties')
  }
}

export const getUserByIndex = (index: number): IRegister => {
 var users = getListOfRegisteredUsers();
 return users[index];
}

export const isIndexValid = (index: string): boolean => {
  var parsedIndex = parseInt(index);
  var users = getListOfRegisteredUsers();

  if(isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex > users.length-1){
      return false;
  }

  return true;
}