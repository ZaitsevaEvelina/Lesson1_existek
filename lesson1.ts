"use strict";
type Login = string

const myLogin: Login = 'user_1'

const userData: [string, number] = ['first user', 1]

interface User{
    id: number|string
    name: string
    second_name: string
    parametres?:{
        weight:number
        height: number
    }
    
}

enum country{
    UK = 'United Kingdom',
    PL = 'Poland',
    UA = 'Ukraine'
}

class IUser implements User{
    id: number|string
    name: string
    second_name: string
    constructor(userId:number, userName: string, userSecondName: string){
        this.id = userId;
        this.name = userName;
        this.second_name = userSecondName
    }
    getFullName():void{
        console.log( 'Your full name ' + this.name + this.second_name +'. You are live in ' +  country.UA)
    }
}

class UserAge extends IUser {
    private age: number = 27
}

interface User_param extends User{
    optimal: () => void
}

const user1: User_param = {
    id: userData[1],
    name: 'John',
    second_name: 'Black',
    parametres:{
        weight: 75,
        height: 1.8
    },
    optimal(): void{
       
        const y:number = this.parametres!.weight - this.parametres!.height * this.parametres!.height
        const indicator: number = 25
            if(y <= indicator){
                console.log( 'Your weight is normal')
            }else{
                console.log( 'Your weight is not normal')
            }
        }
}

user1.optimal();
