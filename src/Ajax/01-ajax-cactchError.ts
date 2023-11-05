
import { of } from 'rxjs'
import {AjaxError, ajax} from 'rxjs/ajax'
import { catchError, map} from 'rxjs/operators'

const url = 'https://api.github.com/userxs?per_page=5'

const manageError = (response:Response)=> {
    if(!response.ok){
        throw new Error (response.statusText)
    }
    return response
} 

const catchErrorLocal = (err:AjaxError) => {
    console.warn(err, 'error')
    return of({})
}
const fetchPromise = fetch(url);

// fetchPromise
// .then(resp => resp.json())
// .then(data => console.log('data:',data))
// .catch(err => console.log('error:',err))



// fetchPromise
// .then(manageError)
// .then(resp => resp.json())
// .then(data => console.log('data:',data))
// .catch(err => console.warn('error:',err))

ajax(url).pipe(
    map(resp => resp.response),
    catchError(catchErrorLocal)
).subscribe(console.log)