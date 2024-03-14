$(function(){

    vereficarmenu()
    function vereficarmenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
        
                'timeout':10000,
                "url":href,
                'error':function( jqXRH,  textStatus, errorThrowm){
                    if(jqXRH.statusText == 'Not Found'){
                        $('#container').html('Not Found');
                    }
                },
                'success':function(data){
                    $('#container').html(data)
                }
            })
            return false;
        })
    }

})