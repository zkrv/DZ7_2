const cars = {
    model: 'sportCars',
    color: "gray",
    wheels: 4,

}
class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }



}



class BMW extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus

    }

}



const bmw = new BMW({
    model: 'sportCars',
    color: "black",
    wheels: 4,
    horsePower: 400,
    carStatus: 'машина заведена'
})



class Ferarri extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus
    }



}



const ferarri = new Ferarri({
    model: 'sportCars',
    color: "red",
    wheels: 4,
    horsePower: 600,
    carStatus: 'машина заведена'
})

class Lamborgini extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus

    }



}


const lamborgini = new Lamborgini({
    model: 'sportCars',
    color: "orange",
    wheels: 4,
    horsePower: 800,
    carStatus: 'машина заведена'
})

console.log(lamborgini)
console.log(bmw)
console.log(ferarri)







class Component{
    constructor(selector){
        this.element = document.querySelector(selector);
    }
    hide(){
        this.element.style.display = 'none';
    }
    show(){
        this.element.style.display = 'block';
    }
}
class Block extends Component{
    constructor(options) {
        super(options.selector);
        this.element.style.width = options.sizeWight + 'px';
        this.element.style.height = options.sizeHeight + 'px';
        this.element.style.background = options.bgc;
        this.element.style.borderRadius = options.br + '%';
        this.element.style.marginLeft = options.marginLeft + 'px';

    }
}
const trafficLight = new Block({
    selector: '#trafficLight',
    bgc:"gray",
    sizeWight:300,
    sizeHeight:600,
    br:20

})

const redBlock = new Block({
    selector: '#redBlock',
    sizeWight: 200,
    sizeHeight: 200,
    bgc: "black",
    br: 50,
    marginLeft:40
});
const yellowBlock = new Block({
    selector: '#yellowBlock',
    sizeWight: 200,
    sizeHeight: 200,
    bgc: "black",
    br: 50,
    marginLeft:40
})

const greenBlock = new Block({
    selector: '#greenBlock',
    size: 200,
    sizeWight: 200,
    sizeHeight: 200,
    bgc: "black",
    br: 50,
    marginLeft:40
})

const trColors = prompt("введите цвет светофора") .toLowerCase()
if (trColors === "красный"){
    document.getElementById("redBlock").style.backgroundColor = "red"
} else if (trColors === "желтый"){
    document.getElementById("yellowBlock").style.backgroundColor = "yellow"
}else if (trColors === "зеленый") {
    document.getElementById("greenBlock").style.backgroundColor = "green"
} else {
    alert("Перезагрузите страницу и введите цвет сфетофора : красный,желтый,зеленый")
}
