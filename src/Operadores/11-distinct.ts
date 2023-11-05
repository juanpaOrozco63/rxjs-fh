import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";



// distinct evalua que no se haya emitido el valor 
const numbers$ = of(1,'1',1,3,3,2,2,4,4,5,3,'1')

numbers$.pipe(
    distinct() // utiliza el valor ===  tiene que ser igual el valor y el type
).subscribe(console.log)


interface Pjs {
    name:string;
}

const pjs :Pjs[] = [
    {
        name:'Meganamn'
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
    distinct(p=> p.name)
).subscribe(console.log)