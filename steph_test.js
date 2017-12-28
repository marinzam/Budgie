// $( document ).ready(function() {
// 	var hello = "<strong>Hello</strong>";
// 	$( ".container" ).append(hello);
// 	$( ".container" ).append(budget.state);

// 	$(".firstcategory").empty();

// 	for(var i=0; i<budget.split.length; i++){
// 		$(".table").append("<tr class= row"+ i+"></tr>");
// 		$(".row"+i).append("<td>"+budget.split[i].name+"</td>");
// 		$(".row"+i).append("<td>"+budget.split[i].percentage+"</td>");
// 	 }
// });

$(document).ready(function(){
	alert("Hello World");

	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	var ctx2 = document.getElementById("myDoughnut");
	var myDoughnut = new Chart(ctx2, {
	    type: 'doughnut',
	    data: {
		labels:['Red', 'Blue', 'Yellow'],
		datasets:[{
			label:'My First Dataset',
			data:[300, 50, 100],
			backgroundColor:[
				'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'
			]
			}]
	}
	});

	// var data = {
	// 	'labels':['Red', 'Blue', 'Yellow'],
	// 	'datasets':[{
	// 		'label':'My First Dataset',
	// 		'data':[300, 50, 100],
	// 		'backgroundColor':[
	// 			'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'
	// 		]
	// 		}]
	// };
 });

// $(document).ready(function(){
// 	alert("Hello World");

// 	var ctx = document.getElementById("myDoughnut");
// 	var myDoughnut = new Chart(ctx, {
// 	    type: 'doughnut',
// 	    data: data
// 	});
// 	var data = {
// 	    datasets: [{
// 	        data: [10, 20, 30]
// 	    }],
// 	    labels: [
// 	        'Red',
// 	        'Yellow',
// 	        'Blue'
// 	    ]
// 	};
// });

// {'type':'doughnut',
// 'data':{
// 	'labels':['Red', 'Blue', 'Yellow'],
// 	'datasets':[{
// 		'label':'My First Dataset',
// 		'data':[300, 50, 100],
// 		'backgroundColor':[
// 			'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'
// 		]
// 		}]
// 	}
// }


