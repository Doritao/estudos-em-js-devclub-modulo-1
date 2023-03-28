const student = {
    name: "Caio",
    age: 25,
    genre: "male"
}

for(let propiedade in student) {
    console.log(student[propiedade])
}


for(let propiedade in student) {
    console.log(`${propiedade} : ${student[propiedade]}`)
}