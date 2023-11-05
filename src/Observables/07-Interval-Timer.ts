import { interval, timer} from 'rxjs'

const observer = {
    next: value => console.log('next: ',value),
    complete: () => console.info('Complete: ')    
}
const todayIn5 = new Date(); 
todayIn5.setSeconds(todayIn5.getSeconds()+5);
// El interv es async por lo tanto primero se ejecuta el codigo y luego si la sub
const interv$ = interval(1000);
// timer basico
// const timer$ = timer(2000);
// timer inicia la secuecnua desps de haber pasado 2 segungods
// const timer$ = timer(2000,1000);
const timer$ = timer(todayIn5);
console.log('Inicio');
timer$.subscribe(observer)
// interv$.subscribe(observer)
console.log('Fin');