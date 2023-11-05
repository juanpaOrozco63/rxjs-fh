import {asyncScheduler} from 'rxjs'


setTimeout(() => {
    
}, 3000);

setInterval(()=>{

},3000)

const hello =name=>console.log(`Hello ${name}`);
const hello2 =()=>console.log(`Hello`);

// asyncScheduler.schedule(hello,2000,'Juan')

// El state solo se le puede mandar un parametro
const subs = asyncScheduler.schedule(function(state){
    console.log('State', state);
    this.schedule(state+1,1000)
} , 2000, 0)

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(()=>subs.unsubscribe(),6000)