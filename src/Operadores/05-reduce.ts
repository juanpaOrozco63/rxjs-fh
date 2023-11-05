import { interval } from 'rxjs';
import {reduce, take, tap} from 'rxjs/operators'




const numbers = [1,2,3,4,5]

const totalReducer = (acumulador:number, currentValue:number) => {
    
    return acumulador + currentValue;
}

const total = numbers.reduce(totalReducer,0)
console.log('totalArr', total);
//  el reduce emite cuando se completa todo el observable

interval(1000).
pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer,5)
).
subscribe({
    next: val => console.log('next:',val),
    complete:() => console.log('Complete')
})


