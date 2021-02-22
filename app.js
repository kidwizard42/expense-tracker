const amount = document.querySelector("#number")
const date = document.querySelector("#date")
const name = document.querySelector("#name")
const table = document.querySelector("#table");
const form = document.querySelector("#submit");


const tableArray = [name, date, amount]

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createExpense()
  name.value = ""
  date.value = ""
  amount.value = ""
})

function createExpense() {
  const newTR = document.createElement("tr");
  table.append(newTR);
  for (let i = 0; i < 3; i++) {
    const newTD = document.createElement("td");
    newTD.innerText = tableArray[i].value;
    newTR.append(newTD);
  }
  const deleteB = document.createElement("button");
  deleteB.addEventListener("click", () => {
    newTR.remove()
  })
  deleteB.innerText = "Delete"
  newTR.append(deleteB)

}

// Made an object that I wanted to iterate over in place of tableArray. Only so I could have
// a dollar sign with the number. Maybe I can do that w an array but not sure.
// For objects You need to use  a "for in loop"  rather than a for of. no luck so I have left it be.

// const TableObject = {
// name: document.querySelector("#name"),
// date: document.querySelector("#date"),
// amount: document.querySelector("#number"),
//
// }
//
// for (let one in tableObject){
//   // console.log(this)  this refers to the window
//   console.log(one.value)
// }
