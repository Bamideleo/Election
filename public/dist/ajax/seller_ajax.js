$(function(){
//get brand script start
GetBrand();
function GetBrand(){
$.ajax({
    type:'ajax',
    url:'../Admin/getBrand',
    success: function(data){
        $('#show_select').html(data);
    },
    error: function(){
        alert('Data not found');
    }
})
}
// get brand script end
// hide section script
$('#second_section').hide();
$('#three_section').hide();
$('#four_section').hide();
$('#five_section').hide();
$('#six_section').hide();
$('#seven_section').hide();
$('#eight_section').hide();
//general details section start
$('#btn_general_info').click(function(){
    var mobile_title = $('#mobile_title').val();
    var mobile_brand = $('#mobile_brand').val();
    var model_no = $('#model_no').val();
    var model_name = $('#model_name').val();
    var color =$('input[name=color]:checked').val();
    var sim = $('input[name=sim]:checked').val();
    var sim_type = $('input[name=sim_type]:checked').val();
    var otg = $('input[name=otg]:checked').val();
    if(mobile_title==""){
        M.toast({html:'Please Enter Mobile Title.'})
        $('#mobile_title').css({border:'1px solid rgb(192, 89, 106)'});
    }
    else if(mobile_brand==null){
        M.toast({html:'Please Select Mobile Brand'});
        $('#mobile_brand').css({border:'1px solid rgb(192, 89, 106)'});
    }
    else if(model_no==""){
        M.toast({html:'Please Enter Model Number'});
        $('#model_no').css({border:'1px solid rgb(192, 89, 106)'});
    }
    else if(model_name==""){
        M.toast({html:'Please Enter Model Name'});
        $('#model_name').css({border:'1px solid rgb(192, 89, 106)'});
    }
    else if(color==null){
        M.toast({html:'Please Select One Mobile Color'});
    }
    else if(sim==null){
        M.toast({html:'Please Select  Sim '});
    }
    else if(sim_type==null){
        M.toast({html:'Please Select One Sim Type'});
    }
    else if(otg==null){
       M.toast({html:'Please Select OTG Suport'});     
    }
    else{
       $.ajax({
           type:'ajax',
           method:'POST',
           url:'insertMobileGeneralInfo',
           data:{mobile_title:mobile_title,mobile_brand:mobile_brand,model_no:model_no,
        model_name:model_name,color:color,sim:sim,sim_type:sim_type,otg:otg},
        success:function(data){
                var id= data;
               $('#mobile_id').val(id); 
               $('#mobile_title').prop('disabled',true);
               $('#mobile_brand').prop('disabled',true);
               $('#model_no').prop('disabled',true);
               $('#model_name').prop('disabled', true);
               $('#btn_general_info').prop('disabled',true);
               $('body, html').animate({scrollTop:$('#first_section').height()+120},200);
               $('#second_section').show();
        },
        error:function(){
            alert('General Detail Insert Fails.');
        }
        
       });
    }
});
// general details section end
//display details script section start
$('#btn_display_details').click(function(){
var display_size=$('#display_size').val();
var display_res=$('#display_res').val();
var resolution_t=$('input[name=resolution_t]:checked').val();
var display_type= $('input[name=display_type]:checked').val();
var mobile_id= $('#mobile_id').val();
if(display_size==null){
    M.toast({html:'Please Select Display Size'});
    $('#display_size').css({border:'1px solid rgb(192, 89, 106)'});
}
else if(display_res==null){
    M.toast({html:'Please Select Display Resolution'});
    $('#display_res').css({border:'1px solid rgb(192, 89, 106)'});
}
else if(resolution_t==null){
    M.toast({html:'Please select one Resolution Type'})
}
else if(display_type==null){
    M.toast({html:'Plaese select one Display Type'})
}
else{
    $.ajax({
        type:'ajax',
        method:'POST',
        url:'insertMobileDisplayInfo',
        data:{display_size:display_size,display_res:display_res,resolution_t:resolution_t,display_type
        :display_type,mobile_id:mobile_id},
        success:function(data){
            $('#display_size').prop('disabled',true);
            $('#display_res').prop('disabled',true);
            $('#btn_display_details').prop('disabled',true);
            $('body, html').animate({scrollTop:$('#first_section').height()+$('#second_section').height()
            +220},200);
            $('#three_section').show();
        },
        error:function(){
            alert('insert display fails');
        }
    })
}
})
//display details script section end
//processor details script section start
$('#btn_processor_details').click(function(){
var operating_system = $('#operating_system').val();
var version= $('#version').val();
var processor_t= $('input[name=processor_t]:checked').val();
var processor_size=$('#processor_size').val();
var mobile_id= $('#mobile_id').val();
if(operating_system==null){
    M.toast({html:'Please Select Operating System'});
    $('#operating_system').css({border:'1px solid rgb(192, 89, 106)'});
}
else if(version==''){
    M.toast({html:'Please Enter Version'});
    $('#version').css({border:'1px solid rgb(192, 89, 106)'});
}
else if(processor_t==null){
    M.toast({html:'Please Select Processor Type'});
}
else if(processor_size==''){
    M.toast({html:'Please Enter Processor Size'});
    $('#processor_size').css({border: '1px solid rgb(192, 89, 106)'});
}
else{
   $.ajax({
       type:'ajax',
       method:'POST',
       url:'insertProcessorInfo',
        data:{operating_system:operating_system,version:version,processor_t:processor_t,
            processor_size:processor_size,mobile_id:mobile_id},
            success:function(data){
               $('#operating_system').prop('disabled',true);
               $('#version').prop('disabled',true);
               $('#processor_size').prop('disabled',true);
               $('#btn_processor_details').prop('disabled',true);
               $('body, html').animate({scrollTop:$('#first_section').height()+$('#second_section').height()+
            $('#three_section').height()+340},200);
               $('#four_section').show();
            },
            error: function(){
                alert('Processor Insert Fails')
            }
   })
}
})
// processor details script section end
// storage details script section start
$('#btn_storage_detail').click(function(){
  var internal_storage=$('#internal_storage').val();
  var s_ram=$('#s_ram').val();
  var expand=$('input[name=expand]:checked').val();
  var memory_card=$('input[name=memory_card]:checked').val();
  var memory=$('#memory').val();
  var mobile_id=$('#mobile_id').val();
  if(internal_storage==null){
      M.toast({html:'Please Select Storage'});
      $('#internal_storage').css({border:'1px solid rgb(192, 89, 106)'})
  }
  else if(s_ram==null){
    M.toast({html:'Please Select Ram'});
    $('#s_ram').css({border:'1px solid rgb(192, 89, 106)'})
  }
  else if(expand==null){
    M.toast({html:'Please Select Expandable'});
  }
  else if(memory_card==null){
      M.toast({html:'Please Select Memory Card '});
  }
  else if(memory==null){
      M.toast({html:'Please Select Card Slot'});
      $('#memory').css({border:'1px solid rgb(192, 89, 106)'})
  }
  else{
     $.ajax({
         type:'ajax',
         method:'POST',
         url:'insertStorageInfo',
         data:{internal_storage:internal_storage,s_ram:s_ram,expand:expand,memory_card:memory_card,
        memory:memory,mobile_id:mobile_id},
        success: function(data){
           $('#internal_storage').prop('disabled',true);
           $('#s_ram').prop('disabled',true);
           $('#memory').prop('disabled',true);
           $('#btn_storage_detail').prop('disabled',true);
           $('body, html').animate({scrollTop:$('#first_section').height()+$('#second_section').height()+
           $('#three_section').height()+$('#four_section').height()+460},200);
           $('#five_section').show();
        },
        error: function(){
            alert('Storage Details Fails');
        }
     })
  }
})
// storage details script section end
//camera detail script section start
$('#btn_camera_detail').click(function(){
   var primary_camera=$('input[name=primary_camera]:checked').val();
   var camera=$('#camera').val();
   var secondary_c=$('input[name=secondary_c]:checked').val();
   var camera_s=$('#camera_s').val();
   var flash=$('input[name=flash]:checked').val();
   var mobile_id=$('#mobile_id').val();
   if(primary_camera==null){
       M.toast({html:'Please Select Primary Camera'})
   }
   else if(camera==""){
    M.toast({html:'Please Enter Primary Camera'})
    $('#camera').css({border:'1px solid rgb(192, 89, 106)'})
   }
   else if(secondary_c==null){
    M.toast({html:'Please Select Secondary Camera'})
   }
   else if(camera_s==""){
    M.toast({html:'Please Enter Secondary Camera'})
    $('#camera_s').css({border:'1px solid rgb(192, 89, 106)'})
   }
   else if(flash==null){
    M.toast({html:'Please Select Flash'})
   }
   else{
       $.ajax({
           type:'ajax',
           method:'POST',
           url:'insertCameraInfo',
           data:{primary_camera:primary_camera,camera:camera,secondary_c:secondary_c,camera_s:camera_s,
        flash:flash,mobile_id:mobile_id},
        success:function(data){
           $('#camera').prop('disabled',true);
           $('#camera_s').prop('disabled',true);
           $('#btn_camera_detail').prop('disabled',true);
           $('body, html').animate({scrollTop:$('#first_section').height()+$('#second_section').height()+
           $('#three_section').height()+$('#four_section').height()+$('#five_section').height()
           +560},200);
           $('#six_section').show();
        },
        error:function(){
            alert("Camera Details Fails");
        }
       })
   }
})
//camera detail script section end
//connectivty detail script section start
$('#btn_connectivity').click(function(){
   var network = $('#network').val();
   var usb = $('input[name=usb]:checked').val();
   var bluetooth = $('input[name=bluetooth]:checked').val();
   var wifi = $('input[name=wifi]:checked').val();
    var battery = $('#battery').val();
    var mobile_id = $('#mobile_id').val();
   if(network==''){
       M.toast({html:'Please Enter Network Type'});
       $('#network').css({border:'1px solid rgb(192, 89, 106)'});
   }
   else if(usb==null){
       M.toast({html:'Please Select Mirco USB'});
   }
   else if(bluetooth==null){
       M.toast({html:'Please Select Bluetooth'});
   }
   else if(wifi==null){
       M.toast({html:'Please Select Wifi'});
   }
   else if(battery==''){
       M.toast({html:'Please Enter Battery'});
       $('#battery').css({border:'1px solid rgb(192, 89, 106)'});
   }
   else{
      $.ajax({
          type:'ajax',
          method:'POST',
          url:'insertConnectivtyInfo',
          data:{network:network,usb:usb,bluetooth:bluetooth,wifi:wifi,battery:battery,mobile_id:mobile_id},
          success: function(data){
              $('#network').prop('disabled',true);
              $('#battery').prop('disabled',true);
              $('#btn_connectivity').prop('disabled',true);
              $('body, html').animate({scrollTop:$('#first_section').height()+$('#second_section').height()+
              $('#three_section').height()+$('#four_section').height()+$('#five_section').height()+
              $('#six_section').height()+670},200);
              $('#seven_section').show();
          },
          error: function(){
            alert('Connectivity Insert Fails')
          }
      })
   }
})
// connectivity detail script section end
// listing detail script section start
$('#btn_listing_details').click(function(){
  var duration= $('#duration').val();
  var offers= $('#offers').val();
  var return_policy= $('#return_policy').val();
  var shipp = $('#shipp').val();
  var price = $('#price').val();
  var mobile_id = $('#mobile_id').val();
  if(duration==null){
      M.toast({html:'Please Select Duration'});
      $('#duration').css({border:'1px solid rgb(192, 89, 106)'});
  }
  else if(offers==null){
    M.toast({html:'Please Select Offers'});
    $('#offers').css({border:'1px solid rgb(192, 89, 106)'});
  }
  else if(return_policy==null){
    M.toast({html:'Please Select Return Policy'});
    $('#return_policy').css({border:'1px solid rgb(192, 89, 106)'});
  }
  else if(shipp==''){
    M.toast({html:'Please Enter Shipping Charge'});
    $('#shipp').css({border:'1px solid rgb(192, 89, 106)'});
  }
  else if(price==''){
    M.toast({html:'Please Enter Price'});
    $('#price').css({border:'1px solid rgb(192, 89, 106)'});
  }
  else{
      $.ajax({
          type:'ajax',
          method:'POST',
          url:'insertListingInfo',
          data:{duration:duration,offers:offers,return_policy:return_policy,shipp:shipp,price:price,
        mobile_id:mobile_id},
        success: function(data){
             $('#m_id').val(mobile_id);
             $('#duration').prop('disabled',true);
            $('#offers').prop('disabled',true);
            $('#return_policy').prop('disabled',true);
            $('#shipp').prop('disabled',true);
            $('#price').prop('disabled',true);
            $('#btn_listing_details').prop('disabled',true);
            $('#eight_section').show();
        },
        error: function(){
            alert('Listing Insert Fails');
        }
      })
  }
})
// listing detail script section end
// image upload script section start
$('#img-upload-form').on('submit',function(e){
e.preventDefault();
var img_one = $('#img_one').val();
var img_two = $('#img_two').val();
var img_three = $('#img_three').val();
var img_four = $('#img_four').val();
if(img_one==''){
    M.toast({html:'Please Choose First Image'})
}
else if(img_two==''){
    M.toast({html:'Please Choose Second Image'})
}
else if(img_three==''){
    M.toast({html:'Please Choose Third Image'})
}
else if(img_four==''){
    M.toast({html:'Please Choose Fourth Image'})
}
else{
   $.ajax({
       type:'ajax',
       method:'POST',
       url:'insertImageUpload',
       data:new FormData(this),
       cache:false,
       contentType:false,
       processData:false,
       success: function(data){
           $('#eight_section').html(data);
           $('btn_img_upload').prop('disabled',true);
       },
       error: function(){
        alert('Image Upload Fails');
       }
   })
}
})
// image upload script section end
// preview script section start
$('#mobile_title').keyup(function(){
    var mobile_title = $('#mobile_title').val();
    $('#show_title').html(mobile_title);
})
$('#show_select').on('change','#mobile_brand',function(){
    var mobile_brand = $(this).val();
    $('#show_brand').html(mobile_brand);
})
$('#model_no').keyup(function(){
    var model_no = $('#model_no').val();
    $('#show_model_no').html(model_no);
})
$('#model_name').keyup(function(){
    var model_name = $('#model_name').val();
    $('#show_model_name').html(model_name);
})
$('#display_size').change(function(){
    var display_size = $(this).val();
     $('#show_display_size').html(display_size);
})
// $('#display_res').change(function(){
//     var display_res = $(this).val();
//      $('#show_display_res').html(display_res);
// })
$('#operating_system').change(function(){
    var operating_system = $(this).val();
     $('#show_ope_sys').html(operating_system);
})
// $('#version').keyup(function(){
//     var version = $('#version').val();
//     $('#show_version').html(version);
// })
$('#processor_size').keyup(function(){
        var processor = $('#processor_size').val();
        $('#show_processor_s').html(processor);
    })
    // $('#internal_storage').change(function(){
    //     var internal_storage = $(this).val();
    //      $('#show_internal_store').html(internal_storage);
    // })
    $('#s_ram').change(function(){
        var ram = $(this).val();
         $('#show_ram').html(ram);
    })
    // $('#memory').change(function(){
    //     var memory = $(this).val();
    //      $('#show_memory').html(memory);
    // })
    $('#camera').keyup(function(){
        var camera = $('#camera').val();
        $('#show_camera').html(camera);
    })
    $('#camera_s').keyup(function(){
        var camera_s = $('#camera_s').val();
        $('#show_camera_s').html(camera_s);
    })
    $('#network').keyup(function(){
        var network = $('#network').val();
        $('#show_network').html(network);
    })
    // $('#battery').keyup(function(){
    //     var battery = $('#battery').val();
    //     $('#show_battery').html(battery);
    // })
    // $('#offers').change(function(){
    //     var offers = $(this).val();
    //     $('#show_offers').html(offers);
    // })
    // $('#return_policy').change(function(){
    //     var policy = $(this).val();
    //     $('#show_policy').html(policy);
    // })
    // $('#shipp').keyup(function(){
    //     var shipp = $('#shipp').val();
    //     $('#show_shipp').html(shipp);
    // })
    // $('#price').keyup(function(){
    //     var price = $('#price').val();
    //     $('#show_price').html(price);
    // })
     $('#duration').change(function(){
        var duration = $(this).val();
        $.ajax({
            type:'ajax',
            method:'POST',
            url:' check_auction_fixed_price_listing_fee',
            data:{duration:duration},
            success: function(data){
                $('#show_listing_fee').html(data);
                $('#fee').html(data);  
            },
            error: function(){
                alert('Error ! Show Listing Fee');
            }
        })
    })
// preview script section end
});