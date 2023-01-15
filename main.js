let onlyQuestion1 = document.querySelector(".onlyQuestion1")
let onlyQuestion2 = document.querySelector(".onlyQuestion2")
let onlyQuestion3 = document.querySelector(".onlyQuestion3")
let onlyQuestion4 = document.querySelector(".onlyQuestion4")

let questionOneBox = document.querySelector(".questionOneBox")
let questionTwoBox = document.querySelector(".questionTwoBox")
let question3Box = document.querySelector(".question3Box")
let question4Box = document.querySelector(".question4Box")

onlyQuestion1.addEventListener("click", function(){
    onlyQuestion1.style.display="none"
    questionOneBox.style.display="block"
})
questionOneBox.addEventListener("click", function(){
    onlyQuestion1.style.display="flex"
    questionOneBox.style.display="none"
})


onlyQuestion2.addEventListener("click", function(){
    onlyQuestion2.style.display="none"
    questionTwoBox.style.display="block"
})

questionTwoBox.addEventListener("click", function(){
    onlyQuestion2.style.display="flex"
    questionTwoBox.style.display="none"
})


onlyQuestion3.addEventListener("click", function(){
    onlyQuestion3.style.display="none"
    question3Box.style.display="block"
})
question3Box.addEventListener("click", function(){
    onlyQuestion3.style.display="flex"
    question3Box.style.display="none"
})


onlyQuestion4.addEventListener("click", function(){
    onlyQuestion4.style.display="none"
    question4Box.style.display="block"
})
question4Box.addEventListener("click", function(){
    onlyQuestion4.style.display="flex"
    question4Box.style.display="none"
})



 
  