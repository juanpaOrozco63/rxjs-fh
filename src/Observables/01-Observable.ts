import {Observable, Observer} from 'rxjs'



// const obs$ = Observable.create();

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.error('error: ', error),
    complete: () => console.info('Complete: ')    
}

const obs$ = new Observable<string>( sub => {
    sub.next('Hola')
    sub.next('Mundo')

    sub.next('Hola')
    sub.next('Mundo')

    // Si el error sucede dsps del complete no lo emite
    // Forzar error
    // const a = undefined;
    // a.nombre = 'Juan';

    sub.complete();
    // Las emisiones desps del complete no se notifiacn al subscribe
    sub.next('Prueba despues del complete')
});
    obs$.subscribe(observer);
    
// obs$.subscribe( 
// {
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// }
// );

