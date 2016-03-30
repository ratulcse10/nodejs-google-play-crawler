var express = require('express');
var cheerio = require('cheerio');
var request = require('request');


var app = express();


/*
	Uncomment below 'using request and express' Part to Run on browser at http://localhost:3000, and if you do that then don't forget to comment 'using request only' Part
*/

//using request and express Part Start
// var appPackageName = 'https://play.google.com/store/apps/details?id=comp.infancyit.bhootfm';
// app.get('/', function (req, res) {
//   	request(appPackageName, function (error, response, html) {
// 	  if (!error && response.statusCode == 200) {
	  	
// 	  	//load full HTML
// 	    var $ = cheerio.load(html);
	    
// 	    //title
// 	    var title = $('div[class="id-app-title"]').html();
// 	    console.log(title);
	    
// 	    //publisher
// 	    var publisher = $('span[itemprop="name"]').html();
// 	    console.log(publisher);
	    
// 	    //genre
// 	    var genre = $('span[itemprop="genre"]').html();
// 	    console.log(genre);
	    
// 	    //description
// 	    var description = $('div[itemprop="description"]').text();
// 	    console.log(description);
	    
// 	    //date of published
// 	    var datePublished = $('div[itemprop="datePublished"]').text();
// 	    console.log(datePublished);
	    
// 	    //app size
// 	    var fileSize = $('div[itemprop="fileSize"]').text();
// 	    console.log(fileSize);
	    
// 	    //number of total downloads
// 	    var numDownloads = $('div[itemprop="numDownloads"]').text();
// 	    console.log(numDownloads);
	    
// 	    //app current version
// 	    var softwareVersion = $('div[itemprop="softwareVersion"]').text();
// 	    console.log(softwareVersion);
	    
// 	    //operating system requirement
// 	    var operatingSystems = $('div[itemprop="operatingSystems"]').text();
// 	    console.log(operatingSystems);
	    
// 	    //developer email and website
// 	    var devInfo = [];
// 	    $('a[class="dev-link"]').each(function(i, elem) {
// 		  devInfo[i] = $(this).attr('href');
// 		});
// 		var website = devInfo[0];
// 		var emailRaw = devInfo[1];
// 		var emailRawParts = emailRaw.split(':');
// 		var email = emailRawParts[1];
// 		console.log(website);
// 		console.log(email);
// 	    process.exit();

// 	  }
// 	});
// });


// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// })
//using request and express Part End



//using request only Part Start
var appPackageName = 'https://play.google.com/store/apps/details?id=comp.infancyit.bhootfm';
request(appPackageName, function (error, response, html) {
	  if (!error && response.statusCode == 200) {
	  	
	  	//load full HTML
	    var $ = cheerio.load(html);
	    
	    //title
	    var title = $('div[class="id-app-title"]').html();
	    console.log(title);
	    
	    //publisher
	    var publisher = $('span[itemprop="name"]').html();
	    console.log(publisher);
	    
	    //genre
	    var genre = $('span[itemprop="genre"]').html();
	    console.log(genre);
	    
	    //description
	    var description = $('div[itemprop="description"]').text();
	    console.log(description);
	    
	    //date of published
	    var datePublished = $('div[itemprop="datePublished"]').text();
	    console.log(datePublished);
	    
	    //app size
	    var fileSize = $('div[itemprop="fileSize"]').text();
	    console.log(fileSize);
	    
	    //number of total downloads
	    var numDownloads = $('div[itemprop="numDownloads"]').text();
	    console.log(numDownloads);
	    
	    //app current version
	    var softwareVersion = $('div[itemprop="softwareVersion"]').text();
	    console.log(softwareVersion);
	    
	    //operating system requirement
	    var operatingSystems = $('div[itemprop="operatingSystems"]').text();
	    console.log(operatingSystems);
	    
	    //developer email and website
	    var devInfo = [];
	    $('a[class="dev-link"]').each(function(i, elem) {
		  devInfo[i] = $(this).attr('href');
		});
		var website = devInfo[0];
		var emailRaw = devInfo[1];
		var emailRawParts = emailRaw.split(':');
		var email = emailRawParts[1];
		console.log(website);
		console.log(email);
	    process.exit();

	  }
});
//using request only Part End