
loopThru(all_hotels, '#hotels');
loopThru(all_restaurants, '#restaurants');
loopThru(all_things_to_do, '#things');

addItin('#hotel-btn', '#hotels', '#hotel-ul');
addItin('#rest-btn', '#restaurants', '#res-ul');
addItin('#thing-btn', '#things','#things-ul');

// holds an array of Day classes
var days = {};

function addItin(btnId, select, type){
	$(btnId).on('click', function(){
        var value = $(select).val();
		var $li = templates.getLi(value);
		$(type).append($li);
		// add marker to map
		var idx = parseInt($('.current-day').text());
		addMarker(select, idx, this);
		// store it in that day's constructor	
		days[idx].saveErrThang();
	});
}

function addMarker(select, idx, addbtn){
	var location = [];
    var previousDomEl = $(addbtn).prev()[0];
    var selectedIndex = $(previousDomEl)[0].options.selectedIndex;
    var selectId = $(select)[0].id;
    var mark;

	var coordinates = $(select + " option").data().location.split(",")
	coordinates.forEach(function(coo){
		location.push(parseFloat(coo));
	});
	// add coordinates and markers to the constructor function
	days[idx].coordinates.push(location);

    if (selectId === 'things') mark = all_things_to_do[selectedIndex].place[0].location;
    if (selectId === 'restaurants') mark = all_restaurants[selectedIndex].place[0].location;
    if (selectId === 'hotels') mark = all_hotels[selectedIndex].place[0].location;

    console.log(mark);

    var location = drawLocation(mark);

	days[idx].markers.push(location);
}

function loopThru(type, id){
	type.forEach(function(ele, idx){
		$(id).append(templates.getOption(ele, idx));
	});
};

$('#add-day').on('click', function(){
	var day = $('.day-buttons').children().length;
	$(this).before(templates.getButton(day));
	days[day] = new Day();
});

$('.day-buttons').on('click', '.day-x', function(){
	// remove previous itinerary's markers
	var oldDay = parseInt($('.current-day').text());
	if (oldDay){
        days[oldDay].removeMarkers();
    }
	// remove current highlight, add new hightlight
	$('.current-day').removeClass('current-day');
	$(this).addClass('current-day');
	// change the day header
	var currentDay = parseInt($(".current-day").text());
	$("#day-title span").text("Day "+currentDay);
	// show that day's itinerary
	$('#itny').html(days[currentDay].itinerary());
	// show that day's markers
	if(days[currentDay].coordinates) {
        days[currentDay].showMarkers()
    };
});

