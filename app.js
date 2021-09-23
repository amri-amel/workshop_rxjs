const Observable = require('rxjs');
const myObservable = Observable.timer(30, 1000);
//observabe 1
myObservable.pipe(
        Observable.map(data => data * 10),
        Observable.filter(data => (data % 3) === 0))
    .subscribe({
        next: (data) => { console.log(data) },
        error: (error) => { console.error(error) },
        complete: () => { console.log('completed') }
    })
    /*observable 2
myObservable.subscribe({
    next: (data) => { console.log("from second observer", data) },
    error: (error) => { console.error(error) },
    complete: () => { console.log('completed') }
})
*/

const mysecondObservable = Observable.from(['ali', 'salah', 'ghassen']);
mysecondObservable.subscribe({
    next: (data) => { console.log(data) },
    error: (error) => { console.error('error') },
    complete: () => { console.log('completed') }
})