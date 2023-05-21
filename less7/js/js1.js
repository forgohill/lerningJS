/*

document.querySelector('.out-1').onclick = (event) => {
  event.stopPropagation();
  console.log('.out-1');
};

document.querySelector('.out-2').onclick = () => {
  console.log('.out-2');
};

document.querySelector('.out-3').onclick = () => {
  console.log('.out-3');
};

document.querySelector('.container').onclick = () => {
  console.log('.container');
};

*/

document
  .querySelector('.question').onclick = (event) => {
    event.stopPropagation();
    const dl = event.target;
    if (dl.nodeName !== 'DD' && dl.nodeName !== 'P') return;
    if (dl.getAttribute('data-q') === '1') {
      dl.classList.add('bg-primary')
    }
    else {
      dl.classList.add('bg-danger')
    }

    console.log(dl);
  }



// ЛОВИМ СОБЫТИЕ НА РОДИТЕЛЕ
document.querySelector('.overall').onclick = (event) => {
  event.stopPropagation();
  if (event.target.classList.contains('out-1')) {
    console.log(1);
  }

  if (event.target.classList.contains('out-2')) {
    console.log(2);
  }

  if (event.target.classList.contains('out-3')) {
    console.log(3);
  }

};