$(function(){
    let input = $('#input')
    let button = $('#button')
    let list =  $('#list')
    let clear = $('#clrbtn')
    
    button.click(()=>{
        list.append(
            $('<li>')
            .append(
                $('<span>'). text(input.val())
            ).addClass('listitems')
            .append(
                $('<button>').text('X').click((e) =>
                $(e.currentTarget).parent().toggleClass('strike')
            ).addClass('offset-4')
        ).append(
            $('<button>').text('⬇').click((e) =>
            $(e.currentTarget).parent().insertAfter(
                $(e.currentTarget).parent().next()
            )
        )
    ).append(
        $('<button>').text('⬆').click((e) =>
        $(e.currentTarget).parent().insertBefore(
            $(e.currentTarget).parent().prev()
        )
    )  
).addClass('list-group-item')   

)
input.val('')
})

clear.click(()=>
$('.strike').remove()
)
})
