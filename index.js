$(document).ready(function () {
    let $heading = document.createElement('h1')
    $heading.textContent = 'Heading';
    document.querySelector('#heading').appendChild($heading);
})

let $button = document.createElement('button')
$button.innerText = 'black'
$button.setAttribute('id', 'button1')
document.querySelector('#nav').appendChild($button)

let $button2 = document.createElement('button')
$button2.innerText = 'white'
$button2.setAttribute('id', 'button2')
document.querySelector('#nav').appendChild($button2)

let $button3 = document.createElement('button')
$button3.innerText = 'slideToggle'
$button3.setAttribute('id', 'button3')
document.querySelector('#nav').appendChild($button3)

let $body = document.querySelector('#home')

$('#button1').on('click', function () {
    console.log('click1')
    $body.setAttribute('id', 'black')
})
$('#button2').on('click', function () {
    console.log('click2')
    $body.removeAttribute('id')
})
$('#button3').on('click', function () {
    console.log('click3')
    $('#slider').slideToggle("slow");
});

$('#submit').on('click', function (e) {
    e.preventDefault();
    let name = $('#name').val()
    let email = $('#email').val()
    let stuff = $('#stuff').val()

    $('h1').text(`${name}, ${email}, ${stuff}`)
})

$('.card-title>.button').on('click', function () {
    $(this).closest('.card').remove();
})

$('.load1').on('click', function () {
    $.get('https://dog.ceo/api/breeds/image/random')
        .then((data) => {
            let $img = document.createElement('img')
            $img.setAttribute('src', data.message)
            console.log($img)
            dogImg1.innerHTML = '';
            dogImg1.appendChild($img)
        })
})
$('.load2').on('click', function () {
    $.get('https://dog.ceo/api/breeds/image/random')
        .then((data) => {
            let $img = document.createElement('img')
            $img.setAttribute('src', data.message)
            console.log($img)
            dogImg2.innerHTML = '';
            dogImg2.appendChild($img)
        })
})
