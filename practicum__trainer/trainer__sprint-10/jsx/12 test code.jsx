function Giraffe() {
  return (
    <div className="giraffe">
      <div className="icon">🦒</div>
      <div className="info">
        <h3>Жираф</h3>
        <span>Рост: 4 метра</span>
      </div>
    </div>
  );
}

function Hedgehog() {
  return (
    <div className="hedgehog">
      <div className="icon">🦔</div>
      <div className="info">
        <h3>Ёж</h3>
        <span>Рост: 15 сантиметров</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Giraffe />
    <Hedgehog />
  </>
), document.querySelector('#root'));
