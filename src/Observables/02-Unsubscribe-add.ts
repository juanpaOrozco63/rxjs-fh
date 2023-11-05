import { Observable, Observer, Subscription } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.error('error: ', error),
    complete: () => console.info('Complete: ')    
}

const interv$ = new Observable<number>(subscriber=>{
    let count =  0 ;
    const interval = setInterval(()=>{
        count++;
        subscriber.next(count)
    },1000)

    setTimeout(() => {
        subscriber.complete()
    }, 2500);
    // Despues del complete siempre se ejecuta el return
    return () => {
        clearInterval(interval);
        console.log('Interval destroyed');
        
    }
})

const subscription1 = interv$.subscribe( observer);
const subscription2 = interv$.subscribe( observer);
const subscription3 = interv$.subscribe( observer);

const allSubscriptions = new Subscription()

allSubscriptions.add(subscription1)
allSubscriptions.add(subscription2)
allSubscriptions.add(subscription3)


setTimeout(() => {
    // Unsubscribe & Complete es diferente
    
    // subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    // Encadenar subscripciones
    allSubscriptions.unsubscribe();


    console.log('Completado timeout');
    
}, 3000);