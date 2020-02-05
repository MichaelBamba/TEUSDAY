
let elementList = document.querySelectorAll("span")
let replacers = document.querySelectorAll("input")
// let tempArray = ["", "", ""]
const button = document.querySelector("button")
button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked')
   


//  replacers.forEach(function (input, index) {
//     replacers.innerHTML = tempArray[index];
// })
elementList.forEach(function (span, index) {
    // console.log(elementList)
        span.innerHTML= replacers[index].value;
})
})
// const button = document.getElementById("clickMe");
// const name1 = document.getElementById("name1");
// const verb1 = document.getElementById("verb1");
// const noun1 = document.getElementById("noun1");
// const noun = document.getElementById("noun");
// const verb = document.getElementById("verb");
// const name = document.getElementById("name");

// button.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('clicked')
//     noun1.innerHTML = ` ${noun.value}`;
//     name1.innerHTML = ` ${name.value}`;
//     verb1.innerHTML = ` ${verb.value}`;
// });

