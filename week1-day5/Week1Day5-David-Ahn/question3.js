//////ES6///////

class Vehicle{
    constructor(engine,speed){
        this.engine=engine;
        this.speed=speed;
    }

    info(){
        console.log(`engine:${engine} and speed:${speed}`)
    }
}

class Car extends Vehicle{
    constructor(engine,speed,wheels,brake){
      super(engine,speed);
      this.wheels=wheels;
      this.brake=brake;
    }
    honk(){
        console.log('Honk!')
    }
    static isTesla(car){
        if(brake===true){
            return true
        }else{
            return false
        }
    }
}

//ES5

const Vehicle=function(engine,speed){
    this.engine=engine;
    this.speed=speed;
}

Vehicle.prototype.info=function(){
    console.log(`engine:${engine} and speed:${speed}`)
}

const Car=function(engine,speed,wheels,brake){
    Vehicle.call(this,engine,speed);
    this.wheels=wheels;
    this.brake=brake
}

Car.prototype.honk=function(){
    console.log('Honk!')
}

Car.isTesla=function(car){
    if(brake===true){
        return true
    }else{
        return false
    }
}