import {asyncScheduler, observeOn, of,range} from 'rxjs';


// const src$ = of(1,2,3,4,5)
// asyncScheduler es para volver asyncrono 
const src$ = range(1,5).pipe(observeOn(asyncScheduler))

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');

