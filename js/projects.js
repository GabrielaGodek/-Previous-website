$('.weatherApp').hover(function () {
    $('.weatherApp-p').html('<a href="weatherApp/weatherApp.html">Link do projektu</a>')
}, function () {
    $('.weatherApp-p').text('')
})

$('.todoList').hover(function () {
    $('.todoList-p').html('<a href="todoList/todoList.html">Link do projektu</a>')
}, function () {
    $('.todoList-p').text('')
})

$('.password').hover(function () {
    $('.password-p').html('<a href="password/pswrdVal.html">Link do projektu</a>')
}, function () {
    $('.password-p').text('')
})

$('.earlierWeb').hover(function () {
    $('.earlierWeb-p').html('<a href="wczesniejsza/index1.html">Link do projektu</a>')
}, function () {
    $('.earlierWeb-p').text('')
})

$('.cubicCube').hover(function () {
    $('.cubicCube-p').html('<a href="kostka/kostka.html">Link do projektu</a>')
}, function () {
    $('.cubicCube-p').text('')
})
$('.fadingSquere').hover(function () {
    $('.fadingSquere-p').html('<a href="zanikajacy/squere.html">Link do projektu</a>')
}, function () {
    $('.fadingSquere-p').text('')
})
$('.landingPage').hover(function () {
    $('.landingPage-p').html('<a href="komercyjne/LP.html">Link do projektu</a>')
}, function () {
    $('.landingPage-p').text('')
})

$('.weatherApp, .todoList, .password, .earlierWeb, .cubicCube, .fadingSquere, .landingPage').hover(function () {
    $('.weatherApp-p, .todoList-p, .password-p, .earlierWeb-p, .cubicCube-p, .fadingSquere-p, .landingPage-p').css({
        'border': '3px solid #CBD0CF',
        'border-radius': '10px',
        'background-color': 'white',
    })
}, function () {
    $('.weatherApp-p, .todoList-p, .password-p, .earlierWeb-p, .cubicCube-p, .fadingSquere-p, .landingPage-p').css({
        'border': 'none',
        'border-radius': 'none',
    })
})

// project.css('border', '3px solid black')


// $('.todoList').hover(function () {
//     $('.todoList-p').html('<a href="#">Link do projektu</a>')
//     border()
// }, function () {
//     $('.todoList-p').text('')
//     noBorder()
// })

// function border() {
//     $(this).css('border', '3px solid black')
//     $(this).css('border-radius', '10px')
//     $(this).css('padding', '2px 10px')
// }
// function noBorder() {
//     $(this).css('border', 'none')
//     $(this).css('padding', '0')
// }