const btn = document.querySelector('#add');
const input = document.querySelector('#item');
const lists = document.querySelector('#items');
const msg1 = document.querySelector('#message1');
const msg2 = document.querySelector('#message2');
const msg3 = document.querySelector('#message3');

input.value = '';

btn.addEventListener('click', () => {

  if(input.value === '') {
    msg1.style.display = 'block';
    msg2.style.display = 'none';
    msg3.style.display = 'none';
    input.focus();
  }else if(!isNaN(input.value)) {
    msg1.style.display = 'none';
    msg2.style.display = 'block';
    msg3.style.display = 'none';
    input.focus();
  }else if(lists.childElementCount === 5) {
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.style.display = 'block';
    input.focus();
  }else {
    let list = document.createElement('li');
    list.textContent = input.value;
    lists.appendChild(list);
    let button = document.createElement('button');
    button.textContent = 'Delete';
    list.appendChild(button);

    input.value = '';
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.style.display = 'none';

    button.addEventListener('click', () => {
      list.remove();
      btn.style.cursor = 'pointer';
      msg1.style.display = 'none';
      msg2.style.display = 'none';
      msg3.style.display = 'none';

      if(lists.childElementCount < 5) {
        btn.disabled = false;
      }
      input.focus();
    });
    input.focus();
  }
})
input.focus();


