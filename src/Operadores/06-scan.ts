import { from } from 'rxjs';
import {map, reduce, scan} from 'rxjs/operators'


const numbers = [1,2,3,4,5]

const totalAcc = (acc:number, cur:number) =>  acc + cur;
    
// reduce

from(numbers).pipe(
    reduce(totalAcc,0)
).subscribe (
    console.log
)

// scan

from(numbers).pipe(
    scan(totalAcc,0)
).subscribe (
    console.log
)

// redux

interface  User  {
    id? : string;
    auth?:boolean;
    token?:string;
    age?:number;
}

const user: User[] = [
    {id:'jp',auth:true,token:null},
    {id:'jp',auth:true,token:'ABC'},
    {id:'jp',auth:true,token:'ABC123'}
]

const state$ = from(user).pipe(
    scan<User,User>((acc,cur)=>{
        return {...acc,...cur}
    },{age:33})
)

const id$ = state$.pipe(
    map(state => state.id)
)
id$.subscribe(console.log)