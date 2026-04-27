const topmenu = $("nav ul li");
const sections = $(".section");
const speed = 600;
topmenu.click(function (e) {
	e.preventDefault();
	let target = $(this); 
	let index = target.index(); 
	let section = $(".section").eq(index);
	let offset = section.offset().top;
	$("html, body").animate({ scrollTop: offset }, 500, "easeOutCirc");
});
$(window).on("scroll", function () {
	let scrollTop = $(window).scrollTop()
	sections.each(function (i,o) {
		if (scrollTop >= sections.eq(i).offset().top - speed) {
			$("nav ul li").eq(i).addClass("active").siblings().removeClass("active");
			sections.eq(i).find(".left").addClass("in");
		}
	})	
})

$(".hidden").hover(
	function () {
	  let ah=$(this).innerHeight();
	  let img=$(this).find('img');
	  let imgh=img.innerHeight();
	  img.stop().animate({top:ah-imgh},2000)
	},
	function () {
	  let img = $(this).find("img")
	  img.stop().animate({ top: 0 }, 2000);
	}
)
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