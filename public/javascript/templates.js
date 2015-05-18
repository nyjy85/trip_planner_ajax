var templates = {
	getOption: function(name, id){
		return '<option data-location='+name.place[0].location+' id='+id+'>'+name.name+'</option>';
	},
	getButton: function(day){
		return '<button class="btn btn-circle day-btn day-x">'+day+'</button>';
	},
	getItin: function(hotel, restaurant, things){
		if(hotel || restaurant || things){
			return '<div><h4>My Hotel</h4><ul id="hotel-ul" class="list-group">'+hotel+'</ul></div><div><h4>My Restaurants</h4><ul id="res-ul" class="list-group">'+restaurant+'</ul></div><div><h4>My Things To Do</h4><ul id="things-ul" class="list-group">'+things+'</ul></div>';
		} else {
			return '<div><h4>My Hotel</h4><ul id="hotel-ul" class="list-group"></ul></div><div><h4>My Restaurants</h4><ul id="res-ul" class="list-group"></ul></div><div><h4>My Things To Do</h4><ul id="things-ul" class="list-group"></ul></div>';
		}
	}, 
	getLi: function(text){
		return '<li>'+text+'<button class="btn btn-xs btn-danger remove btn-circle">x</button></li>'
	}
}