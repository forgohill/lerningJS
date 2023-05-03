const comments = [{
  id: 1,
  author: 'Лиза',
  text: 'Все уже сдали деньги на субботник?',
}, {
  id: 2,
  author: 'Джеймс',
  text: 'Никто не видел мой сэндвич?',
}, {
  id: 3,
  author: 'Грег',
  text: 'Продам мопед',
}];

ReactDOM.render((
  <div>
    <h2>Сообщения</h2>

    {comments.map((message, id) => (
      // Важный атрибут: key
      <div key={message.id}>
        <h4>{message.id}</h4>
        <h3>{message.author}</h3>
        <div>{message.text}</div>
      </div>
    ))}
  </div>
), document.querySelector('#root'));