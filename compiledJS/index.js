"use strict";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeIcon = document.getElementsByClassName("close");
let j;
for (j = 0; j < closeIcon.length; j++) {
    closeIcon[j].addEventListener('click', (e) => {
        const target = e.currentTarget;
        const div = target.parentElement;
        div.style.display = "none";
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.getElementById('myUL');
list.addEventListener('click', function (ev) {
    let target = ev.target;
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
    }
}, false);
// Create a new list item when clicking on the "Add" button
const input = document.getElementById("myInput");
function newElement() {
    const unorderedList = document.getElementById("myUL");
    const li = document.createElement("li");
    const inputValue = input.value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        unorderedList.appendChild(li);
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}
const addButton = document.querySelector('.addBtn');
addButton.addEventListener('click', () => {
    newElement();
});
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        newElement();
    }
});
