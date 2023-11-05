import { from,of} from 'rxjs';


/**
 *  of = toma argumentos y genera una secuencia de valores
 * from = crea un observable, en base a un arreglo, prmesa, iterable, observable
 */

const observer = {
    next: value => console.log('Next:', value),
    complete:() => console.log('Complete')
}

const generator = function*(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}
const myIterator = generator();

// for(let id of myIterator){
//     console.log(id);
    
// }
from(myIterator).subscribe(observer);
// const source$ = from([1,2,3,4,5,6])
// const source$ = of(...[1,2,3,4,5,6])
// const source$ = from('Juan')
// Peticion fetch con from
// const source$ = from( fetch('https://api.github.com/users/juanpaOrozco63'))
// source$.subscribe(async resp=>{
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })
// source$.subscribe(observer);