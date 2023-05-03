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

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Giraffe />
  </>
), document.querySelector('#root'));
