const inputEl = document.querySelector(".input");
const iconEl = document.querySelector(".icon_x");

const formEl = document.querySelector(".form");
const divEl = document.querySelector(".group_two");

// const btnEl = document.querySelector(".btn");
const btn_2El = document.querySelector(".btn_del");

const cardEl = document.createElement("div");
const pEl = document.createElement("p");
const buttonEl = document.createElement("button");
const button_2El = document.createElement("button");
const button_3El = document.createElement("button");
const button_4El = document.createElement("button");

cardEl.className = "card";
pEl.className = "text"
buttonEl.className = "Complete"
button_2El.className = "Edit"
button_3El.className = "data"
button_4El.className = "Delete"

iconEl.addEventListener("click", () => {
    inputEl.value = "";
});

btn_2El.addEventListener("click", () => {
    const agree = confirm("Are you sure to delete this?");
    if (agree) {
        cardEl.remove();
    }
});


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    divEl.innerHTML = inputEl.value;
    divEl.appendChild(cardEl);
});

