import {  fromEvent } from 'rxjs';

import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators'

const click$ = fromEvent(document,'click')


// click$.pipe(
//     debounceTime(3000)
// ).subscribe(console.log)


const input = document.createElement('input')

document.querySelector('body').append(input)


const input$ = fromEvent<KeyboardEvent>(input,'keyup')

input$.pipe(
    debounceTime(1000),
    map(({target})=>(target as HTMLInputElement).value),
    distinctUntilChanged()
).subscribe(console.log)