
let cookies = document.cookie;
//upgrades
let cookiesOvenPrice = 100;
let ovenQuantity = 0;
let ovenCps = 1;
let cookiesBakerPrice = 1100;
let bakerQuantity = 0;
let bakerCps = 8;
let cookiesFactoryPrice = 12000;
let factoryQuantity = 0;
let factoryCps = 47;
//stats
let cps = 0;
let cpc = 1;
//stocks market
let chocolatePrice = 100;
let chocolateStocks = 0;
let sugarPrice = 100;
let sugarStocks = 0;
let flourPrice = 500;
let FlourStocks = 0;
let milkPrice = 500;
let milkStocks = 0;

//make cookie button
function makeCookie(){
    cookies+= cpc;
    document.getElementById("cookieCounter").value = cookies;
};

//upgrade
function buyCookiesOven(){
    if(cookies+1 > cookiesOvenPrice){
        cookies -= cookiesOvenPrice;
        cookiesOvenPrice *= 1.10;
        cookiesOvenPrice = Math.round(cookiesOvenPrice);
        cps+= ovenCps;
        ovenQuantity++;
    }

    document.getElementById("cookiesOvenPrice").value = "cost : " + cookiesOvenPrice;
    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("cps").value = "cookies per seconds : " + cps;
    document.getElementById("ovenQuantity").value = "quantity : " + ovenQuantity;
}

function buyCookiesBaker(){
    if(cookies+1 > cookiesBakerPrice){
        cookies -= cookiesBakerPrice;
        cookiesBakerPrice *= 1.10;
        cookiesBakerPrice = Math.round(cookiesBakerPrice);
        cps+= bakerCps;
        bakerQuantity++;
    }

    document.getElementById("cookiesBakerPrice").value = "cost : " + cookiesBakerPrice;
    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("cps").value = "cookies per seconds : " + cps;
    document.getElementById("bakerQuantity").value = "quantity : " + bakerQuantity;
};

function buyCookiesFactory(){
    if(cookies+1 > cookiesFactoryPrice){
        cookies -= cookiesFactoryPrice;
        cookiesFactoryPrice *= 1.10;
        cookiesFactoryPrice = Math.round(cookiesFactoryPrice);
        cps+= factoryCps;
        factoryQuantity++;
    }

    document.getElementById("cookiesFactoryPrice").value = "cost : " + cookiesFactoryPrice;
    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("cps").value = "cookies per seconds : " + cps;
    document.getElementById("factoryQuantity").value = "quantity : " + factoryQuantity;
};

//stocks market
//chocolate
function buyChocolate(){
    if(cookies+1 > chocolatePrice){
        chocolateStocks++;
        cookies -= chocolatePrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("chocolateStocks").value = "your stocks : " + chocolateStocks;
};

function sellChocolate(){
    if(chocolateStocks > 0){
        chocolateStocks--;
        cookies += chocolatePrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("chocolateStocks").value = "your stocks : " + chocolateStocks;
};
//sugar
function buySugar(){
    if(cookies+1 > sugarPrice){
        sugarStocks++;
        cookies -= sugarPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("sugarStocks").value = "your stocks : " + sugarStocks;
};

function sellSugar(){
    if(sugarStocks > 0){
        sugarStocks--;
        cookies += sugarPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("sugarStocks").value = "your stocks : " + sugarStocks;
};
//flour
function buyFlour(){
    if(cookies+1 > flourPrice){
        FlourStocks++;
        cookies -= flourPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("flourStocks").value = "your stocks : " + FlourStocks;
};

function sellFlour(){
    if(FlourStocks > 0){
        FlourStocks--;
        cookies += flourPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("flourStocks").value = "your stocks : " + FlourStocks;
};
//milk
function buyMilk(){
    if(cookies+1 > milkPrice){
        milkStocks++;
        cookies -= milkPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("milkStocks").value = "your stocks : " + milkStocks;
};

function sellMilk(){
    if(milkStocks > 0){
        milkStocks--;
        cookies += milkPrice;
    }

    document.getElementById("cookieCounter").value = cookies;
    document.getElementById("milkStocks").value = "your stocks : " + milkStocks;
}

//shop
//mega oven
function buyMegaOven(){
    if(cookies+1 > 5000){
        cookies -= 5000;
        ovenCps = 2;
        cps += ovenQuantity;
        document.getElementById("megaOven").style.display = "none";

        document.getElementById("cps").value = "cookies per seconds : " + cps;
    };
}
//hands
function buyHands(){
    if(cookies+1 > 6000){
        cookies -= 6000;
        cpc *= 2;
        document.getElementById("hands").style.display = "none";

        document.getElementById("cpc").value = "cookies per click : " + cpc;
    };
}

//generate cookies every second
setInterval(function updateGame(){
    cookies += ovenCps * ovenQuantity;
    cookies += bakerCps * bakerQuantity;
    cookies += factoryCps * factoryQuantity;

    document.getElementById("cookieCounter").value = cookies;
}, 1000);

//update the stocks market
setInterval(function updateStocksMarket(){
    //chocolate
    chocolatePrice += Math.floor(Math.random() * 20) - 8;
    if(chocolatePrice < 10){chocolatePrice = 15;};
    if(chocolatePrice > 200){chocolatePrice = 195;};
    document.getElementById("chocolatePrice").value = "price : " + chocolatePrice;
    
    //sugar
    sugarPrice += Math.floor(Math.random() * 60) - 30;
    if(sugarPrice < 10){sugarPrice = 15;};
    if(sugarPrice > 200){sugarPrice = 195;};
    document.getElementById("sugarPrice").value = "price : " + sugarPrice;

    //flour
    flourPrice += Math.floor(Math.random() * 20) - 8;
    if(flourPrice < 50){flourPrice = 60;};
    if(flourPrice > 2000){flourPrice = 1995;};
    document.getElementById("flourPrice").value = "price : " + flourPrice;

    //milk
    milkPrice += Math.floor(Math.random() * 80) - 40;
    if(milkPrice < 50){milkPrice = 60;};
    if(milkPrice > 2000){milkPrice = 1995;};
    document.getElementById("milkPrice").value = "price : " + milkPrice;

}, 15000);

//accept cookies popup
alert("This websit use cookies to save the progress you make. To accept the cookies, click on OK.");

//save the game
function saveGame(){
    document.cookie = `cookieValue=${cookies};`;

    console.log(document.cookie);
}

