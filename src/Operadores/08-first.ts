import { fromEvent } from 'rxjs';
import {first, map, take, tap} from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document,'click');



click$.pipe(
    tap<MouseEvent>( console.log),
    map(({clientX,clientY})=>({clientY,clientX})),
    first<{clientX:number,clientY:number}>(event=> event.clientY >= 150)
)
.subscribe({
    next: next => console.log('next',next),
    complete: ()=> console.log('Complete')
})