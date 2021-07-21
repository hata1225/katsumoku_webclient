$(function(){
    $('a.sampleclose')
    .on('click',function(){
        $('div.sampleview')
        .animate({
            top: '-10000px'
            },
            0
            );
        }
    );

    $('a.tameshiyomi')
    .on('click',function(){
        $('div.sampleview')
        .animate({
            top: '0px'
        },
        0
        );
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });
});