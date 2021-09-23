const Observable = require('rxjs');
const myObservable = Observable.timer(30, 1000);

const mysecondObservable = Observable.from(['ali', 'salah', 'ghassen']);
const thirdobservable = Observable.merge(myObservable, mysecondObservable)
    .subscribe({
        next: (data) => { console.log(data) },
        error: (error) => { console.error('error') },
        complete: () => { console.log('completed') }
    })
thirdobservable.unsubscribe();