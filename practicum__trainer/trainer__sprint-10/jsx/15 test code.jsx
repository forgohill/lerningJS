// Классовый компонент User
class User extends React.Component {
  constructor(props) {
    super(props);

    // Начальные значения внутреннего состояния
    this.state = {
      rating: 0,
    };
  }

  /*
   * Обработчики событий: изменяют внутреннее состояние
   */
  handleLike = () => {
    this.setState({ rating: 1 });
  };

  handleDislike = () => {
    this.setState({ rating: -1 });
  };

  // JSX-структура компонента
  render() {
    return (
      <p>
        <img src={`https://code.s3.yandex.net/web-code/react/${this.props.id}.png`} width="75" />
        <br /><b>{this.props.name}</b>
        <div className="rating">
          <button onClick={this.handleLike}>👍</button>
          {this.state.rating}
          <button onClick={this.handleDislike}>👎</button>
        </div>
      </p>
    );
  }
}

// Основной код приложения
ReactDOM.render((
  <>
    <h2>Мои воображаемые друзья:</h2>
    <User id="1" name="Gregory" />
    <User id="2" name="James" />
    <User id="3" name="Allison" />
  </>
), document.querySelector('#root'));