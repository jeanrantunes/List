var ListContacts = function(srcList) {
    this.srcList = srcList;

    this.getListContacts = function(){
        var self = this;
        var list = [];
        $.getJSON(self.srcList, function(data){
            list = data;
        }).done(function(){
            self.setAttrsContact(list);
        }).fail(function(){
            alert("Not found!");
        });
    };

    this.setAttrsContact =function(list_contacts) {
        var list = [];
        list_contacts.sort(function(a, b){
            if (a.Name > b.Name) {
                return 1;
            }
            if (a.Name < b.Name) {
                return -1;
            }
            return 0;
        });
        $.each(list_contacts, function(){
            list.push(new Contact(this.Name, this.LastName, this.Photo, this.Email, this.Phone, this.CellPhone, this.Birthday));
        });

        var adapter = new AdapterList(list);
        adapter.renderList();
    };
};
