const submit = document.querySelector('#submit');
const contents = document.querySelector('#contents');
const list = document.querySelector('.list');

let listItems = [];


submit.addEventListener('click', () => {
  const value = contents.value;
  listItems.push(value);
  
  if(contents.value != ''){
    addTask();
  }
  contents.value = '';
})

const addTask = () => {
  let wrapper = document.createElement('div');
  wrapper.classList.add('list-item');
  let li = document.createElement('li');
  li.classList.add('item-content')
  let deleteItem = document.createElement('div');
  deleteItem.classList.add('delete-item');
  deleteItem.innerText = "🗑";
  // let editItem = document.createElement('div');
  // editItem.classList.add('edit-item');
  listItems.forEach((item, i) => {
    wrapper.append(li, deleteItem, editItem)
    li.innerText = item;
    deleteItem.addEventListener('click', () =>{
        deleteItem.parentElement.remove();
        listItems.splice(1, i);
    })
  })
  list.appendChild(wrapper); 
}




