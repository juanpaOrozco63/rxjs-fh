import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from 'rxjs/operators';
// Para tipar el map  recibe 2 parametros el que entra y lo que sale
range(1,5)
// .pipe(
//     map<number,number>(x=>x*5)
// )
// .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup')

const keyupCode$ = keyUp$.pipe(
    map(event => event.code)
)

const keyUpPluck$ = keyUp$.pipe(
    map(x => x.key)
);

const keyMapTo$ = keyUp$.pipe(
    map(x=>'key pressed')
);

keyupCode$.subscribe(code => console.log('map',code))
keyUpPluck$.subscribe(code => console.log('pluck',code))
keyMapTo$.subscribe(code => console.log('mapTO',code))
