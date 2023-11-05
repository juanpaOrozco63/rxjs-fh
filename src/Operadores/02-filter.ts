import { from, fromEvent, range} from 'rxjs';
import { filter, map} from 'rxjs/operators';



// range(1,10).pipe(
//     filter(x=> x % 2 === 0)
// ).subscribe( console.log)

range(1,10).pipe(
    filter((x, i)=> {
        console.log('index',i)
        return x % 2 === 0
    })
)
// .subscribe( console.log)
interface Pjs {
    type:string;
    name:string;
}
const pjs:Pjs[] = [
    {
        type:'hero',
        name:'Batman'
    },
    {
        type:'hero',
        name:'Robin'
    },
    {
        type:'villain',
        name:'Joker'
    }
]
from(pjs).pipe(
    filter((x)=> x.type === 'hero')
).subscribe( console.log)
 
const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event=> event.code),
    filter(key=> key === 'Enter')
)
keyUp$.subscribe(console.log)
