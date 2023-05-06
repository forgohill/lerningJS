function App() {
  const [isCustomCursor, setIsCustomCursor] = React.useState();

  function handleChange() {
    setIsCustomCursor(!isCustomCursor);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Включить неоновый курсор
      </label>
      {isCustomCursor && <NeonCursor />}
    </>
  );
}


function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(e) {
      setPosition({
        top: e.pageY,
        left: e.pageX,
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  React.useEffect(() => {
    document.documentElement.classList.add('no-cursor');

    return () => {
      document.documentElement.classList.remove('no-cursor');
    };
  });

  return (
    <img
      src="https://code.s3.yandex.net/web-code/react/cursor.svg"
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
