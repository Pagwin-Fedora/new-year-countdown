let date = new Date();
let Countdown = document.createElement("p");
document.body.appendChild(Countdown);
setInterval(function(){
	date = new Date();
	var daysInMonth;
	switch(date.getMonth()){
		case 0:
			daysInMonth = 31;
			break;
		case 1:
			if(date.getYear()%4==0)
				daysInMonth = 29;
			else
				daysInMonth = 28;
			break;
		case 2:
			daysInMonth = 31;
			break;
		case 3:
			daysInMonth = 30;
			break;
		case 4:
			daysInMonth = 31;
			break;
		case 5:
			daysInMonth = 30;
			break;
		case 6:
			daysInMonth = 31;
			break;
		case 7:
			daysInMonth = 31;
			break;
		case 8:
			daysInMonth = 30;
			break;
		case 9:
			daysInMonth = 31;
			break;
		case 10:
			daysInMonth = 30;
			break;
		case 11:
			daysInMonth = 31;
			break;		
	}
	let finalMessage = "";
	if(11-date.getMonth()===0){
		if(daysInMonth-date.getDate()===0){
			if(24-date.getHours()-1===0){
				if(60-date.getMinutes()-1===0){
					if(60-date.getSeconds()===0){
						let temp = document.createElement("h1");
						temp.innerHTML = "HAPPY NEW YEAR!!!!!!!!";
						alert("HAPPY NEW YEAR!!!!!!!!");
						let sound = new Audio("alert.mp3")
						sound.play();
						document.body.appendChild(temp);
						finalMessage="";
						complete = true;
					}
					else
						finalMessage+=(60-date.getSeconds()-1)+" seconds left until new years";
				}
				else{
					finalMessage+=(60-date.getMinutes()-1)+" minutes and "+(60-date.getSeconds()-1)+" seconds left until new years";
				}
			}
			else{
				finalMessage+=(24-date.getHours()-1)+" hours "+(60-date.getMinutes()-1)+" minutes and "+(60-date.getSeconds()-1)+" seconds left until new years";
			}
		}
		else{
			finalMessage+=(daysInMonth-date.getDate())+" days "+(24-date.getHours()-1)+" hours "+(60-date.getMinutes()-1)+" minutes and "+(60-date.getSeconds()-1)+" seconds left until new years";
		}
	}
	else {
		finalMessage+=(11-date.getMonth())+" Months "+(daysInMonth-date.getDate())+" days "+(24-date.getHours()-1)+" hours "+(60-date.getMinutes()-1)+" minutes and "+(60-date.getSeconds()-1)+" seconds left until new years";
	}
	Countdown.innerHTML=finalMessage;
}
,10);