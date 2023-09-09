let inputb = document.querySelector('#text1');
let listi = document.querySelector('#list');

inputb.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputb) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputb}<i>`;
  
    listItem.addEventListener("click", function () {
        this.classList.toggle('done');

    })


    listItem.querySelector("i").addEventListener("click",
        function () {
        listItem.remove();
    })



    listi.appendChild(listItem);
}