var optionOne = document.getElementById('sunnyd');
var optionTwo = document.getElementById('cloudyd');
var optionThree = document.getElementById('rainyd');

var div1 = document.getElementById('sunny');
var div2 = document.getElementById('cloudy');
var div3 = document.getElementById('rainy');

 optionOne.addEventListener('click', function(){
	 
    if(optionOne.checked){
	div3.style.display = 'none';
	div2.style.display = 'none';
	 div1.style.display = 'block';
   }
 });

optionTwo.addEventListener('click', function(){
	if(optionTwo.checked){
		div1.style.display = 'none';
		div3.style.display = 'none';
		div2.style.display = 'block';
	}
})

optionThree.addEventListener('click', function(){
	if(optionThree.checked){
		div1.style.display = 'none';
		div2.style.display = 'none';
		div3.style.display = 'block';
	}
})
var sunmenu=[
	{name: 'Breakfast', meal: 'Cornflakes', link: "http://www.kelloggs.co.za/en_ZA/kellogg-s-corn-flakes-consumer-brand.html",description:'Kelloggs'},
	{name: 'Breakfast', meal: 'Toast', link:"https://snapguide.com/supplies/slices-of-toast-bread/",description:'Toasted Bread'},
	{name: 'Breakfast', meal: 'Pan Cakes', link:'https://snapguide.com/guides/make-red-velvet-pancakes/' ,description:'Red Velvet PAn Cake'},
	{name: 'Breakfast', meal: 'Waffles', link:'https://snapguide.com/guides/make-waffles-9/', description:'How to make a waffle'},

	{name: 'Lunch', meal: 'Fruits & Yogurt', link:'http://www.momables.com/recipe-fresh-fruit-yogurt/' ,description:'Fruit Smoothie'},
	{name: 'Lunch', meal: 'Sandwich', link:'http://www.momjunction.com/articles/sandwich-recipes-for-kids_00342426/#gref' ,description:'Sandwiches'},
	{name: 'Lunch', meal: 'Samosa', link:'http://www.foodnetwork.com/recipes/spiced-potato-stuffed-pastries-samosas-recipe' ,description:'samosas'},
	{name: 'Lunch', meal: 'Chicken Tikka', link:'http://indianhealthyrecipes.com/chicken-tikka-in-oven/' ,description:'chicken Tikka'},
	
	{name: 'Dinner', meal: 'Rice & Beans', link:'http://www.finecooking.com/recipe/mexican-tomato-rice-beans' ,description:'fine cooking'},
	{name: 'Dinner', meal: 'Spaghetti & Mince', link:'http://allrecipes.com/recipe/222582/baked-spaghetti/?internalSource=hub%20recipe&referringContentType=search%20results&clickId=cardslot%202' ,description:'baked spaghetti'},
	{name: 'Dinner', meal: 'Macaroni Salad', link:'http://allrecipes.com/recipe/18089/macaroni-salad/?internalSource=rotd&referringId=556&referringContentType=recipe%20hub&clickId=cardslot%201' ,description:'MAcaroni salad'},
	{name: 'Dinner', meal: 'Samp & Beans', link:'http://thesouthafricancookbook.blogspot.co.za/2012/10/samp-beans-umngqusho.html' ,description:'umnqusho'},
]
var cloudmenu =[

	{name: 'Breakfast', meal: 'Egg & Mayo',link:'http://www.greatbritishchefs.com/recipes/perfect-egg-mayo-sandwich-recipe' ,description:'Egg & Mayo Sandwitch'},
	{name: 'Breakfast', meal: 'Muffins',link:'http://www.taste.com.au/recipes/collections/muffin-recipes' ,description:'Muffins WIthout egg'},
	{name: 'Breakfast', meal: 'Weetbix',link:'https://weetbix.co.nz/recipe-category/smoothies/' ,description:'weeetbix smoothie'},
	{name: 'Breakfast', meal: 'Rice Crispies',link:'https://www.ricekrispies.com/en_US/home.html' ,description:'Chrispie snacks'},
	
	
	{name: 'Lunch', meal: 'Pizza',link:'http://www.simplyrecipes.com/recipes/homemade_pizza/' ,description:'home made Pizza'},
	{name: 'Lunch', meal: 'Kfc',link:'https://www.tablespoon.com/recipes/copycat-kfc-original-style-chicken/97c93d14-9d8c-4bc7-96dc-1e0b37e4fcaa' ,description:'Fried chicken'},
	{name: 'Lunch', meal: 'Mc Donalds Burger',link:'http://www.food.com/recipe/the-perfect-burger-92021' ,description:'Burgers'},
	{name: 'Lunch', meal: 'Pie',link:'http://allrecipes.com/recipes/367/desserts/pies/' ,description:'Pie options'},
	
	
	{name: 'Dinner', meal: 'Bhisto & Pap',link:'http://www.desktopcookbook.com/recipe.asp?ID=25233' ,description:'how to make'},
	
	{name: 'Dinner', meal: 'Pap & Steak',link:'http://www.mytasteza.com/s/pap-and-steak.html' ,description:'Lamb Steak'},
	{name: 'Dinner', meal: "Lasagna",link:'http://www.food24.com/Recipes/Beef-lasagne-20130418?gclid=CP7KzJPq2NMCFZQK0wodAjgOOQ' ,description:'mouth watering recipe'},
]
var Rainmenu=[
	
	{name: 'Breakfast', meal: 'Mealie Porridge', link: "http://www.rainbowcooking.co.nz/recipes/maize-meal-porridge",description:'Sdudu'},
	{name: 'Breakfast', meal: 'Toast', link:"https://snapguide.com/supplies/slices-of-toast-bread/",description:'Toasted Bread'},
	{name: 'Breakfast', meal: 'Egg & Mayo',link:'http://www.greatbritishchefs.com/recipes/perfect-egg-mayo-sandwich-recipe' ,description:'Egg & Mayo Sandwitch'},
	{name: 'Breakfast', meal: 'Muffins',link:'http://www.taste.com.au/recipes/collections/muffin-recipes' ,description:'Muffins WIthout egg'},

    
	{name: 'Lunch', meal: 'Hamburger',link:'http://www.food.com/recipe/the-perfect-burger-92021', description:'Hamburgers'},
	{name: 'Lunch', meal: 'Chicken Fingers', link:'http://www.foodnetwork.com/recipes/patrick-and-gina-neely/tonys-chicken-tenders-with-honey-mustard-sauce-recipe' ,description:'east to make'},
	{name: 'Lunch', meal: 'Twister', link:'http://www.food.com/recipe/kfc-twisters-15269' ,description:'Deep Fried'},
	{name: 'Lunch', meal: 'shwarma', link:'http://www.foodnetwork.com/recipes/jeff-mauro/chicken-shawarma-with-tomato-cucumber-relish-and-tahini-sauce' ,description:'shwarma'},
    
	{name: 'Dinner', meal: 'Potato Pie', link:'http://www.food.com/recipe/easy-sweet-potato-pie-507410' ,description:'easy to make'},
	{name: 'Dinner', meal: 'Rice & Chicken', link:'http://www.myrecipes.com/ingredients/chicken-recipes/easy-chicken-and-rice-recipes' ,description:'my recipe'},
    {name: 'Dinner', meal: 'Full Meal', link:'http://www.jamieoliver.com/recipes/category/course/' ,description:'meal Options'},
	{name: 'Dinner', meal: 'Rice & Beef Stew', link:'https://www.minuterice.com/en-us/recipes/3343/EasyBeefStewwithRice.aspx' ,description:'easy beef stew with Rice'},
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
	if(sunnyday.value === ""){
  document.getElementById("sunnyDisplay").innerHTML ="Please select an option first!!"		
	}
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
	if(cloudyday.value ===""){
		document.getElementById('cloudDisplay').innerHTML = "Please select an option first!!"
	}
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
	if(rainyday.value ===""){
		document.getElementById("rainyDisplay").innerHTML ="Please select an option first!!"
	}
}