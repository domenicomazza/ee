var quotes = [
"\"Two out of three ain't bad.\" \n— Meat Loaf",
"\"Stupid is as stupid does.\" \n— Forrest Gump",
"\"Ever tried. Ever failed. No matter. \nTry Again. Fail again. Fail better.\" \n— Samuel Beckett",
"\"There\'s a time and a place for everything! \nBut not now.\" \n— Professor Oak"
];//array of quotes

function randomQuote() {

	var randomQuotePick = Math.floor(Math.random() * quotes.length);//pick a random quote, multiply random number against array length and get floor value
	alert(quotes[randomQuotePick]);//alert random pick from quote array
	
}
randomQuote()