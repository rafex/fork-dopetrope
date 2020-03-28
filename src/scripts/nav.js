/*
	Dopetrope by HTML5 UP and modified by @rafex
	rafex.dev | @rafex
	Free for personal and commercial use under the CCA 4.0 license (rafex.dev/templates/fork-dopetrope/license)
*/

(function($) {
    const nav = $('#nav ul li');
    const pathArray = window.location.pathname.split('/');

    if (pathArray.length >= 2) {
        nav.each(function() {
            if(pathArray[1]===""  && $(this).text() === "Home"){
                $(this).addClass('current');
            } else if(pathArray[1]==="index.html" && $(this).text() === "Home"){
                $(this).addClass('current');
            }  else if(pathArray[1]==="left-sidebar.html" && $(this).text() === "Left Sidebar"){
                $(this).addClass('current');
            } else if(pathArray[1]==="right-sidebar.html" && $(this).text() === "Right Sidebar"){
                $(this).addClass('current');
            } else if(pathArray[1]==="no-sidebar.html" && $(this).text() === "No Sidebar"){
                $(this).addClass('current');
            }

        });
    }

})(jQuery);
