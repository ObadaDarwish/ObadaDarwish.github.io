/**
 * Created by ObadaDarwish on 07/05/2018.
 */
$(document).ready(function () {
    $("#name").fadeIn(1000);
    $("#jobTitle").fadeIn(2000);
    let currentDate = new Date();
    let startDate = new Date('07-01-2016');
    $("#yearCounter").text(currentDate.getFullYear() - startDate.getFullYear());

    $('#nav_home').click(function () {
        $('html').animate({scrollTop: 0}, 1000);
    });
    $('#aboutMe').slideDown(1500);
    $('#aboutMe').css('display', 'flex');

    $('#nav_project').click(function () {
        $('html').animate({scrollTop: $('.projects_block').offset().top}, 1000);
    });

    $('#scroll_up').click(function () {
        $('html').animate({scrollTop: 0}, 1000);
    });
    var gaugeOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: '#eee',
            height: 400,
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#a5a5a5',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: false
        },

        tooltip: {
            enabled: true
        },

        // the value axis
        yAxis: {
            stops: [
                [0.3, '#DF5353'], // red
                [0.5, '#DDDF0D'], // yellow
                [0.7, '#97ee83'], // yellow
                [0.9, '#55BF3B'] // green
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true,
                }
            }
        }
    };
// The speed gauge
    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Proficiency',
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Proficiency',
            data: [90],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">%</span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]

    }));
    $('.skill_wrapper').click(function () {
        let point = chartSpeed.series[0].points[0];
        const nodes = document.querySelectorAll('.skill_wrapper');
        nodes.forEach(node => {
            node.classList.remove('active');
        })
        this.classList.add('active');
        if (chartSpeed) {
            switch (this.id) {
                case 'angular': {
                    point.update(90);
                    break;
                }
                case 'react': {
                    point.update(90)
                    break
                }
                case 'redux': {
                    point.update(90)
                    break
                }
                case 'node': {
                    point.update(80)
                    break
                }
                case 'js': {
                    point.update(98)
                    break
                }
                case 'ts': {
                    point.update(80)
                    break
                }
                case 'html': {
                    point.update(98)
                    break
                }
                case 'css': {
                    point.update(98)
                    break
                }
                case 'scss': {
                    point.update(75)
                    break
                }
                case 'mongodb': {
                    point.update(60)
                    break
                }
                case 'mysql': {
                    point.update(60)
                    break
                }
                case 'git': {
                    point.update(75)
                    break
                }
                case 'gulp': {
                    point.update(45)
                    break
                }
                default: {
                    point.update(90)
                }

            }

        }


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
    if (($(this).scrollTop() + 350) >= $('#donuts').offset().top) {
        $('#donuts').css('opacity', '1');
    }
    if (($(this).scrollTop() + 350) >= $('#manar').offset().top) {
        $('#manar').css('opacity', '1');
    }
    if (($(this).scrollTop() + 350) >= $('#farm').offset().top) {
        $('#farm').css('opacity', '1');
    }

    // $('.header_block').css({background: $(this).scrollTop() > $('.my_details').offset().top ? 'rgba(0, 0, 0,1)' : 'rgb(159, 159, 159)'});
});
