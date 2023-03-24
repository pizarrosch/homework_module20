// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLSpanElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeIcon = document.getElementsByClassName("close") as HTMLCollectionOf<Element>;
let j;
for (j = 0; j < closeIcon.length; j++) {
    closeIcon[j].addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLSpanElement;
        const div = target.parentElement as HTMLDivElement;
        div.style.display = "none";
    })
}

// Add a "checked" symbol when clicking on a list item
const list = document.getElementById('myUL') as HTMLUListElement;
    list.addEventListener('click', function (ev) {
        let target = ev.target as HTMLUListElement;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
    const unorderedList = document.getElementById("myUL") as HTMLUListElement;
    const li: HTMLLIElement = document.createElement("li");
    const input = document.getElementById("myInput") as HTMLInputElement;
    const inputValue:string = input.value;
    const t: Text = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        unorderedList.appendChild(li);
    }
    input.value = "";

    const span: HTMLSpanElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < closeIcon.length; i++) {
        closeIcon[i].addEventListener('click', function(this: HTMLSpanElement) {
            const div = this.parentElement as HTMLDivElement;
            div.style.display = "none";
        })
    }
}