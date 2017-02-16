var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var listContacts = new ListContacts(cordova.file.externalRootDirectory+"Contacts/list.json");
        listContacts.getListContacts();
    }
};

app.initialize();


/*$(document).ready(function(){
    var listContacts = new ListContacts("Contacts/list.json");
    listContacts.getListContacts();  
});*/

/*
function fail(e) {
    console.log("FileSystem Error");
    console.dir(e);
}

function gotFile(fileEntry) {
    fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {   
            var parsedData = JSON.parse(this.result);
            alert(parsedData[0].Email);
        }
        reader.readAsText(file);
    });
}*/
