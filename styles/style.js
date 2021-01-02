const btn = document.querySelector('#add');
const input = document.querySelector('#item');
const lists = document.querySelector('#items');
const output = document.querySelector('.top');
  let msg = document.createElement('p');
  output.appendChild(msg);

input.value = '';
input.focus();

btn.addEventListener('click', () => {
  input.focus();

  if(input.value === '') {
    msg.textContent = 'An item is needed';
  }else if(!isNaN(input.value)) {
    msg.textContent = 'Number can\'t be an item';
  }else if(lists.childElementCount === 5) {
    input.blur();
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    msg.textContent = 'You can only add 5 items';
  }else {
    msg.textContent = '';
    let list = document.createElement('li');
    list.textContent = input.value;
    lists.appendChild(list);
    let button = document.createElement('button');
    button.textContent = 'Delete';
    list.appendChild(button);

    input.value = '';

    button.addEventListener('click', () => {
      input.focus();
      list.remove();
      btn.style.cursor = 'pointer';
      msg.textContent = '';

      if(lists.childElementCount < 5) {
        btn.disabled = false;
      }
    });
  }
})
