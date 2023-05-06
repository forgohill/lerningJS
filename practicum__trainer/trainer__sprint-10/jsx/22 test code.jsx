class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCustomCursor: false };
  }

  handleChange = () => {
    this.setState({
      isCustomCursor: !this.state.isCustomCursor,
    });
  };

  render() {
    return (
      <>
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          — Включить неоновый курсор
        </label>
        {this.state.isCustomCursor && <NeonCursor />}
      </>
    );
  }
}



// Перепишем код с использованием хуков
function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        top: event.pageY,
        left: event.pageX,
      });
    }

    // Список действий внутри одного хука
    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.classList.add('no-cursor');

    // Возвращаем функцию, которая удаляет эффекты
    return () => {
      document.documentElement.classList.remove('no-cursor');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <img
      src="./cursor1.png"
      width={30}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        pointerEvents: 'none',
      }}
    />
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));