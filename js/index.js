 $(document).ready(function(){
        $('.subform button').click(function(){
            $('.subform').addClass('expand');
            $('.subform input').css('visibility','visible');
            $(this).removeClass('deactive');
            $(this).addClass('active');
            $('button.active').click(function(){
                debugger;
            $('button.active').removeClass('active');
            $('button').addClass('deactive');
            $('.subform').removeClass('expand');
            $('.subform input').css('visibility','hidden');
            setTimeout(function(){
       $('.subform button .thnk').addClass('show');
   }, 1000);
        })
            setTimeout(function(){
       $('.subform button .arrow').addClass('grow');
   }, 1000);
        })
    })