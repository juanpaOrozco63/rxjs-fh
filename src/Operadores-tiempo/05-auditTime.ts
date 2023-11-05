import { fromEvent, interval } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document,'click');


click$.pipe(
    map(({x})=>x),
    tap(val=>console.log(val,'tap')),
    auditTime(1000)
)
.subscribe(console.log)