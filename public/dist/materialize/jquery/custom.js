$( document ).ready(function(){
    $(".dropdown-trigger").dropdown({hover:true,
        coverTrigger:false,	
       
     });
   //sidenav script
    $(".sidenav").sidenav();  
    // image slider script
    $(".carousel.carousel-slider").carousel({
        fullWidth: true, 
        indicators: true,
    });
    autoplay();
    function autoplay(){
        $('.carousel').carousel('next')
        setTimeout(autoplay, 5500)
    }

    $('.collapsible').collapsible();

    $('.modal').modal({
        dismissible: false
    }); 
    //topbar scroll section
$(window).scroll(function(){
    var sticky = $('#sticky'),
        scroll = $(window).scrollTop();
    
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    });
    
    $('#thumbnail img').click(function(e){
        e.preventDefault();
        $('#thum img').attr("src",$(this).attr("src"))
    })
    
//email validation script start
// function ValidateEmail(email) {
//         var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//         return expr.test(email);
//     };
//     $("#email").keyup(function () {
//         if (!ValidateEmail($("#email").val())) {
//            $('#button_reg').prop("disabled",true);
//         }
//         else {
//             $('#button_reg').prop("disabled",false);
//         }
//     });
//     $("#mobile_no").keyup(function(){
//         var mobile_no = $("#mobile_no").val();
//         var mobile_no_len = $("#mobile_no").val().length;
//         if(mobile_no_len > 0){
//           if(mobile_no_len ==11){
//             $("#button_reg").prop("disabled", false );
//           } 
//           else{
//             $("#button_reg").prop("disabled", true); 
//           } 
//         }
//         else{
//             $("#button_reg").prop("disabled", true);
//         }
//     })
//     $("#pincode").keyup(function(){
//         var pincode = $("#pincode").val();
//         var pincode_len = $("#pincode").val().length;
//         if(pincode_len>0){
//             if(pincode_len==6){
//                 $("#button_reg").prop("disabled", false);  
//             }
//             else{
//                 $("#button_reg").prop("disabled", true);
//             }
//         }
//         else{
//             $("#button_reg").prop("disabled", true);
//         }
//     })
//     $("#panumber").keyup(function(){
//         var panumber = $("#panumber").val();
//         var panumber_len= $("#panumber").val().length;
//         if(panumber>0){
//             if(panumber_len==10){
//                 $("#button_reg").prop("disabled", false);  
//             }
//             else{
//                 $("#button_reg").prop("disabled", true);
//             }
//         }
//         else{
//             $("#button_reg").prop("disabled", true);
//         }
//     })
//     $("#gst_no").keyup(function(){
//         var gst_no = $("#gst_no").val();
//         var gst_no_len= $("#gst_no").val().length;
//         if(gst_no_len>0){
//             if(gst_no_len==12){
//                 $("#button_reg").prop("disabled", false);  
//             }
//             else{
//                 $("#button_reg").prop("disabled", true);
//             }
//         }
//         else{
//             $("#button_reg").prop("disabled", true);
//         }
//     })
});

