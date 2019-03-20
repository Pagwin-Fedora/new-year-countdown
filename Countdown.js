//Note all of these comments were written on 3-19-19 so they don't capture the thought process it's just so the code is more explained if I show this to people in the future

let date;
let Countdown = document.createElement("p");
document.body.appendChild(Countdown);
setInterval(function(){//runs the code in the function repeatedly with a short gap in between calls
	date = new Date();//gets an up to date date from the user
	var daysInMonth;//a variable which will be set to the days in the month for future calculations
	switch(date.getMonth()){//switch statement to control the daysInMonth Variable
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
	let finalMessage = "";//initializes a final message variable honestly initializing it with an empty string was pointless given that I used += effectively as = which annoys me but aw well something to improve on in future
	//super unreadable code ahead but tldr all of the if statements are checking to see if there is time left until the new year
	if(11-date.getMonth()===0){
		if(daysInMonth-date.getDate()===0){
			if(24-date.getHours()-1===0){
				if(60-date.getMinutes()-1===0){
					if(60-date.getSeconds()===0){//may never be run idk it didn't work at new years but aw well
						let temp = document.createElement("h1");
						temp.innerHTML = "HAPPY NEW YEAR!!!!!!!!";
						alert("HAPPY NEW YEAR!!!!!!!!");
						let sound = new Audio("alert.mp3");//was supposed to play a sound but it didn't aw well
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
	Countdown.innerHTML=finalMessage;//setting the countdown element to the message that has been set
}
,10/*runs the above code every 10 milliseconds*/);
