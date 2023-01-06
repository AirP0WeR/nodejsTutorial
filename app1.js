import EventEmitter from 'events';
const eventEmmiter = new EventEmitter();

eventEmmiter.on('tutorial', (num1, num2) => {
    console.log("Summ = ", num1 + num2);
});

eventEmmiter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(names) {
        super();
        this._name = names;
}

    get names() {
        return  this._name;
    }

}

let pedro = new Person('Pedro');
let cristina = new Person('Cristina');



pedro.on('name', () => {
    console.log('my name is ' + pedro.names);
    });



cristina.on('name', () => {
    console.log('my name is ' + cristina.names);
    });


cristina.emit('name');
pedro.emit('name');