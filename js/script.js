

// :::::::::: jQuery ::::::::::::::::
$(document).ready(function(){
    //counter example-1
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //counter example-2
    $("#num1").countMe(40,65);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 50);
    $("#num4").countMe(100,200);

    //counter example-3
    const timerElement = $('.timer');
    timerElement.TickWatch({
        direction: 'up',
        startTime: '00:00:50',
    })
    

    timerElement.on('TickWatch.end', function(){
        alert('End!')
    })

    $('#stop').on('click', function () {
        timerElement.TickWatch('stop');
    });

    $('#start').on('click', function () {
        timerElement.TickWatch('start');
    });

    $('#clear').on('click', function () {
        timerElement.TickWatch('clear');
    });


    //counter example-4
    $("#countdown").countdown360({
        radius      : 60,
        seconds     : 100,
        fontColor   : '#FFFFFF',
        autostart   : false,
        onComplete  : function () { console.log('done') }
       }).start()



   
    

      


})


