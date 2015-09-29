$(function () {
    var menu = [
            {
                text: 'Anasayfa',
                url: ''
            },
            {
                text: 'Galeri',
                url: 'galeri.html'
            },
            {
                text: 'Davranışlar',
                url: 'davranislar.html'
            }
        ],
        i = 0;

    for (; i < menu.length; i++) {
        $('.menu').append(
            '<li><a href="' + menu[i].url + '" > ' + menu[i].text + '</a></li>'

        );
    }



});
