$(function () {
    var menu = [
            {
                text: 'Anasayfa',
                url: 'index.html'
            },
            {
                text: 'Galeri',
                url: 'galeri.html'
            },
            {
                text: 'Davranışlar',
                url: 'davranislar.html'
            },
            {
                text: 'Beslenme',
                url: 'beslenme.html'
            },
            {
                text: 'İlginç Gerçekler',
                url: 'ilgincgercekler.html'
            },

            {
                text: 'Doğal Yaşam',
                url: 'yasam.html'
        },

        {
            text: 'Anatomi',
            url: 'anatomi.html'
    },

    {
        text: 'Üreme',
        url: 'ureme.html'
},

        {
            text: 'İletişim',
            url: 'iletisim.html'
    }
        ],
        i = 0;

    for (; i < menu.length; i++) {
        $('.menu').append(
            '<li><a href="' + menu[i].url + '" > ' + menu[i].text + '</a></li>'

        );
    }



});


function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
