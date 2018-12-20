//var chemin= "/consulting/";
var chemin="https://admin:abyster2017!@abyster-consulting.com/admin/";

//save formation
$("#Addformation")
.submit(function(e) {
    e.preventDefault();
}).validate({
    errorClass: "error text-warning",
    highlight: function (element, errorClass) {},
    rules: {
        nom: "required",
        prix: {
        "required":true,
        "number":true
        },
        place: "required",
        lieu: "required",
        datedebut: "required",
        datefin: "required",
        duree: "required",
        tva: {
        "required":true,
        "number":true
        }
    },
    submitHandler: function () {
         $('#loadingform').css('display','block');
        var form_data = new FormData();
         form_data.append('nom', $("#nom").val());
         form_data.append('prix', $("#prix").val());
         form_data.append('description', $("#description").val());
         form_data.append('place', $("#place").val());
         form_data.append('lieu', $("#lieu").val());
         form_data.append('datedebut', $("#datedebut").val());
         form_data.append('datefin', $("#datefin").val());
         form_data.append('duree', $("#duree").val());
         form_data.append('tva', $("#tva").val());
         var uri=chemin+'index.php';
         
        $.ajax({
            url: uri, // point to server-side PHP script
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data){
           //alert("mise a jour avec success");
           //alert(data);
           //if(data=='Success'){
            $('#loadingform').css('display','none');
            $('#successform').css('display','block');
            $("#nom").val("");
            $("#description").val("")
            $("#prix").val("");
            $("#place").val("");
            $("#lieu").val("");
            $("#datedebut").val("");
            $("#datefin").val("");
            $("#duree").val("");
            $("#tva").val("");
            //document.location.href="/admin/addpharmaciegarde";
           //}
        }
      });

    },
});


//modification formation
$("#Editformation")
.submit(function(e) {
    e.preventDefault();
}).validate({
    errorClass: "error text-warning",
    highlight: function (element, errorClass) {},
    rules: {
        nom: "required",
        prix: {
        "required":true,
        "number":true
        },
        place: "required",
        lieu: "required",
        datedebut: "required",
        datefin: "required",
        duree: "required",
        tva: {
        "required":true,
        "number":true
        }
    },
    submitHandler: function () {
         $('#loadingform').css('display','block');
        var form_data = new FormData();
         form_data.append('nom', $("#nom").val());
         form_data.append('prix', $("#prix").val());
         form_data.append('description', $("#description").val());
         form_data.append('place', $("#place").val());
         form_data.append('lieu', $("#lieu").val());
         form_data.append('datedebut', $("#datedebut").val());
         form_data.append('datefin', $("#datefin").val());
         form_data.append('duree', $("#duree").val());
         form_data.append('tva', $("#tva").val());
         form_data.append('id', $("#id").val());
         var uri=chemin+'modifierformation.php';
         
        $.ajax({
            url: uri, // point to server-side PHP script
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data){
           //alert("mise a jour avec success");
           //alert(data);
           //if(data=='Success'){
            $('#loadingform').css('display','none');
            $('#successform').css('display','block');
            //document.location.href=chemin+'listeformation.php';
            //document.location.href=chemin+'listeformation.php';
           //}
        },
       error : function(resultat, statut, erreur){
			alert("OK");
			alert(statut);
       }
      });

    },
});

//modification plugin
$("#Editplugin")
.submit(function(e) {
    e.preventDefault();
}).validate({
    errorClass: "error text-warning",
    highlight: function (element, errorClass) {},
    rules: {
        nom: "required",
        prix: {
        "required":true,
        "number":true
        },
        lien: "required"
    },
    submitHandler: function () {
         $('#loadingform').css('display','block');
        var form_data = new FormData();
         form_data.append('nom', $("#nom").val());
         form_data.append('prix', $("#prix").val());
         form_data.append('description', $("#description").val());
         form_data.append('lien', $("#lien").val());
		 form_data.append('icone', $("#icone").val());
         form_data.append('id', $("#id").val());
         var uri=chemin+'modifierplugin.php';
         
        $.ajax({
            url: uri, // point to server-side PHP script
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(){
           //alert("mise a jour avec success");
           //alert(data);
           //if(data=='Success'){
		    
            $('#loadingform').css('display','none');
            $('#successform').css('display','block');
            //document.location.href=chemin+'listeformation.php';
            //document.location.href=chemin+'listeformation.php';
           //}
        },
       error : function(resultat, statut, erreur){
			//alert("OK");
			//alert(statut);
       }

      });

    },
});


//save plugin
$("#Addplugin")
.submit(function(e) {
    e.preventDefault();
}).validate({
    errorClass: "error text-warning",
    highlight: function (element, errorClass) {},
    rules: {
        nom: "required",
        prix: {
        "required":true,
        "number":true
        },
        lien: "required"
    },
    submitHandler: function () {
         $('#loadingform').css('display','block');
        var form_data = new FormData();
         form_data.append('nom', $("#nom").val());
         form_data.append('prix', $("#prix").val());
         form_data.append('description', $("#description").val());
         form_data.append('lien', $("#lien").val());
		 form_data.append('icone', $("#icone").val());
         var uri=chemin+'addplugin.php';
         
        $.ajax({
            url: uri, // point to server-side PHP script
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data){
           //alert("mise a jour avec success");
           //alert(data);
           //if(data=='Success'){
            $('#loadingform').css('display','none');
            $('#successform').css('display','block');
            $("#nom").val("");
            $("#description").val("")
            $("#prix").val("");
            $("#lien").val("");
			$("#icone").val("");
            //document.location.href="/admin/addpharmaciegarde";
           //}
        }
      });

    },
});