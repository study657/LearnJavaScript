// // Основы работы
// // 1. Установите куку с именем 'name' и значением 'Иван'. Выведите содержимое этой куки на экран.

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	document.cookie = "name=Иван";
// 	alert(getCookie('name'));
// });




// // 2. Установите куку с вашем именем и вашим возрастом. Выведите на экран содержимое этих двух кук

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	document.cookie = "name=Иван";
// 	document.cookie = "age=25";
//  	alert(getCookie('name'));
// 	alert(getCookie('age'));
// });




// // Практика
// // 3. Дан инпут. Ведите в него город, например, Минск. Сохраните его в куки. Зайдя на другую страницу сайта вы должны увидеть фразу 'ваш город - Минск'

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// }

// $(document).ready(function () {
// 	$('button').click(function () {
// 	document.cookie = "city=" + $('#test').val();
// });

// var city = getCookie("city");
// if (city) alert("Ваш город: " + city);
// });




// // 4. При заходе на страницу спросите с помощью инпута день рождения пользователя. Когда он зайдет с следующий раз - напишите сколько месяцев, дней, часов, минут и секунд осталось до его дня рождения. 
// // И пусть по этим числам запуститься обратный отсчет (то есть они будут тикать).

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	function showBirthday () {
// 		var arr = birthday.split('-');
// 		var today = new Date();
// 		var dateBirtday = new Date();
// 		dateBirtday.setDate(arr[2]);
// 		dateBirtday.setMonth(Number(arr[1]) - 1);
// 		dateBirtday.setHours(0);
// 		dateBirtday.setMinutes(0);
// 		dateBirtday.setSeconds(0);

// 		if (dateBirtday - today < 0) dateBirtday.setFullYear(today.getFullYear() + 1);
// 		today = Math.floor((dateBirtday-today) / 1000);
// 		var tsec = today % 60; today = Math.floor(today / 60); if(tsec < 10) tsec = '0' + tsec;
// 		var tmin = today % 60; today = Math.floor(today / 60); if(tmin < 10) tmin = '0'+ tmin;
// 		var thour = today % 24; today = Math.floor(today / 24);
// 		var timestr = today + " дней "+ thour + " часов " + tmin + " минут " + tsec + " секунд";
// 		$('#date').html(timestr);
// 		window.setTimeout(showBirthday, 1000);
//               	}

// 	$('button').click(function () {
// 		document.cookie = "birthday=" + $('#test').val();
//  	});

// 	var birthday = getCookie("birthday");
// 	if (birthday) showBirthday(birthday);
// });




// // 5. Дана форма с инпутами. Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму). 
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	var one = getCookie("one"); if (one) $('#one').val(one);
// 	var two = getCookie("two"); if (two) $('#two').val(two);
// 	var three = getCookie("three"); if (three) $('#three').val(three);

// 	$(window).on('beforeunload', function () {
// 		$('input').each(function () {
// 			document.cookie = $(this).attr('id') + "=" + $(this).val();
// 		});
//   	})
// });




// // 6. Даны чекбоксы. Пользователь произвольно отмечает их и закрывает страницу. Сделайте так, чтобы при следующем заходе на страницу чекбоксы стали отмеченными так, как это сделал пользователь ранее.

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	var one = getCookie("one"); if (one == "true") $('#one').prop('checked', true); 
// 	var two = getCookie("two"); if (two == "true") $('#two').prop('checked', true); 
// 	var three = getCookie("three"); if (three == "true") $('#three').prop('checked', true); 

// 	$(window).on('beforeunload', function () {
// 		$('input').each(function () {
// 			document.cookie = $(this).attr('id') + "=" + $(this).is(':checked');
// 		});
//   	})
// });




// // 7. При заходе на страницу появляется счетчик обратного отсчета. Когда он доходит до нуля, на странице пишется - 'отсчет закончен'. При обновлении страницы счетчик не должен начинать идти заново.

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	var ch = getCookie("ch");
// 	if (!ch) {
// 		var chN = 5;
// 		window.idInt = setInterval(function () {
// 			if (chN == 0) {
// 				$('#ch').html("отсчёт закончен");
// 				clearInterval(window.idInt);
// 				document.cookie = "ch = true";
//   			} else {
// 				$('#ch').html(chN--);
//  			}
// 		}, 1000);
//   	}
// });




// // 8. Дан тектареа. Пользователь может потянуть за его угол и изменить его размер. Сделайте так, чтобы при следующем заходе на страницу, текстареа был заданного размера.

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	var height = getCookie("height");
// 	var width = getCookie("width");
// 	if (height || width) {
// 		$('textarea').width(width);
// 		$('textarea').height(height);
//  	}
// 	$(window).on('beforeunload', function () {
// 		document.cookie = "width=" + $('textarea').width();
// 		document.cookie = "height=" + $('textarea').height();
//  	})
// });




// // 9. Дан инпут. В него можно ввести данные, затем поредактировать их, затем еще поредактировать. Пусть инпут хранит историю своих изменений (даже после перезагрузки страницы). 
// // Сверху над инпутом должны появится стрелочки, с помощью которых можно перемещаться по истории.

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return '';
// };

// $(document).ready(function () {
// 	function getActiveHistory() {
// 		$('#val').val(history[activ]);
//  	}

// 	var history = getCookie("history");
// 	if (history) history = history.split('#'); else history = [];
// 	var activ = history.length;

// 	$(window).on('beforeunload', function () {
// 		document.cookie = "history=" + history.join("#");
//  	})

// 	$('#backward').click(function () {
// 		if (activ > 0) activ--;
// 		getActiveHistory();
//   	});

// 	$('#forward').click(function () {
// 		if (activ < history.length-1) activ++;
// 		getActiveHistory();
// 	});

// 	$('#val').change(function () {
// 		if ($(this).val()) history.push($(this).val());
// 		activ = history.length - 1; 
// 	});
//  });




// 10. Дан сайт. Пусть каждая страница для каждого посетителя хранит время последнего захода и количество заходов на нее этим посетителем. 
// Пусть эти данные показываются при заходе в формате 'с последнего захода прошло ... вы посещали эту страницу ... раз'

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
};

$(document).ready(function () {
	var visit = getCookie("visit");
	var dateVisit = getCookie("dateVisit");
	if (dateVisit) {
		dateVisit = dateVisit.split("-");
		dateVisit = new Date(dateVisit[0], dateVisit[1], dateVisit[2], dateVisit[3], dateVisit[4], dateVisit[5]);
 	}

	var date = new Date();
	if (visit || dateVisit) {
		alert("с последнего захода прошло " + ((date - dateVisit) / 1000).toFixed(2) + " секунд, вы посещали эту страницу " + visit + " раз");
		visit++;
  	} else {
		visit = 1;
 	}

	dateVisit = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
	document.cookie = "visit=" + visit;
	document.cookie = "dateVisit=" + dateVisit;
});