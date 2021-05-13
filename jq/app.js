let i=0;
$('.add-button').change(function(event)
{
    console.log('changed')
    $('.upload-cover-img').remove();
    // Add user uploaded image
    var image=URL.createObjectURL(event.target.files[0])
    $('.Gallery-row').append(`<div class="col-6 img-col-${i} mt-2"><img src=""class="img-fluid img-gallery-${i}"></div>`)
    $(`.img-gallery-${i}`).attr('src',image);
    // Delete user uploaded image
    $(`.img-gallery-${i}`).dblclick(function(){
        $(this).remove();
    })
    i++;
})