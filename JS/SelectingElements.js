/**
 * Created by jenniferraines on 3/31/15.
 */

$(function(){

    var box = $('.box');

    box.on('click', function(){
        box.removeClass('selected');
        $(this).addClass('selected');

        });

    });
