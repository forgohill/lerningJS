class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllTasks() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) { return res.json(); }
      else {
        return Promise.reject("ПРОИЗОШЕЛ БУГУРТ — СТРАДАЙ!")
      }
    });
  }

  addTask(data) {
    return fetch(this._url,
      {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("ПРОИЗОШЕЛ БУГУРТ ПРИ ОТПРАВКЕ — СТРАДАЙ!")
        }
      })
  }


  deleteTask(id) {
    return fetch(`${this._url}${id}`,
      {
        method: "DELETE",
        headers: this._headers,
        // body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("ПРОИЗОШЕЛ БУГУРТ ПРИ ОТПРАВКЕ — СТРАДАЙ!")
        }
      })
  }
}



export default Api;