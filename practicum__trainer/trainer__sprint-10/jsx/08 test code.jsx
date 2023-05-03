const list = [{
  name: 'Хлеб',
  quantity: '1 батон',
}, {
  name: 'Ром',
  quantity: '3 бутылки',
}, {
  name: 'Кока-кола',
  quantity: '3 бутылки',
}, {
  name: 'Туалетная бумага',
  quantity: 'Вся, что есть',
}];


ReactDOM.render(
  (<ul>
    {list.map((item, i) => (
      < li key={i} >
        <b>{item.name}</b>
        <i>{item.quantity}</i>
      </li>
    ))}
  </ul >
  ), document.querySelector('#root'));


ReactDOM.render((
  <div>
    <h2>Сообщения</h2>

    {comments.map((message, i) => (
      // Важный атрибут: key
      <div key={message.id}>
        <h3>{message.author}</h3>
        <div>{message.text}</div>
      </div>
    ))}
  </div>
), document.querySelector('#root'));
