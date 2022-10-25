const form = document.querySelector('form')

console.log(form.innerHTML)
// '<label>Логин</label><input type="text" id="login" /><div class="error">Введите логин</div>'

// Меняем содержимое новым html
form.innerHTML = '<div class="success">Вход выполнен</div>'
