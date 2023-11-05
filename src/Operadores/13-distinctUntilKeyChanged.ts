import { from, of } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";



// DistinctUntilChanged valida que el anerior no sea el mismo
const numbers$ = of(1,'1',1,3,3,2,2,4,4,5,3,'1')

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
    distinctUntilKeyChanged('name')
).subscribe(console.log)