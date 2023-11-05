import { of, Observable } from 'rxjs';


// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6]);
// const obs$ = of([1,2], {a:1,b:2}, function(){}, true, Promise.resolve(true));
const obs$:Observable<number> = of(...[1,2,3,4,5,6],1,2,3,4,5,6);


console.log('Inicio del Obs$');

obs$.subscribe({
    next:(value)=>console.log("next: ", value),
    error:(error)=> console.error("error: ",error),
    complete: ()=> console.info("COMPLETED")
});
console.log('Fin del Obs$');
