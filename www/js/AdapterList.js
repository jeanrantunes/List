var AdapterList = function(list_contacts){
	this.list_contacts = list_contacts;

	this.renderList = function(){
		var $li = $('#lista-contatos');
		var self = this;
		var size = this.list_contacts.length;
		$.each(this.list_contacts, function(index){
			$li.append("<li data-index="+index+">\
							<img class='image-contact' src="+cordova.file.externalRootDirectory+"Contacts/"+this.getPathImage()+">\
							<span class='name-contact'>"+this.getName()+"</span>\
						</li>");
		});

		$('#lista-contatos').children('li').on('click', function(){
			var i = parseInt($(this).attr('data-index')); 
       		self.renderToast(self.list_contacts[i]);
    	});
    	
	};

	this.renderToast = function(contact) {
		var time = 3500;

		$('.name').text("Name: "+contact.getName());
		$('.email').text("Email: "+contact.getLastName());
		$('.telefone').text("Telefone: "+contact.getPhone());
		$('.celular').text("Celular: "+contact.getCellPhone());
		$('.aniversario').text("Aniverário: "+contact.getBirthday());
		$('.toast').fadeIn();

		

		setTimeout(function(){
			$('.toast').fadeOut();
		},time);
	};
};