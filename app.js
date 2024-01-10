const submit = document.querySelector('#submit');
const contents = document.querySelector('#contents');
const list = document.querySelector('.list');

let listItems = [];


submit.addEventListener('click', () => {
  const value = contents.value;
  listItems.push(value);
  contents.value = '';
  addTask();
})

const addTask = () => {
  let li = document.createElement('li');
  listItems.forEach((item, i) => {
    li.innerText = item;
  })
  list.appendChild(li); 
}




