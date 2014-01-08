$(document).ready( function() {
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
        $('.wrapper').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Call the Fuel UX tree function
    var treeDataSource = new TreeDataSource({
        data: [
            { name: 'Test Folder 1', type: 'folder', additionalParameters: { id: 'F1' } },
            { name: 'Test Folder 2', type: 'folder', additionalParameters: { id: 'F2' } },
            { name: 'Test Item 1', type: 'item', additionalParameters: { id: 'I1' } },
            { name: 'Test Item 2', type: 'item', additionalParameters: { id: 'I2' } }
        ],
        delay: 400
    });

    $('#MyTree').tree({ dataSource: treeDataSource });
    $('#myDatepicker').datepicker();
});


