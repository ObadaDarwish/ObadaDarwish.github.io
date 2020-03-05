/**
 * Created by ObadaDarwish on 07/05/2018.
 */
$(document).ready(function () {
    $("#name").fadeIn(1000);
    $("#jobTitle").fadeIn(2000);

    $('#nav_home').click(function () {
        $('html').animate({scrollTop: 0}, 1000);
    });
    $('#aboutMe').slideDown(1500);
    $('#aboutMe').css('display','flex');
    $('#nav_project').click(function () {
        $('html').animate({scrollTop: $('.projects_block').offset().top}, 1000);
    });

    $('#scroll_up').click(function () {
        $('html').animate({scrollTop: 0}, 1000);
    });

});

function hoverProject(id) {
    $('#' + id).hover(function () {
            $('#' + id + ' .img_overlay').css({display: "flex"}, 800);
            $('#' + id + ' .image').css({
                transform: 'scale(1.2)',
                cursor: 'pointer'
            });
        }, function () {
            $('#' + id + ' .img_overlay').css({display: "none"}, 800);
            $('#' + id + ' .image').css({
                transform: 'scale(1)',
                cursor: 'pointer'
            });
        }
    );
}
function openProfile(url) {
    window.open(url, '_blank');
}

$(document).scroll(function () {
    if (($(this).scrollTop()+350) >= $('#donuts').offset().top) {
        $('#donuts').css('opacity', '1');
    }
    if (($(this).scrollTop()+350) >= $('#manar').offset().top) {
        $('#manar').css('opacity', '1');
    }
    if (($(this).scrollTop()+350) >= $('#farm').offset().top) {
        $('#farm').css('opacity', '1');
    }

    $('.header_block').css({background: $(this).scrollTop() > $('.my_details').offset().top ? 'rgba(0, 0, 0,1)' : 'rgba(0, 0, 0,0.5)'});
});
