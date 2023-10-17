$(document).ready(function() {
    var countGallery = $(".galleryImg").length;

    $(".galleryImg").each(function (i){
        $(this).attr('data-gallery-id',i);
        $(this).click(function (){
            $("#modalPic").attr('src',$(this).attr('src'));
            $("#modalPic").attr('alt',$(this).attr('alt'));
            $("#modalPic").attr('data-gallery-id',$(this).attr('data-gallery-id'));
            $("#modalGallery").modal("show");
        });
    });

    $(document).on("click","#gallery_next",function (){
       var nextId = parseInt($(this).closest(".modal-content").find("#modalPic").attr('data-gallery-id')) + 1;
        console.log(nextId);
        if (nextId == countGallery)
            nextId = 0;
        $("#modalPic").attr('src',$("img[data-gallery-id='"+ nextId +"']").attr('src'));
        $("#modalPic").attr('alt',$("img[data-gallery-id='"+ nextId +"']").attr('alt'));
        $("#modalPic").attr('data-gallery-id',$("img[data-gallery-id='"+ nextId +"']").attr('data-gallery-id'));
    });
    $(document).on("click","#gallery_prev",function (){
        var thisId = parseInt($(this).closest(".modal-content").find("#modalPic").attr('data-gallery-id'));
        var prevId = thisId-1;
        console.log(prevId);
        if (thisId == 0)
            prevId = countGallery-1;
        $("#modalPic").attr('src',$("img[data-gallery-id='"+ prevId +"']").attr('src'));
        $("#modalPic").attr('alt',$("img[data-gallery-id='"+ prevId +"']").attr('alt'));
        $("#modalPic").attr('data-gallery-id',$("img[data-gallery-id='"+ prevId +"']").attr('data-gallery-id'));
    });

    //Lazy Load

    $('.galleryImg').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });


});