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
    $('.panel').each(function (i) {
        $(this).find('.panel-nav a').attr('href', '#panel-'+ i);
        if( i == 0) {
            $(this).find('.contentWrapper .content').attr('id', 'panel-'+ i);
        }
    });

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

    // Remove button function for input fields
    function FieldRemoveBtn(parent){
        $("<a class='button tiny alert absolute'><i class='fi-x'></i></a>").appendTo(parent);
        $('a.alert.absolute').on('click', function(){
            $(this).closest('.row').remove();
        });
    }

    // Add remove button to existing fields
    $('div.rowWrapper').find('input[id^="item"]').each(function(i){
        if(i != 0) {
            FieldRemoveBtn($(this).closest('.row'));
        }
    });

    // Get previous row in div.rowWrapper
    var lastRow = $("div.rowWrapper div.row:last-child").clone();

    // Add adstypesfields
    $("a.adField").on("click", function(event){
       event.preventDefault();

       var inputVal = lastRow.find('input').attr('id').substring(4);
       var curNum = parseInt(inputVal);

       var newRow = lastRow.clone();
       newRow.find('input').attr("id", "item" + (curNum + 1))
       .attr("name", "item" + (curNum + 1))
       .closest("div.row").find('label').attr("for", "item" + (curNum + 1));
        newRow.find('input').removeAttr('value');
        newRow.appendTo("div.rowWrapper");

        lastRow = newRow;
        FieldRemoveBtn(lastRow);
    });

    // Remove values in closest form
    $("button.removeVal").on('click', function(e){
        e.preventDefault();
        $(this).closest('form').find('input').each(function(){
            console.log($(this));
            $(this).removeAttr('value');
        });
    });

    /*     // Set JStree
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
    });*/
});
