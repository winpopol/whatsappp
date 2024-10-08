anime.timeline({
    loop: false
})
.add({
    targets: '.ml5 .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
}).add({
    targets: '.ml5 .line',
    duration: 1000,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
}).add({
    targets: '.ml5 .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600'
}).add({
    targets: '.ml5 .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=300'
}).add({
    targets: '.ml5 .letters-right',
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600'
});


$('#pageone').show();
$('#pagetwo').hide();

$('#sendagain').on('click', function() {
    $('#pageone').show();
    $('#pagetwo').hide();
});

$('#submit').on('click', function() {    
    var checkerror;
    var number = $('#number').val();
    var message = $('#message').val();
    var errormessage = $('#error');
    if(number == "" || number.length < 1) {
        errormessage.html('Please put the number!');
        checkerror = true;
    } else {
        errormessage.html('');
        checkerror = false;
    }

    if(checkerror == true) {} else {
        if(message == "" || message.length < 1){
            $('#pageone').hide();
            $('#pagetwo').show();
            var url = "https://wa.me/+"+number;
            window.open(url, '_blank');
        } else {
            $('#pageone').hide();
            $('#pagetwo').show();
            var url = "https://wa.me/+"+number+"?text="+message;
            window.open(url, '_blank');
        }
    }
});
