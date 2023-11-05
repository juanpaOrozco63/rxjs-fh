import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";



// DistinctUntilChanged valida que el anerior no sea el mismo
const numbers$ = of(1,'1',1,3,3,2,2,4,4,5,3,'1')

numbers$.pipe(
    distinctUntilChanged() // utiliza el valor ===  tiene que ser igual el valor y el type
).subscribe(console.log)


interface Pjs {
    name:string;
}

const pjs :Pjs[] = [
    {
        name:'Meganamn'
    },
    {
        name:'Meganamn'
    },
    {
        name:'X'
    },
    {
        name:'X'
    },
    {
        name:'Zero'
    },
    {
        name:'Superman'
    },
    {
        name:'Zero'
    }
]

from(pjs).pipe(
    distinctUntilChanged((ant,act)=>ant.name === act.name)
).subscribe(console.log)