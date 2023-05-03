function handleClick() {
  console.log('Не дави на меня!');
}

function handleMouseEnter() {
  console.log('Ты мне солнце заслонил!');
}

function handleMouseLeave() {
  console.log('Ну ты чего, нормально же общались!');
}

ReactDOM.render((
  <button
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    Поиграй со мной!
  </button>
), document.querySelector('#root'));