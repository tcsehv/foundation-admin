$(document).ready( function() {
    // Stretch Foundation Off canvas to full height of the page
    $('a.left-off-canvas-toggle').click(function() {
        $('.inner-wrap').css('min-height', $(window).height() + 'px');
    });

    // Accordion panels
    $('.panel-nav').find("a[href^='#panel']").on('click', function () {
        var content = $(this).closest("div.panel").find("div.contentWrapper");
        if (content.hasClass("active")) {
            content.slideUp(300).removeClass("active");
            $(this).find("i").removeClass("fi-minus").addClass("fi-plus");
            return false;
        }
        else {
            content.slideDown(300).addClass("active");
            $(this).find("i").removeClass("fi-plus").addClass("fi-minus");
            return false;
        }
    });

    // Back to top button
    $('#top').on('click', function () {
        $('body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Set datepicker
    $('#datepicker1').fdatepicker();

    // Set JStree
    $('#tree').jstree({
        'core' : {
            'data' : [
                { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
                { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
                { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1", "type" : "page"},
                { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2", "type" : "page" },
                { "id" : "ajson5", "parent" : "ajson2", "text" : "Child 3", "type" : "media" }
            ],
            'check_callback' : true,
            'themes' : {
                'dots' : false
            }
        },
        'plugins' : [ "dnd", "types"],
        'types' : {
            "default" : {
                "icon" : "fi-folder"
            },
            "page" : {
                "icon" : "fi-page"
            },
            "media" : {
                "icon" : "fi-photo"
            }
        }
    });

    // Listen for changes on the tree
    $('#tree').on('changed.jstree', function (e, data) {
        //console.log(data.selected);
    });

    // Interact with the tree
    $('#tree').jstree(true).select_node('child_node');

    // End JStree

});