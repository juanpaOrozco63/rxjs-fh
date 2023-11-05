import { of } from 'rxjs'
import {AjaxError, ajax} from 'rxjs/ajax'
import { catchError } from 'rxjs/operators'
const url = 'https://httpbin.org/delay/1'



const manageError = (resp:AjaxError)=>{
    console.warn ('error', resp.message);
    return of({
        ok:false,
        usuarios:[]
    })
}
// const obs$ = ajax.getJSON(url).pipe(catchError(manageError))
// const obs2$ = ajax(url).pipe(catchError(manageError))

const obs$ = ajax.getJSON(url)

// obs$.subscribe(data => console.log('getJSON',data))
// obs2$.subscribe(data => console.log('ajax',data))

obs$.subscribe({
    next: val => console.log('next',val),
    
})