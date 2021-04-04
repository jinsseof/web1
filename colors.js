
var Links = {
    setColor:function (color) {
    //     pure js
    //     var links = document.querySelectorAll('a');
    //     var i = 0;
    //     while (i<links.length) {
    //         links[i].style.color = color;
    //         i++;
    //     }

    // jquery
    $('a').css('color', color);
    }
}

var Body = {
    setColor:function (target, color) {
        // pure js
        // target.style.color = color;

        // jquery
        target.css('color', color);
    },
    setBackgroundColor:function (target, color) {
        // pure js
        // target.style.backgroundColor = color;

        // jquery
        target.css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    // pure js
    // var target = document.querySelector('body');
    // jquery
    var target = $('body');

    if (self.value === 'night') {
        Body.setBackgroundColor(target, 'black');
        Body.setColor(target, 'white')
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor(target, 'white');
        Body.setColor(target, 'black')
        self.value = 'night';
        
        Links.setColor('black');
    }
}