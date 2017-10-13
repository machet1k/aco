	function say(msg)	{
			document.getElementById('block4').innerHTML = msg;
		}
		
	function ccleaner() {
		document.forms["myform"].reset();
		document.getElementById('block4').innerHTML = "";
		$("#km").css("display", "none");
		$("#label_km").css("display", "none");
		$("#passengers").css("display", "none");
		$("#busType").css("display", "none");
		$("#duration").css("display", "none");
		$("#label_duration").css("display", "none");

	}
	
	$(window).resize( function(){
		var page_w = document.body.clientWidth;
		$("#shape").css("left", (page_w - 965) / 2 + "px");
		$("#vk_comments").css("left", (page_w - 965) / 2 + "px");
		/*if (page_w < 1315) {
			var map_w = page_w - 965;
			$("#map").css("width", map_w + "px");
			$("#map").css("left", (page_w - 965 - map_w) / 2 + 965 + "px");
		} 
		else $("#map").css("left", (page_w - 965 - 350) / 2 + 965 + "px");*/
	})

	$(document).ready( function(){
		var page_w = document.body.clientWidth;
		$("#shape").css("left", (page_w - 965) / 2 + "px");
		$("#vk_comments").css("left", (page_w - 965) / 2 + "px");
		/*if (page_w < 1315) {
			var map_w = page_w - 965;
			$("#map").css("width", map_w + "px");
			$("#map").css("left", (page_w - 965 - 350) / 2 + 965 + "px");
		} 
		else $("#map").css("left", (page_w - 965 - 350) / 2 + 965 + "px");*/
	})



function digitalWatch() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	document.getElementById("watch").innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout("digitalWatch()", 1000);
}
/*  [0] Газель 3 метра					*/
/*  [1] Газель 4 метра					*/
/*  [2] Газель Фермер 3 метра			*/
/*  [3] Газель Фермер 4 метра			*/
/*  [4] Газель бортовая / Пирамида		*/
/*  [5] Рефрижератор 3 метра			*/
/*  [6] Рефрижератор 4 метра			*/
/*  [7] Изотермический фургон			*/
/*  [8] Газель «Катюша» 4 метра			*/
/*  [9] Каблук							*/
/* [10] Гидроборт						*/
/* [11] 3т тент/фургон					*/
/* [12] 5т тент/фургон					*/
/* [13] 5т борт							*/
/* [14] 10т тент/фургон					*/
/* [15] 10т борт						*/
/* [16] 20т тент/фургон/борт			*/
/* [17] Эвакуатор до 1.5 тонн			*/
/* [18] Эвакуатор до 3.5 тонн			*/
/*										*/
/* ************************************ */
/*										*/
/* 		Первая тарифная зона			*/
/*										*/
/* [0] стоимость 1 км					*/
/* [1] нал: тариф на 1 час				*/
/* [2] нал: тариф на 2 час				*/
/* [3] нал: тариф на 3 час				*/
/* [4] нал: доп.час						*/
/* [5] б/н: тариф на 3 час				*/
/* [6] б/н: доп.час						*/
/* [7] нал: тариф на 2 час (вечер)		*/
/* [8] б/н: тариф на 3 час (ноч.лог.)	*/
/*										*/
/* ************************************ */
/*										*/
/* 		Вторая тарифная зона			*/
/*										*/
/* [0] стоимость 1 км					*/
/* [1] нал: тариф на 1 час				*/
/* [2] нал: тариф на 2 час				*/
/* [3] нал: тариф на 3 час				*/
/* [4] нал: доп.час						*/
/* [5] б/н: тариф на 3 час				*/
/* [6] б/н: доп.час						*/
/* [7] б/н: тариф на 3 час (ноч.лог.)	*/
/*										*/
/* ************************************ */
/*										*/
/*	Большегрузы и эвакуаторы			*/
/*										*/
/* [0] стоимость 1 км					*/
/* [1] длительность тарифа				*/
/* [2] –, value = 0						*/
/* [3] нал: цена тарифа					*/
/* [4] нал: доп.час						*/
/* [5] б/н: цена тарифа					*/
/* [6] б/н: доп.час						*/
/* ************************************ */
/*										*/
/*	автобусы							*/
/*										*/
/* [0] стоимость 1 км					*/
/* [1] стоимость 1 часа в городе		*/
/* [2] стоимость 1 часа в пригороде 	*/

var json = '{										\
"tz1":[												\
	[34,1490,1990,2290,790,2050,750,1790,1750], 	\
	[34,1590,2090,2690,790,2150,750,1890,1850],		\
	[34,1790,2490,2790,790,2650,750,2190,2250],		\
	[34,1990,2990,3390,790,3550,750,2790,3050],		\
	[34,1790,2790,3590,1090,3250,950,2790,2850],	\
	[40,1590,1990,2590,690,2750,850,1890,2350],		\
	[40,1690,2090,2690,690,2850,850,1990,2450],		\
	[34,1690,2090,2890,890,2750,850,2090,2350],		\
	[34,3090,3790,4690,1090,4950,1050,3690,4250],	\
	[34,1190,1590,1790,690,1850,650,1490,1650],		\
	[34,1690,2690,3390,990,4150,1150,2590,3550],	\
	[30,4,0,2990, 590,2990, 590],					\
	[40,5,0,4390, 790,4390, 790],					\
	[40,5,0,5090, 890,5090, 890],					\
	[50,5,0,5090, 890,5090, 890],					\
	[50,5,0,5790, 990,5790, 990],					\
	[55,6,0,8390,1190,9790,1390],					\
	[40,1,0,2200, 500,2200, 500],					\
	[45,1,0,2700, 700,2700, 700],					\
	[0, 0, 0, 0, 0, 0, 0]],							\
"tz2":[												\
	[34,1790,2490,2690,790,2750,750,2350],			\
	[34,1890,2590,2790,790,2850,750,2450],			\
	[34,2190,2790,3190,790,2850,750,2450],			\
	[34,2590,3290,3790,790,3750,750,3250],			\
	[34,2690,3290,3790,1090,4350,1050,3750],			\
	[40,2090,2690,3190,690,3450,850,2950],			\
	[40,2190,2790,3290,690,3950,850,3350],			\
	[34,2090,2690,3190,890,3050,850,2650],			\
	[34,3690,4390,5290,1090,5450,1150,4650],		\
	[34,1490,1890,2490,690,2450,750,2150],			\
	[34,1890,2790,3590,990,4350,1150,3750],			\
	[30,4,0, 3590, 590, 3590, 590],					\
	[40,5,0, 5090, 790, 5090, 790],					\
	[40,5,0, 5890, 890, 5890, 890],					\
	[50,5,0, 5890, 890, 5890, 890],					\
	[50,5,0, 6790, 990, 6790, 990],					\
	[55,6,0, 9590, 1190, 11190,1390],					\
	[40,1,0,2500, 500, 2500, 500],					\
	[45,1,0,3000, 700, 3000, 700],					\
	[0, 0, 0, 0, 0, 0, 0]],							\
"tz1_trash":[										\
	[1490,1390,590,790],							\
	[2190,1990,1090,1190],							\
	[2890,2690,1190,1390],							\
	[3890,3490,1690,1690],							\
	[5190,4690,2390,2090],							\
	[5190,5190,2190,2390],							\
	[8190,8190,3190,3590],							\
	[10390,10390,4790,4790]],						\
"tz2_trash":[										\
	[1590,1490,3190,3990,4690],						\
	[2190,1990,3890,4690,5390],						\
	[3190,2890,4590,5390,6190],						\
	[3890,3490,5590,6390,7090],						\
	[5190,4690,6890,7690,8390],						\
	[6190,6190,7090,8590,9990],						\
	[9290,9290,9490,10990,12390],					\
	[12290,12290,12890,13390,14790]],				\
"bus":[												\
	[35,700,700],									\
	[35,850,850],									\
	[60,1300,1300],									\
	[60,1400,1400],									\
	[60,1500,1500],									\
	[65,1800,1800]],								\
"actions":[											\
	[2590, 1790, 3390, 1790, 1790, 1190, 2190, 1190],								\
	[3890, 1790, 4590, 1790, 2990, 1190, 3290, 1190],								\
	[5490, 1890, 5890, 1890]]												\
}';

var price = JSON.parse(json);

function calc() {
	var tz = document.getElementsByName('tz'); 
	var pc = document.getElementsByName('percent');
	var act = document.getElementsByName('actions');
	var trash = document.getElementById('trash');
	var km = document.getElementById('km').value;
	var idCar = document.getElementById('car').value;
	var idVol = document.getElementById('volume').value;
	var hours = document.getElementById('hoursCount').value;
	var payment = document.getElementById('paymentType').value;
	
	var psgr = document.getElementById('passengers').value;
	var bus = document.getElementById('busType').value;
	var dur = document.getElementById('duration').value;
	
	var indDop = (payment == "nal") ? 4 : 6; 
	var time = document.getElementById('time').value.substring(0, 2);
	var skm = price.tz1[idCar][0];
	var tempCost;
	var percent = 1;
	
	if (trash.checked) {
		$("#volume").css("display", "inline");
		$("#label_volume").css("display", "inline");
		$("#actions").css("display", "none");
		$("#label_actions").css("display", "none");
	}else{
		$("#volume").css("display", "none");
		$("#label_volume").css("display", "none");
		$("#actions").css("display", "inline");
		$("#label_actions").css("display", "inline");
	}
	

	/*******************/

	
	
	//if (percent > 1 && skm != 40 && idCar < 11) skm = 37;
	
	if (!tz[0].checked && !tz[1].checked && !tz[2].checked) {say("<span style='color: #ff8888;'>Выберите тарифную зону.</span>"); return;}
	
	
	/* СКРЫТИЕ И ПОКАЗ ПОЛЯ "КИЛОМЕТРАЖ" */
	if (tz[2].checked) {
		$("#km").css("display", "inline");
		$("#label_km").css("display", "inline");
	}else{
		$("#km").css("display", "none");
		$("#label_km").css("display", "none");
	}
	
	


	
	/* ВЫВОЗ МУСОРА */
	if (trash.checked) {	

		if (idVol == "Газель" || idVol == "ПУХТО") {			
			say("<span style='color: #ff8888;'>Какой объём мусора планирует вывести клиент?</span>"); 			
			return;		
		}
		document.getElementById('addHourCost').value = price.tz1[0][indDop];
		if (idVol > 4) {
			document.getElementById('addHourCost').value = 790;
			document.getElementById('hoursCount').value = idVol-4;
			if (tz[0].checked) {document.getElementById('carCost').value = price.tz1_trash[idVol][0];say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}
			if (tz[1].checked) {document.getElementById('carCost').value = price.tz2_trash[idVol][0];say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}			
			if (tz[2].checked) {								
				if (km == "") {say("<span style='color: #ff8888;'>Введите километраж.</span>"); return;}				
				if (km < 26) { say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона."); return;}				
				if (km > 25 && km < 51) {document.getElementById('carCost').value = price.tz2_trash[idVol][2];	say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}			
				if (km > 50 && km < 76) {document.getElementById('carCost').value = price.tz2_trash[idVol][3];	say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}			
				if (km > 75 && km < 101) {document.getElementById('carCost').value = price.tz2_trash[idVol][4];	say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}			
				if (km > 100) {					
				say("<span style='color: #ff8888;'>На такое расстояние (" + km + " км) по согласованию с логистом.</span>" ); 					document.getElementById('carCost').value = km * 50 + price.tz1_trash[idVol][0];		
				}			
			} 
		}
		else {						
			if (tz[2].checked) {						
				if (km == "") {say("<span style='color: #ff8888;'>Введите километраж.</span>"); return;}				
				if (km < 6) { say("<span style='color: #ff8888;'>" + km + " км – это первая тарифная зона.</span>"); }				
				if (km > 5 && km < 31) { say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона.</span>"); }				
				if (km > 30 && km < 51) {document.getElementById('carCost').value = price.tz2_trash[idVol][2];say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}				
				if (km > 50 && km < 76) {document.getElementById('carCost').value = price.tz2_trash[idVol][3];say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}				
				if (km > 75 && km < 101) {document.getElementById('carCost').value = price.tz2_trash[idVol][4];say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");}				
				if (km > 100) {					
					say("<span style='color: #ff8888;'>На такое расстояние (" + km + " км) по согласованию с логистом.</span>" ); 					
					document.getElementById('carCost').value = km * 34 + price.tz1_trash[idVol][0];				
				}				
				return;			
			}
			if (time == "") {say("<span style='color: #ff8888;'>Какое время удобно для вывоза мусора?</span>"); return;}
			if (time > 15 || time < 10) {
				if (tz[0].checked) document.getElementById('carCost').value = price.tz1_trash[idVol][1];
				else if (tz[1].checked) document.getElementById('carCost').value = price.tz2_trash[idVol][1];
			}
			else {
				if (tz[0].checked) document.getElementById('carCost').value = price.tz1_trash[idVol][0];
				else if (tz[1].checked) document.getElementById('carCost').value = price.tz2_trash[idVol][0];
			}
			document.getElementById('hoursCount').value = 1;
			say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
		}
	/* РАСЧЁТ МАШИНЫ */
	} else { 
	
	
		/* РАСЧЁТ АВТОБУСА */
		if (idCar == 19) {
			/* ПОКАЗ ПОЛЯ "КОЛИЧЕСТВО МЕСТ", "ТИП ПОЕЗДКИ" */
			$("#passengers").css("display", "inline");
			$("#busType").css("display", "inline");
			if (psgr == 9) { say("<span style='color: #ff8888;'>Укажите количество мест.</span>"); return;}
			/* ТРАНСФЕР */
			if (bus == 0) {
				/* СКРЫТИЕ ПОЛЯ "АРЕНДА АВТОБУСА НА ... ЧАСОВ" */
				$("#duration").css("display", "none");
				$("#label_duration").css("display", "none");				
				if (tz[0].checked) {
					document.getElementById('addHourCost').value = price.bus[psgr][1];
					document.getElementById('carCost').value = price.bus[psgr][1] * 4;
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;
				}
				if (tz[1].checked) {
					document.getElementById('addHourCost').value = price.bus[psgr][2];
					document.getElementById('carCost').value = price.bus[psgr][2] * 5;
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;
				}
				if (tz[2].checked) {
					if (km == "") { say("<span style='color: #ff8888;'>Укажите километраж.</span>"); return;}				
					if (km < 50) { 
						say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона.<br>Считайте по пригороду.</span>"); 
						document.getElementById('carCost').value = "";
						return;
					}				
					document.getElementById('addHourCost').value = price.bus[psgr][2];
					document.getElementById('carCost').value = (km * 1 + 30) * 2 * price.bus[psgr][0];
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;				
				}
			}
			/* АРЕНДА */
			if (bus == 1) {
				/* ПОКАЗ ПОЛЯ "АРЕНДА АВТОБУСА НА ... ЧАСОВ" */
				$("#duration").css("display", "inline");
				$("#label_duration").css("display", "inline");
				if (tz[0].checked) {
					if (dur == "") { say("<span style='color: #ff8888;'>На сколько часов клиент хочет арендовать автобус?</span>"); return;}
					if (dur < 3) {dur = 3; document.getElementById('carCost').value = 3;}
					document.getElementById('addHourCost').value = price.bus[psgr][1];
					document.getElementById('carCost').value = price.bus[psgr][1] * (dur * 1 + 1);
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;
				}
				if (tz[1].checked) {
					if (dur == 0 || dur == "") { say("<span style='color: #ff8888;'>На сколько часов клиент хочет арендовать автобус?</span>"); return;}
					if (dur < 3) {dur = 3; document.getElementById('carCost').value = 3;}
					document.getElementById('addHourCost').value = price.bus[psgr][2];
					document.getElementById('carCost').value = price.bus[psgr][2] * (dur * 1 + 2);
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;
				}
				if (tz[2].checked) {
					if (dur == 0 || dur == "") { say("<span style='color: #ff8888;'>Сколько часов нужно будет ожидать водителю автобуса.</span>"); return;}
					if (km == "") { say("<span style='color: #ff8888;'>Укажите километраж.</span>"); return;}
					if (km < 50) { 
						say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона.</span>"); 
						document.getElementById('carCost').value = "";
						return;
					}				
					document.getElementById('addHourCost').value = price.bus[psgr][2];
					document.getElementById('carCost').value = (km * 1 + 30) * 2 * price.bus[psgr][0] + dur * price.bus[psgr][1];
					say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
					return;
				}
			}
		}else{ 
		/* СКРЫТИЕ ПОЛЕЙ "КОЛИЧЕСТВО МЕСТ", "ТИП ПОЕЗДКИ", "АРЕНДА АВТОБУСА НА ... ЧАСОВ" */
			$("#passengers").css("display", "none");
			$("#busType").css("display", "none");
			$("#duration").css("display", "none");
			$("#label_duration").css("display", "none");
		}
	
	
		/* НАЛИЧНЫЙ РАСЧЁТ */
		if (payment == "nal") { // если оплата наличными
		
		/* КОЭФФИЦИЕНТЫ ДЛЯ СКИДОК И НАЦЕНОК */
	if (pc[0].checked) {percent = 1.05; skm = 36}// +5%
	if (pc[1].checked) {percent = 1.1;  skm = 38}// +10%
	if (pc[2].checked) {percent = 1.15; skm = 40}// +15%
	if (pc[3].checked) {percent = 1.2; skm = 42}// +20%
	if (pc[4].checked) {percent = 0.9;  }// -10%		
		
			$("#bpbn").css("display", "none");
			$("#po1").css("display", "inline");
			$("#po2").css("display", "inline");
			if (hours == "" && !tz[2].checked && idCar < 11) {say("<span style='color: #ff8888;'>Какой тариф выбрал клиент, на 1, 2 или 3 часа?</span>"); return;}
			/* ПЕРВАЯ ТАРИФНАЯ ЗОНА */
			if (tz[0].checked) { // в 1-й тарифной зоне
				document.getElementById('km').value = ""; // очищаем километраж
				if (idCar > 10) { // если выбран большегруз
					// в "С авто" ставим цену из табл."Город": indDop - 1 = 3 стоимость единственного тарифа за нал)  
					document.getElementById('carCost').value = price.tz1[idCar][indDop-1]; 
					// в "часов" ставим кол-во часов, на которое предоставляется большегруз  
					document.getElementById('hoursCount').value = price.tz1[idCar][1];
					// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						document.getElementById('carCost').value = price.tz1[idCar][indDop-1] + 500; 
					} 
					document.getElementById('addHourCost').value = price.tz1[idCar][indDop];
				} // если выбрана газель
				// в "С авто" ставим цену из табл."Город": hours - длительность тарифа, который выбрал клиент
				else 
				{
					if (hours > 3) {document.getElementById('hoursCount').value = 3; hours = 3;}
					if (time == "" && hours == 2) {say("<span style='color: #ff8888;'>Укажите время поездки.</span>"); return;}
					if ((time >= 18 || time < 9) && hours == 2) tempCost = price.tz1[idCar][7];
					else tempCost = price.tz1[idCar][hours];
					
					document.getElementById('carCost').value = ~~(tempCost*percent/100)*100+90;
					
					// в "доп.час" ставим цену доп.часа за нал
					if (percent > 1 && idCar < 11) document.getElementById('addHourCost').value = ~~(price.tz1[idCar][indDop]*percent/100)*100+90;
					
					if (act[0].checked || act[1].checked) {
						if(hours == 3){say("<span style='color: #ffaaaa;'>БП на 3 часа отменили, используйте ПО на 2 часа.</span>");return;}
						if (act[1].checked) { // с 2 грузчиками 
							document.getElementById('addHourCost').value = ~~(price.actions[hours-1][1]*percent/100)*100+90;
							document.getElementById('carMov').value = ~~(price.actions[hours-1][0]*percent/100)*100+90-document.getElementById('carCost').value;
							document.getElementById('total').value = ~~(price.actions[hours-1][0]*percent/100)*100+90;
						} else { // с 1 грузчиком 
							document.getElementById('addHourCost').value = ~~(price.actions[hours-1][5]*percent/100)*100+90;
							document.getElementById('carMov').value = ~~(price.actions[hours-1][4]*percent/100)*100+90-document.getElementById('carCost').value;
							document.getElementById('total').value = ~~(price.actions[hours-1][4]*percent/100)*100+90;
						}
					} else {
						document.getElementById('addHourCost').value = price.tz1[idCar][indDop];	
						document.getElementById('carMov').value = "";
						document.getElementById('total').value = document.getElementById('carCost').value+document.getElementById('carMov').value;			
					}
				}
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
			/* ВТОРАЯ ТАРИФНАЯ ЗОНА */
			if (tz[1].checked) { 
				document.getElementById('km').value = ""; // очищаем километраж
				if (idCar > 10) { // если выбран большегруз
					document.getElementById('carCost').value = price.tz2[idCar][indDop-1];
					document.getElementById('hoursCount').value = price.tz2[idCar][1];
					// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						document.getElementById('carCost').value = price.tz2[idCar][indDop-1] + 500; 
					} 
				} // если выбрана газель
				else {
					if (hours > 3) {document.getElementById('hoursCount').value = 3; hours = 3;}
					document.getElementById('carCost').value = ~~(price.tz2[idCar][hours]*percent/100)*100+90;
				}
				if (percent > 1 && idCar < 11) document.getElementById('addHourCost').value = ~~(price.tz1[idCar][indDop]*percent/100)*100+90;
				else document.getElementById('addHourCost').value = price.tz1[idCar][indDop];

				if (act[0].checked || act[1].checked) {
					if(hours == 3){say("<span style='color: #ffaaaa;'>БП на 3 часа отменили, используйте ПО на 2 часа.</span>");return;}
						if (act[1].checked) { // с 2 грузчиками 
							document.getElementById('addHourCost').value = ~~(price.actions[hours-1][3]*percent/100)*100+90;
							document.getElementById('carMov').value = ~~(price.actions[hours-1][2]*percent/100)*100+90-document.getElementById('carCost').value;
							document.getElementById('total').value = ~~(price.actions[hours-1][2]*percent/100)*100+90;
						} 
						if (act[0].checked) { // с 1 грузчиком 
							document.getElementById('addHourCost').value = ~~(price.actions[hours-1][7]*percent/100)*100+90;
							document.getElementById('carMov').value = ~~(price.actions[hours-1][6]*percent/100)*100+90-document.getElementById('carCost').value;
							document.getElementById('total').value = ~~(price.actions[hours-1][6]*percent/100)*100+90;
						}
					} else {
						document.getElementById('addHourCost').value = price.tz1[idCar][indDop];	
						document.getElementById('carMov').value = "";
						document.getElementById('total').value = document.getElementById('carCost').value+document.getElementById('carMov').value;			
					}
				
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
			/* ТРЕТЬЯ ТАРИФНАЯ ЗОНА */
			if (tz[2].checked) { 
				if (km == "") {say("<span style='color: #ff8888;'>Укажите километраж."); return;}
				if (idCar > 10) {
					document.getElementById('hoursCount').value = price.tz1[idCar][1];
					if (km <= 25) {say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона. <br>Считайте по пригороду.</span>"); return;}
				}
				else {
					document.getElementById('hoursCount').value = 3;
					if (km < 6) {say("<span style='color: #ff8888;'>" + km + " км – это первая тарифная зона. Считайте по городу.</span>"); return;}
					if (km > 5 && km < 31) {say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона. <br>Считайте по пригороду.</span>"); return;}
				}
				if (percent > 1 && idCar < 11) {
					document.getElementById('addHourCost').value = ~~(price.tz1[idCar][indDop]*percent/100)*100+90;
					tempCost = ~~(price.tz1[idCar][indDop-1]*percent/100)*100+90;
				}
				else {
					document.getElementById('addHourCost').value = price.tz1[idCar][indDop];
					tempCost = price.tz1[idCar][indDop-1];
					// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						tempCost = price.tz1[idCar][indDop-1] + 500; 
					}
				}
		
				document.getElementById('carCost').value = km * skm + tempCost;				
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
		}
		/* БЕЗНАЛИЧНЫЙ РАСЧЁТ */
		if (payment == "beznal") {
			$("#bpbn").css("display", "inline");
			$("#po1").css("display", "none");
			$("#po2").css("display", "none");
			/* ПЕРВАЯ ТАРИФНАЯ ЗОНА */
			if (tz[0].checked) {
				document.getElementById('km').value = "";
				if (idCar < 11) {
					if (time == "") {say("<span style='color: #ff8888;'>Укажите время поездки.</span>"); return;}
					document.getElementById('hoursCount').value = 3;
					if (!act[2].checked && (time > 15 || time < 8)) document.getElementById('carCost').value = price.tz1[idCar][8];
					else document.getElementById('carCost').value = price.tz1[idCar][indDop-1];
				}	
				else {
					document.getElementById('hoursCount').value = price.tz1[idCar][1];	
					document.getElementById('carCost').value = price.tz1[idCar][indDop-1];
					// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						document.getElementById('carCost').value = price.tz1[idCar][indDop-1] + 500; 
					} 
				}
				
				if (act[2].checked) {
					document.getElementById('addHourCost').value = price.actions[2][1];
					document.getElementById('carMov').value = price.actions[2][0]-price.tz1[idCar][indDop-1];
					document.getElementById('total').value = price.actions[2][0];
				}
				else {
					document.getElementById('addHourCost').value = price.tz1[idCar][indDop];	
					document.getElementById('carMov').value = "";
					document.getElementById('total').value = document.getElementById('carCost').value+document.getElementById('carMov').value;
				}					
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
			/* ВТОРАЯ ТАРИФНАЯ ЗОНА */
			if (tz[1].checked) {
				document.getElementById('km').value = "";
				if (idCar < 11) {
					if (time == "") {say("<span style='color: #ff8888;'>Укажите время поездки.</span>"); return;}
					document.getElementById('hoursCount').value = 3;
					if (!act[2].checked && (time > 15 || time < 8)) document.getElementById('carCost').value = price.tz2[idCar][7];
					else document.getElementById('carCost').value = price.tz2[idCar][indDop-1];
				}	
				else {
					document.getElementById('hoursCount').value = price.tz2[idCar][1];	
					document.getElementById('carCost').value = price.tz2[idCar][indDop-1];
					// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						document.getElementById('carCost').value = price.tz2[idCar][indDop-1] + 500; 
					} 
				}
				if (act[2].checked) {
					document.getElementById('addHourCost').value = price.actions[2][3];
					document.getElementById('carMov').value = price.actions[2][2]-price.tz2[idCar][indDop-1];
					document.getElementById('total').value = price.actions[2][2];
				}
				else {
					document.getElementById('addHourCost').value = price.tz2[idCar][indDop];	
					document.getElementById('carMov').value = "";
					document.getElementById('total').value = document.getElementById('carCost').value+document.getElementById('carMov').value;
				
				}					
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
			/* ТРЕТЬЯ ТАРИФНАЯ ЗОНА */
			if (tz[2].checked) {
				if (act[2].checked) {say("<span style='color: #ff8888;'>БПБН в 3-ей тарифной зоне нет, только попредметный расчёт.</span>"); return;}
				if (km == "") {say("<span style='color: #ff8888;'>Укажите километраж.</span>"); return;}
				if (idCar > 10) {
					document.getElementById('hoursCount').value = price.tz1[idCar][1];
					if (km <= 25) {say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона.<br>Считайте по пригороду.</span>"); return;}
				}
				else {
					document.getElementById('hoursCount').value = 3;
					if (km <= 5) {say("<span style='color: #ff8888;'>" + km + " км – это первая тарифная зона. Считайте по городу.</span>"); return;}
					else if (km > 5 && km <= 30) {say("<span style='color: #ff8888;'>" + km + " км – это вторая тарифная зона. <br>Считайте по пригороду.</span>"); return;}
				}
				document.getElementById('carCost').value = km * skm + price.tz1[idCar][indDop-1];
				document.getElementById('addHourCost').value = price.tz1[idCar][indDop];				
				// если выбран эвакуатор
					if ((time >= 0 && time < 6) && (idCar > 16 && idCar < 19)){
						document.getElementById('carCost').value = km * skm + price.tz1[idCar][indDop-1] + 500; 
					}
				say("<span style='color: #aaffaa;'>Посчитано успешно!</span>");
			}
		}
	}
}



