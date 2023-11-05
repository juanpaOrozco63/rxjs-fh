import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.error('error: ', error),
    complete: () => console.info('Complete: ')    
}

const interv$ = new Observable<number>(subscriber=>{
   const intervalId  = setInterval(
    ()=> subscriber.next(Math.random() ),1000)

   return () => {
    clearInterval(intervalId);
    console.log('Interval destroyed');
    
}

})
// const subs1 = interv$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = interv$.subscribe(rnd => console.log('subs2', rnd))

//  Subject es un tipo especial de observable
/**
 * 1- Casteo multiple; Devuelve el mismo valor en las subscripciones que tenga
 * 2- también es un observer
 * 3- Next, Error, Complete
 */
const subject$ = new Subject();

const subscription = interv$.subscribe(subject$)

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(10)
    subject$.complete();
    subscription.unsubscribe();
}, 3500);