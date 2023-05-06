function Time() {
  const [hours, setHours] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [seconds, setSeconds] = React.useState();
  const [milliseconds, setMilliseconds] = React.useState();

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    if (typeof hours === 'number' && typeof minutes === 'number') {
      alert(`${hours}:${minutes}`);
    }
  }, [hours, minutes,]);

  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <Time />
), document.querySelector('#root'));
