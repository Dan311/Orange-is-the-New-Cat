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
                
	$(".close").click(function () {
		$(this).parent().fadeOut(250);
	});

	$("nav > a").mouseenter(function () {
		var atag = $(this);
		$("#pawprint").fadeIn(250, function () {
			var left = atag.position().left;
			var width = atag.width();
			var pawWidth = $("#pawprint").width();
			var middle = left + width / 2 - pawWidth/2;
			$("#pawprint").css("left", middle + "px");
		});
	});

	$("nav").mouseleave(function () {
		$("#pawprint").fadeOut(250);
	});

	$("#schedule").click(function () {
		$("#schedule-popup").fadeIn(250);
		return false;
	});
     	function buildSchedule(show) {
            var table = $("#show-schedule");
		for (var idx=0;idx<show.schedule.length;idx++) {
			var tr = $("<tr></tr>");
			table.append(tr);
			var td = $("<td/>");
			tr.append(td);
			td.append(show.schedule[idx].episodeName);
			td = $("<td></td>");
			tr.append(td);
			td.append(show.schedule[idx].episodeDescription);
			td = $("<td></td>");
			tr.append(td);
			td.append(show.schedule[idx].episodeDate);
			td = $("<td></td>");

		}
	}
  });

