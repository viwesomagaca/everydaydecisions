var optionOne = document.getElementById('sunnyd');
var optionTwo = document.getElementById('cloudyd');
var optionThree = document.getElementById('rainyd');

var div1 = document.getElementById('sunny');
var div2 = document.getElementById('cloudy');
var div3 = document.getElementById('rainy');

 optionOne.addEventListener('click', function(){
	 
    if(optionOne.checked){
	 div1.style.display = 'block';
   }
 });

optionTwo.addEventListener('click', function(){
	if(optionTwo.checked){
		div2.style.display = 'block';
	}
})

optionThree.addEventListener('click', function(){
	if(optionThree.checked){
		div3.style.display = 'block';
	}
})
var sunmenu=[
	{name: 'Breakfast', meal: 'Cornflakes', link: "https://www.google.com"},
	{name: 'Breakfast', meal: 'Toast', link:"www.gmail.com"},
	{name: 'Breakfast', meal: 'Pan Cakes'},
	{name: 'Breakfast', meal: 'Waffles'},

	{name: 'Lunch', meal: 'Fruits & Yogurt'},
	{name: 'Lunch', meal: 'Sandwitch'},
	{name: 'Lunch', meal: ''},
	{name: 'Lunch', meal: 'Chicken'},
	
	{name: 'Dinner', meal: 'Rice & Beans'},
	{name: 'Dinner', meal: 'Spagetti & Mince'},
	{name: 'Dinner', meal: 'Macaroni & Fish'},
	{name: 'Dinner', meal: 'Samp & Beans'},
]
var cloudmenu =[

	{name: 'Breakfast', meal: 'Egg & Mayo'},
	{name: 'Breakfast', meal: 'Muffins & Orange Juice'},
	{name: 'Breakfast', meal: 'Weetbix'},
	{name: 'Breakfast', meal: 'Rice Crispies'},
	
	
	{name: 'Lunch', meal: 'Bread'},
	{name: 'Lunch', meal: 'Chicken'},
	{name: 'Lunch', meal: 'Bread'},
	{name: 'Lunch', meal: 'Chicken'},
	
	
	{name: 'Dinner', meal: 'Rice & Beans'},
]
var Rainmenu=[
	{name: 'Breakfast', meal: 'Cornflakes'},
	{name: 'Breakfast', meal: 'Toast'},
	{name: 'Breakfast', meal: 'Egg & Mayo'},
	{name: 'Breakfast', meal: 'Muffins & Tea'},
    
	{name: 'Lunch', meal: 'Weetbix'},
	{name: 'Lunch', meal: 'Rice Crispies'},
	{name: 'Lunch', meal: 'Bread'},
	{name: 'Lunch', meal: 'Chicken'},
    
	{name: 'Dinner', meal: 'Samp & Beans'},
	{name: 'Dinner', meal: 'Rice & Chicken'},
    {name: 'Dinner', meal: 'Full Meal'},
	{name: 'Dinner', meal: 'Rice & Beef Stew'},
]

var sunnyD = document.querySelector(".sunnyDTemplate").innerHTML;
var sunnyTemplate = Handlebars.compile(sunnyD);

function sunName(){
	 var uniName = [];
	  var nameMap = {};
	   
	   for(var i=0; i<sunmenu.length; i++){
		  var menuOne = sunmenu[i];
		 if(nameMap[menuOne.name] === undefined){
			nameMap[menuOne.name] = menuOne.name;
			 uniName.push(menuOne.name);
		 }
		   
	   }
	document.querySelector('.sunnyMenu').innerHTML = sunnyTemplate({name : uniName});
   }
sunName();

    function cloudyDay(){
    var cloudyName =[];
    var nameMapCloudy ={};

    for(var i = 0; i< cloudmenu.length; i++){
	var menuTwo = cloudmenu[i];
    if(nameMapCloudy[menuTwo.name] === undefined){
	nameMapCloudy[menuTwo.name] = menuTwo.name;
	cloudyName.push(menuTwo.name);
           }
         }
	   document.querySelector('.cloudyMenu').innerHTML = sunnyTemplate({name:cloudyName})
      }
    cloudyDay();


 function rainyDay(){
    var rainName =[];
    var nameMapRain ={};

    for(var i = 0; i< Rainmenu.length; i++){
	var menuThree = Rainmenu[i];
    if(nameMapRain[menuThree.name] === undefined){
	nameMapRain[menuThree.name] = menuThree.name;
	rainName.push(menuThree.name);
           }
         }
	   document.querySelector('.rainyMenu').innerHTML = sunnyTemplate({name:rainName})
      }
    rainyDay();



function searchOne(){
	var sunnyday = document.querySelector('.sunnyMenu');
	
	function sunnyTime(input){
		return sunnyday.value == input.name;
	}
	 
	if(sunnyday.value !== " "){
		var outp = sunmenu.filter(sunnyTime);
	}
var output = document.querySelector('.sunTable').innerHTML;
var myTemp = Handlebars.compile(output);
	var sunnyTable = myTemp({
		sunmenu:outp
	  });
	
document.getElementById("sunnyDisplay").innerHTML = sunnyTable;
}

function searchCloudy(){
	
	var cloudyday = document.querySelector('.CloudyMenu');
	
	function cloudytime(input){
		return cloudyday.value == input.name
	}
	
	if(cloudyday.value !== ""){
		var outP = cloudmenu.filter(cloudytime);
	}
 var output = document.querySelector('.cloudTable').innerHTML;
var myTemp = Handlebars.compile(output);
	var cloudyTable = myTemp({
		cloudmenu:outP
	  });
document.getElementById("cloudDisplay").innerHTML = cloudyTable;
}


function searchRainy(){
    var rainyday = document.querySelector('.rainyMenu');
    function rainyTime(input){
        return rainyday.value == input.name;
    }
    
    if(rainyday.value !==""){
        var outputCloudy = Rainmenu.filter(rainyTime);
    }
 var output = document.querySelector('.rainTable').innerHTML;
var myTemp = Handlebars.compile(output);
	var rainyTable = myTemp({
		Rainmenu:outputCloudy
	  });
document.getElementById("rainyDisplay").innerHTML = rainyTable;
}