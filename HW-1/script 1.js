let i = 5;
let ask = prompt('Пароль');
let pass = '1';
do {
  if(ask !== pass){
  	if (i === 1) {
  		alert("Спробуйте пізніше");
  		i = 0;
  	} else {
  		ask = prompt(`Cпробуй ще раз у Вас залишилося ще ${i - 1} спроби`);
    	i--;
  	}
  }
  else if(ask == pass){
    alert('Запрошуємо на сайт');
    i = 0;
  }
} while(i > 0);