const shoe = {
    brand: "adidas",
    laces: true,
    velcro: false,
    color: "purple",
    activity: ["running", "fashion", "walking"],
    material: ["leather", "suede"],
    wear(){console.log("Wear Shoe")},
    clean:  function(){console.log("Clean Shoe")},
    // either of the above two lines are fine and work the same
}

console.log(shoe.brand)
console.log(shoe.activity[0])
shoe.wear()
shoe.brand = "nike"