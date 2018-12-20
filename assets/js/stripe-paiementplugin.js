//var stripe = Stripe('pk_test_pSkCoQlV8jEzbVIDxoJjnklZ');
var stripe = Stripe('pk_live_D59m0gkbmuZ0w2I1xHqBpict');
var elements = stripe.elements();
//var chemin="/consulting/";
var chemin="https://abyster-consulting.com/";
//var chemin="http://consulting.automatebills.com/";
var card = elements.create('card', {
  style: {
    base: {
      iconColor: '#666EE8',
      color: '#31325F',
      lineHeight: '40px',
      fontWeight: 300,
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '15px',

      '::placeholder': {
        color: '#CFD7E0',
      },
    },
  }
});
card.mount('#card-plugin');

function setOutcome(result) {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  var tokenElement = document.querySelector('.token');
  var form = document.querySelector('form');
  var name=form.querySelector('input[name=card-name]').value;
  var mail=form.querySelector('input[name=card-email]').value;
  var price=form.querySelector('input[name=card-price]').value;
  var entreprise=form.querySelector('input[name=card-entreprise]').value;
  var id=form.querySelector('input[name=card-id]').value;
  var url=chemin+"paiementplugin.php";
  var form_data = new FormData();
  successElement.classList.remove('visible');
  errorElement.classList.remove('visible');
  //tokenElement.classList.remove('visible');
  //alert("token"+result.token.id);

  if (result.token) {
    // Use the token to create a charge or a customer
    // https://stripe.com/docs/charges
    //successElement.querySelector('.token').textContent = result.token.id;
    //tokenElement.querySelector('.token').textContent = 'Veuillez patienter, traitement en cours...'
    //tokenElement.classList.add('visible');
    $('.token').css('display','block');
    //successElement.classList.add('visible');
    //envoie donnée au controleur
    //alert("token"+result.token.id);
    var request = new XMLHttpRequest();
        request.open("POST", url,true);
        form_data.append('mail', mail);
        form_data.append('name', name);
        form_data.append('price', price);
        form_data.append('id', id);
        form_data.append('entreprise', entreprise);
        form_data.append('token', result.token.id);
        //alert("price: "+price);
        //alert("id: "+id);
        request.send(form_data);
        request.onload = function(oEvent) {
          //alert("State: "+request.readyState);
		  //if(request.readyState==4)
            if (request.readyState==4) {
                $('#loadingplugin').css('display','none');
                $('.token').css('display','none');
                successElement.classList.add('visible');

                //alert(request.response);
                //$res=JSON.parse(request.response);
                  //alert("entrer");
                   $('.success').css('display','block');
                   $('.error').css('display','none');
                   //$('.message').css('display','block');
                   //$('.message').html($res.status);
                
                //$('#message').html("new template saved with success");
                //location.reload(true);
            } else {
			  $('.token').css('display','none');
              $('#loadingplugin').css('display','none');
              $('.message').html("Paiement echouer");
            }
          };
  } else if (result.error) {
    errorElement.textContent = result.error.message;
    $('#loadingplugin').css('display','none');
    errorElement.classList.add('visible');
  }
}

card.on('change', function(event) {
  setOutcome(event);
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = document.querySelector('form');
  $('#loadingplugin').css('display','block');
  var extraDetails = {
    name: form.querySelector('input[name=card-name]').value,
    mail: form.querySelector('input[name=card-email]').value,
    price: form.querySelector('input[name=card-price]').value,
    id: form.querySelector('input[name=card-id]').value,
    entreprise: form.querySelector('input[name=card-entreprise]').value
  };
  stripe.createToken(card, extraDetails).then(setOutcome);
});