window.onload = function (){


	var background = $Id('background');
	if(background){
		var w =  window.screen.width,
			h =  window.screen.height;
		background.style.width = w + 'px';
		background.style.height = h + 'px';
	}

	//获取导航三个节点
	var homeOne = $Id("homeOne");
	var homeTwo = $Id("homeTwo");
	var homeThree = $Id("homeThree");

	//控制panel的显示与隐藏
	homeOne.onclick = function(){
		choosePanel("one");
	}

	homeTwo.onclick = function(){
		choosePanel("two");
	}

	homeThree.onclick = function(){
		choosePanel("three");
	}

	//aboutMe

}

//获取id的方法
function $Id(elementId){
	return document.getElementById(elementId);
}

function choosePanel(panel){
	//获取三个body节点
	var wrapBodyOne = $Id("wrapBodyOne");
	var wrapBodyTwo = $Id("wrapBodyTwo");
	var wrapBodyThree = $Id("wrapBodyThree");

	switch(panel){
		case "one": 
			wrapBodyOne.style.display = "block";
			wrapBodyTwo.style.display = "none";
			wrapBodyThree.style.display = "none";
			break;
		case "two":
			wrapBodyOne.style.display = "none";
			wrapBodyTwo.style.display = "block";
			wrapBodyThree.style.display = "none";
			break;
		case "three":
			wrapBodyOne.style.display = "none";
			wrapBodyTwo.style.display = "none";
			wrapBodyThree.style.display = "block";
			break;
		default:
			break;
	}
}