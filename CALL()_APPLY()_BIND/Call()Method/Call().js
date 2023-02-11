let p1 = {
    fname: "Manjunatha",
    age : 26
}

let p2 = {
    fname : "john",
    age : 25
}


function sayWelcome(greeting){
    console.log(greeting+"  " + this.fname + " " +this.age)
}

sayWelcome.call(p1, "Wellcome")
sayWelcome.call(p2, "Wellcome")
