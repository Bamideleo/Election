
$(document).ready(function(){
//categories section start
$('#mycate').submit(function(e){
  e.preventDefault();
  var form = $(this);
   var submit = $(this).find(':submit');
   if(form.data('#mycate') !== 'submitted'){
     form.attr('id','submitted');
    $.ajax({
      url: form.attr('action'),
      method:'post',
      enctype:'multipart/form-data',
      data:new FormData(form[0]),
      contentType:false,
      processData:false,
      success: function(response){
        console.log('success');
        window.location.href ='/admin/categoeries'
      },
      error: function(response){
        var name_data = $('[name-data]').html('').removeClass('valid');
        if(response.responseJSON.hasOwnProperty('errors')){
          $.each(response.responseJSON.errors,function(key,value){
            var name_data = $('[name-data="'+ key +'"]').html(value[0]).addClass('valid');
          })
        }
      }

    })
  }
})
//categories section end
  //product section start
    $('#myform').submit(function(e){
        e.preventDefault();
        // data = $(this).serialize();
        // url = $(this).attr('action');
        var form = $(this);
       var submit = $(this).find(':submit');
       if(form.data('#myform') !== 'submitted'){
         form.attr('id','submitted');
        $.ajax({
          url: form.attr('action'),
          method:'post',
          enctype:'multipart/form-data',
          data:new FormData(form[0]),
          contentType:false,
          processData:false,
          success: function(response){
            console.log('success');
            window.location.href ='/admin/product'
            },
            error: function(response){
              var name_data = $('[name-data]').html('').removeClass('valid');
              if (response.responseJSON.hasOwnProperty('errors')) {
                $.each(response.responseJSON.errors,function(key,value){
                 var name = $('[name="'+ key +'"]').addClass('invalid');
                 var name_data = $('[name-data="'+ key +'"]').html(value[0]).addClass('valid');
                })
              }
            }
        })
        
      }
    })
    //product section end
    //item section start
    $('#myitem').submit(function(e){
      e.preventDefault();
      var form = $(this);
       var submit = $(this).find(':submit');
       if(form.data('#myitem') !== 'submitted'){
         form.attr('id','submitted');
        $.ajax({
          url: form.attr('action'),
          method:'post',
          enctype:'multipart/form-data',
          data:new FormData(form[0]),
          contentType:false,
          processData:false,
          success: function(response){
            console.log('success');
            window.location.href ='/admin/items'
          },
          error: function(response){
            var name_data = $('[name-data]').html('').removeClass('valid');
            if(response.responseJSON.hasOwnProperty('errors')){
              $.each(response.responseJSON.errors,function(key,value){
                var name_data = $('[name-data="'+ key +'"]').html(value[0]).addClass('valid');
              })
            }
          }

        })
      }
    })
    //item section end

    //brand section start

    $('#mybrand').submit(function(e){
      e.preventDefault();
      var form = $(this);
       var submit = $(this).find(':submit');
       if(form.data('#mybrand') !== 'submitted'){
         form.attr('id','submitted');
        $.ajax({
          url: form.attr('action'),
          method:'post',
          enctype:'multipart/form-data',
          data:new FormData(form[0]),
          contentType:false,
          processData:false,
          success: function(response){
            console.log('success');
            window.location.href ='/admin/brands'
          },
          error: function(response){
            var name_data = $('[name-data]').html('').removeClass('valid');
            if(response.responseJSON.hasOwnProperty('errors')){
              $.each(response.responseJSON.errors,function(key,value){
                var name_data = $('[name-data="'+ key +'"]').html(value[0]).addClass('valid');
              })
            }
          }

        })
      }
    })
    //brand section end
})
