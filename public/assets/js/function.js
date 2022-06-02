 /*editor start here*/
 /*

 try{
     
     CKEDITOR.replace( 'editorr', {
         customConfig: '/ckeditor_settings/config.js',
     });
 	CKEDITOR.editorConfig = function( config )
     {
 		extraPlugins: 'placeholder',
         config.height = '150px';
 		
     };
 	
     
 }
 catch(e){
     console.log(e);
 }
 */
 /*editor end here*/

 /*
 $('#main-menu-navigation > li').map(function (index, item) {
 	let current_text = $(item).find('a').attr('href').trim();
 	if ($(item).hasClass('has-sub')) {
 		$(item).find('ul > li').map(function (inner_index, inner_item) {
 			let current_text_inner = $(inner_item).find('a').attr('href').trim();
 			if (window.location.href.indexOf(current_text_inner) > -1) {
 				$(inner_item).toggleClass('active');
 				$(item).toggleClass('active');
 			}
 		});

 	} else {
 		if (window.location.href.indexOf(current_text) > -1)
 			$(item).toggleClass('active');
 	}

 });
 */







 $(document).ready(function () {



 	$("input:radio").click(function () {
 		//alert("clicked");
 		if ($(this).val() == "other") {
 			$("#textarea").removeClass('d-none');
 		} else {
 			$("#textarea").addClass('d-none');
 		}
 	});
	 
	 $(".modal").on('shown.bs.modal', function() {
		$("body").addClass("modal-open");
	  });


	  $('.modal').on('hidden.bs.modal', function (event) {
		$("body").removeClass("modal-open");
	  })




 	/*
	$(".q-option input:radio").click(function(event){
	   event.preventDefault();
	   $('.inputDisabled').prop("disabled", false); // Element(s) are now enabled.
	});
*/

 	let dis_radios = document.querySelectorAll(".radio-ss");


 	for (let i = 0; i < dis_radios.length; i++) {
 		let radio_here = dis_radios[i];

 		radio_here.addEventListener('click', function () {
 			for (let j = 0; j < dis_radios.length; j++) {
 				dis_radios[j].parentElement.nextElementSibling.children[0].disabled = true
 			}
 			this.parentElement.nextElementSibling.children[0].disabled = false
 		});

 	}

 	/*$(".q-option input:radio").click(function() {
		
      $(this).parent().next().find('select').removeAttr('disabled');

    });
*/

 	//var elem = document.querySelector('.switchery');
 	//var init = new Switchery(elem);


 	//var switchery = new Switchery(elem, { color: '#faab43', secondaryColor: '#fC73d0', jackColor: '#fcf45e', jackSecondaryColor: '#c8ff77' });


 	//var switchery = new Switchery(elem, {  color: '#7c8bc7', jackColor: '#9decff' });
 	//$('#checkboxSwitch').checkboxpicker();
 	$(".dataTables_filter input").attr("placeholder", "Search");

 });



 /*custom accordian show hide start here*/
 /*
 const handleIcon = (icon, classToRemove, classToAdd) => {
 			icon.classList.remove(classToRemove);
 			icon.classList.add(classToAdd);								
 }

 const handleHint = (hint, classToRemove, classToAdd) => {
 			classToRemove.length ? hint.classList.remove(classToRemove) : null;
 			classToAdd.length ? hint.classList.add(classToAdd) : null;								
 }

 const registerDivClick = (divId, iconId, hintId) => {
 	let div = document.getElementById(divId);
 	div.onclick= function () {
 		let icon = document.getElementById(iconId);
 		let hint = document.getElementById(hintId);
 		setTimeout(() => {
 			if(div.classList.value.includes("collapsed"))
 			{
 			handleIcon(icon, 'fa-angle-down', 'fa-angle-right');
 			handleHint(hint, '', 'd-none');
 		}
 			else
 		{
 			handleIcon(icon, 'fa-angle-right','fa-angle-down')		
 			handleHint(hint, 'd-none', '')			
 		}
 	}, 100)	
 }
 }

 try {
 	registerDivClick("friendly-bet-accordian-div", "icon-friendly-bet", "hint-friendly-bet");
 	registerDivClick("pool-bet-accordian-div", "icon-pool-bet", "hint-pool-bet");
 	registerDivClick("third-accordian-div", "icon-third", "hint-pool-bet");
 }
 catch(e) {
 	console.log(e)
 }
 */


 /*custom accordian end hide start here*/


 /*modal click change start here*/

 $(function () {

 	
 	/**** Pasword Visible***/


 	$(".enter-icon").click(function () {
//console.log("ds");
		//alert ("ds");

 		$(this).toggleClass("fa-eye fa-eye-slash");

 		var input = $(".enter-input");
 		if (input.attr("type") === "password") {
 			input.attr("type", "text");
 		} else {
 			input.attr("type", "password");
 		}

 	});


    // toggle password

    $(".toggle_password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


 });





 /*modal click change end here*/



 /*date picker start here*/




// lottie start
$(document).ready(function() {
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_glnkkfua'),
        path: '../../assets/json/lf30_glnkkfua.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('forget_password'),
        path: '../../assets/json/forget_password.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf20_bkozdh8w'),
        path: '../../assets/json/lf20_bkozdh8w.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf20_mf5j5kua'),
        path: '../../assets/json/lf20_mf5j5kua.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf20_wkebwzpz'),
        path: '../../assets/json/lf20_wkebwzpz.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_editor_1fhupe4h'),
        path: '../../assets/json/lf30_editor_1fhupe4h.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_editor_7hi1uap2'),
        path: '../../assets/json/lf30_editor_7hi1uap2.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_editor_iolxzcqc'),
        path: '../../assets/json/lf30_editor_iolxzcqc.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_editor_vqt7vkgx'),
        path: '../../assets/json/lf30_editor_vqt7vkgx.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_editor_yerf5wir'),
        path: '../../assets/json/lf30_editor_yerf5wir.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lf30_ltuqrtmn1'),
        path: '../../assets/json/lf30_ltuqrtmn1.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('profile'),
        path: '../../assets/json/profile.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('review'),
        path: '../../assets/json/review.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('rejection'),
        path: '../../assets/json/rejection.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('signup-login'),
        path: '../../assets/json/signup-login.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('logout'),
        path: '../../assets/json/logout.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
});




$('.myselect').change(function () {
    var opval = $(this).val();
    if (opval == "inactive") {
      $('#inactivate_user').modal("show");
    }
    if (opval == "active") {
      $('#activate_user').modal("show");
    }
});

$('.inactive-selct-no').click(function(){
    console.log($('.myselect').val())
    $('.myselect').val('active')    
})
$('.inactive-selct-yes').click(function(){
    console.log($('.myselect').val())
    $('.myselect').val('inactive')    
})
