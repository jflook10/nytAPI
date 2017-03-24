$(document).ready(function(){

function search(){

	var num = 5;
	
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "02be6ef61f7a487796a0c215f60036d8",
  		'q': "trump",
  		'begin_date': "19500101",
  		'end_date': "19800101",
  		'page': 0
	});

	$.ajax({
  		url: url,
  		method: 'GET',
	}).done(function(result) {
		$("#input").html(result);

		var newDiv = $("<div>");

		for(i=0;i<5;i++){
		newDiv.append("<h2>" + result.response.docs[i].headline.main +"<h2>");
		newDiv.append("<p>" + result.response.docs[i].byline.original +"<p>");
		newDiv.append("<p>" + result.response.docs[i].section_name +"<p>");
		newDiv.append("<p>" + result.response.docs[i].pub_date +"<p>");
		newDiv.append("<p>" + result.response.docs[i].web_url +"<p>");
  		
		$("#stuff").append(newDiv);
  		}

  		


	}).fail(function(err) {
  		throw err;
	});
}	




	

	$("#search").on("click",search);

	})
	$("#clear").on("click",function(){
		$("#stuff").empty();
	})

	



