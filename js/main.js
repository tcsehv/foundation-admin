// Do not collapse the off-canvas menu if the screen >= 1600px
if(window.innerWidth >= 1600) {
    $("div.off-canvas-wrap").addClass("move-right big");
    $("#menu-collapse-btn").show();
    $('.inner-wrap').css('min-height', $(window).height() + 'px');
}

$(document).ready( function() {
    // Do not collapse the off-canvas menu if the screen is resized to >= 1600px
    $(window).on("resize", function() {
        if(window.innerWidth >= 1600) {
            $("div.off-canvas-wrap").addClass("move-right big");
            $("#menu-collapse-btn").show();
            $('.inner-wrap').css('min-height', $(window).height() + 'px');
        }
        else {
            $("div.off-canvas-wrap").removeClass("move-right big");
            $("#menu-collapse-btn").hide();
        }
    });

    // Menu collapse switcher
    $("#menu-collapse-btn").on("click", function(){
        var content = $("div.off-canvas-wrap");
        if (content.hasClass("move-right big")){
            content.removeClass("move-right big");
            $(this).find("i").removeClass("fi-arrows-out").addClass("fi-arrows-in");
        }
        else {
            content.addClass("move-right big");
            $(this).find("i").removeClass("fi-arrows-in").addClass("fi-arrows-out");
        }
    });

    // Stretch Foundation Off canvas to full height of the page
    $('a[class*="off-canvas-toggle"]').click(function() {
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
        $('body,html').animate({
            scrollTop: 0
        }, 400);
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
     { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1", "type" : "page" },
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

     // Interact with the JStree
     $('#tree').jstree(true).select_node('child_node');

    // Modal
    $("body").on('click', "#close-modal", function(){
        $('#modal').foundation('reveal', 'close');
        return false;
    });
    $("body").on('click', "#progress-modal-btn", function(){
        $(this).css("opacity", ".6").find('i').removeClass("fi-check").addClass("fi-loop");
        setTimeout(function () {
            $('#progress-modal').foundation('reveal', 'open');
        }, 4000);
        return false;
    });

    // Select2
    $("#select2example").select2({
        placeholder: "Select a country"
    });
});
