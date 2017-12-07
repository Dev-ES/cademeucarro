function onBackKeyDown(evt) {

}

var application = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('load', this.onLoad, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onLoad: function() {

    },

    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }
};

var api = {
    buscar : function () {
        var placa = document.getElementById("placa").value;
        axios.get("http://api.cademeucarro.org/plates/search?plate="+placa).then(function(response) {
            console.log(response);
        })
    }
}