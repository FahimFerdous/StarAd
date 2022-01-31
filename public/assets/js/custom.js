window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function () {
    $(".main_Image2").imagezoomsl({
        zoomrange: [3, 3],
    });
});

$(document).ready(function () {
    $(".thumb-images img").click(function () {
        var image = $(this).attr("src");
        $(".mainImageContainer img").attr("src", image);
        $(".main_Image3").attr("src", image);
    });
});

