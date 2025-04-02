// Exercise 1: Changing the text content
document.getElementById('changeText').addEventListener('click',()=>{
    document.getElementById('text').textContent = "The content has been changed using JS."
})


// Exercise 2: adding a class using js
document.querySelector("#highlightFirstCity").addEventListener('click',function(){
    document.getElementById('cities').firstElementChild.classList.add('highlight')
})

// Exercise 3: changing text of a paragraph
document.querySelector("#changeorder").addEventListener('click',()=>{
    document.getElementById("coffeType").textContent = "Espresso"
})

// Exercise 4: adding new elemnt into the DOM
document.querySelector("#addItem").addEventListener('click',()=>{
    let parent = document.getElementById("shoppingList")

    // creating new element
    let elem = document.createElement('li')
    elem.textContent = "Powder"

    // adding newly created element under parent
    parent.appendChild(elem)
})

// Exercise 5: Removing an element from the DOM
// document.querySelector("#removeLastTask").addEventListener('click',()=>{
//     let tasks = document.getElementById("tasks");
//     if (tasks.lastElementChild) {
//         tasks.removeChild(tasks.lastElementChild);
//     }
// })

// anither way of solving Exercise 5 by using a fucntion and calling it using html file
let removedChild = () =>{
    let tasks = document.getElementById("tasks");
    if (tasks.lastElementChild) {
        tasks.removeChild(tasks.lastElementChild);
    }
}