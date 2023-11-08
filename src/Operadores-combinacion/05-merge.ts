import { fromEvent, merge } from "rxjs";
import { map } from 'rxjs/operators';




const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')
const click$ = fromEvent<MouseEvent>(document,'click')

merge(
    keyup$.pipe(map(resp=>resp.type)),
    click$.pipe(map(resp=>resp.type))
).subscribe(console.log)
