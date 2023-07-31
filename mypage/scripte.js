$(document).ready(function(){

    // const btn = document.getElementById('modalBtn');
    // const modal = document.getElementById('modalWrap');
    // const closeBtn = document.getElementById('closeBtn');
    $("#modalBtn").click(function(){
      $("#modalWrap").fadeIn()
    })
    $("#closeBtn").click(function(){
      $("#modalWrap").fadeOut()
    })
    // $(documen).click(function(event){
    //   if($(event.target).is('#modalBody')){
    //     $("#modalWrap").fadeOut();
    //   }
    })
    // btn.onclick = function() {
    //   modal.style.display = 'block';
    //   console.log('modalBtn')
    // }
    // closeBtn.onclick = function() {
    //   modal.style.display = 'none';
    // }
    
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  

    $(document).ready(function(){
  
      $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })
    
    })