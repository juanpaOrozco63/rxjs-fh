import { from, fromEvent, interval } from "rxjs";
import { map, skip, takeUntil, tap } from "rxjs/operators";


const button = document.createElement('button')

button.innerHTML = 'Detener'

document.querySelector('body').append(button)


const counter$ = interval(1000)

// const clickBtn$ = fromEvent(button,'click')

const clickBtn$ = fromEvent(button,'click').pipe(
    tap(()=>console.log('Tap antes del skip')),
    skip(1),
    tap(()=>console.log('Tap desps del skip')),
)

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val=> console.log('next',val),
    complete: ()=> console.log('Complete')
})
