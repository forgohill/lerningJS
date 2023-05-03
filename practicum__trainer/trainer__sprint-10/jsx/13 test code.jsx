function Animal(props) {
  return (
    <div className="animal">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3 >{props.name}</h3>
        <span>Рост: {props.height}</span>
      </div>
    </div>
  )
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Animal icon="🦒" name="Жираф" height="4 метра" />
    <Animal icon="🦔" name="Ёж" height="15 сантиметров" />
    <Animal icon="🦨" name="Скунс" height="никто не мерял" />
  </>
), document.querySelector('#root'));
