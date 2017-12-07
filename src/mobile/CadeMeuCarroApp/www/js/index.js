var http = axios.create({
    baseURL: 'http://api.cademeucarro.org'
});

function onBackKeyDown(evt) {
    // : )
}

var application = {
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