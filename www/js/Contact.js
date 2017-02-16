var Contact = function(name, lastName, pathImage, email, phone, cellPhone, birthday){
	this.name = name;
	this.lastName = lastName;
	this.pathImage = pathImage;
	this.email = email;
	this.phone = phone;
	this.cellPhone = cellPhone;
	this.birthday = birthday;

	this.getName = function(){
		return this.name;
	};

	this.setName = function(name) {
		this.name = name;
	}

	this.getLastName = function(){
		return this.lastName;
	};

	this.setLastName = function(lastName) {
		this.lastName = lastName;
	}

	this.getPathImage = function(){
		return this.pathImage;
	};

	this.setPathImage = function(pathImage) {
		this.pathImage = pathImage;
	}

	this.getEmail = function(){
		return this.email;
	};

	this.setEmail = function(email) {
		this.email = email;
	}

	this.getPhone = function(){
		return this.phone;
	};

	this.setPhone = function(phone) {
		this.phone = phone;
	}

	this.getCellPhone = function(){
		return this.cellPhone;
	};

	this.setCellPhone = function(cellPhone) {
		this.cellPhone = cellPhone;
	}

	this.getBirthday = function(){
		return this.birthday;
	};

	this.setBirthday = function(birthday) {
		this.birthday = birthday;
	}
};