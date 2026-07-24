setTimeout(() => {
	const ChangeZone = document.querySelector(".Change");
	var textone = "007";
	var texttwo = "오은교";
	var textCount = 0;
	var turn = 1;
	TextFirst = setInterval(TextShow, 200);
	function TextShow() {
	  if (turn == 1) {
		if (textCount < Number(textone.length)) {
		  text1 = ChangeZone.innerHTML + textone[textCount];
		  ChangeZone.innerHTML = text1;
		  textCount++;
		} else {
		  textCount = 0;
		  clearInterval(TextFirst);
		  ClearZone = setInterval(clearZone, 100);
		  turn++;
		}
	  } else if (turn == 2) {
		if (textCount < Number(texttwo.length)) {
		  ChangeZone.innerHTML = ChangeZone.innerHTML + texttwo[textCount];
		  textCount++;
		} else {
		  textCount = 0;
		  clearInterval(TextFirst);
		  ClearZone = setInterval(clearZone, 100);
		  turn = 1;
		}
	  }
	}
	function clearZone() {
	  const textZone = document.querySelector(".Change");
	  if (Number(ChangeZone.innerHTML.length) > 0) {
		var newText = "";
		for (var i = 0; i < Number(textZone.innerHTML.length) - 1; i++) {
		  newText += textZone.innerHTML[i];
		}
		textZone.innerHTML = String(newText);
	  } else {
		clearInterval(ClearZone);
		TextFirst = setInterval(TextShow, 400);
	  }
	}
}, 1000);