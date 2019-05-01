$(document).ready(function () {
    		$.ajax({
			url: "http://twinfeats.com/shows/schedule",
			method: "POST",
			dataType: "json",
			data: {
				action: "schedule",
				title: "Orange is the New Cat"
			},
			error: function () {
				alert("AJAX Error!");
			},
			success: buildSchedule
		});


