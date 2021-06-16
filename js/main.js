//Переход по кнопке на страницу

const btn = document.getElementById('login-btn');
const inp = document.querySelector('.input-login');

const getPage = () => {
    btn.addEventListener('click', () => {
        if(inp.value != "") {
            console.log('click');
            window.open('brands.html');
        } else {
                alert('Введите данные!');
        }
    })
}

getPage();


