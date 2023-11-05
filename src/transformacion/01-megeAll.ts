import { Observable, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll } from "rxjs/operators";

const body = document.querySelector('body')
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput,orderList);


const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')

keyup$.pipe(
    debounceTime<KeyboardEvent>(500),
    map(({ target }) => (target as HTMLInputElement).value),
    map<string, Observable<any>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll(),
    map(x => x.items)
).subscribe(console.log);