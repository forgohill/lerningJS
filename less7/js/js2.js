const obj1 = {
  user: 'Sara Connor',
  getUser: function () {
    return this.user;
  }
}


const obj2 = {
  user: 'Jhon Connor'
}

// console.log(obj1.getUser());

const f1 = obj1.getUser;
// console.log(f1());

const f2 = f1.bind(obj1);
const f3 = f1.bind(obj2);
// console.log(f2());
// console.log(f3());

// применение
const button = {
  type: 'button',
  text: 'кнопка',
  render: function () {
    const b = document.createElement(this.type);
    b.textContent = this.text;
    return b;
  }
}

// применение 1
const renderElement = button.render;
const renderP = renderElement.bind({ type: 'p', text: 'Гоняй гусей' });
document.querySelector('.div__insert').append(renderP());

// применение 2
function getWidth() {
  console.log(this.offsetWidth);
}

const getWidth2 = getWidth.bind(document.querySelector('.div__test-2'));
document.querySelector('.div__test-1').onclick = getWidth2;