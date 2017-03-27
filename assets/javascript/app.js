$(document).ready(function(){

var page = "";
var pNum = 0;
function search(){
	
	console.log(page);
	//console.log(pNum);
	var endD = "20170101";
	var beginD = "19000101";

	if($("#beginD").val() != ""){
		beginD= $("#beginD").val();
	}
	if($("#endD").val() != ""){
		beginD= $("#endD").val();
	}
	var q = $("#searchQ").val();
	if (pNum === 0){
		page= $("#pageNum").val();
	}

	console.log(q);
	console.log(page);



	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "02be6ef61f7a487796a0c215f60036d8",
  		'q': q,
  		'begin_date': beginD,
  		'end_date': endD,
  		'page': pNum,

  		

  		

	});

	$.ajax({
  		url: url,
  		method: 'GET',
	}).done(function(result) {
		

		var newDiv = $("<div>");
		//console.log(result);
		for(i=0;i < page;i++){


		newDiv.append("<h2>" + result.response.docs[i].headline.main +"<h2>");
		if(result.response.docs[i].byline != null){
			newDiv.append("<p>" + result.response.docs[i].byline.original +"<p>");
		}else{
			newDiv.append("<p>" + "no author" +"<p>");
		}
		newDiv.append("<p>" + result.response.docs[i].section_name +"<p>");
		newDiv.append("<p>" + result.response.docs[i].pub_date +"<p>");
		newDiv.append("<p>" + result.response.docs[i].web_url +"<p>");
  		
		$("#resultsList").append(newDiv);
		if (i >= 9){
			break;
		}
  		}

  		if (page > 10){
  			pNum++;
  			page = page - 10;
  			console.log(page);
  			search();
  		}

  		


	}).fail(function(err) {
  		throw err;
	});
}	




	

	$("#searchButton").on("click",function(event){
		event.preventDefault();
		search();
	});

	})
	$("#clearButton").on("click",function(){
		$("#resultsList").empty();
	})

	



