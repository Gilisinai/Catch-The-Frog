const frog = Frog()
const renderer = Render()

renderer.render(frog.frogs())

$("#start").on("click", function () {
    renderer.render(frog.get())
    $("#frogCount").text(frog.level())

    $("#sec").text(frog.timer())
    

    if (frog.count() === 0) {
        frog.up()
        $("#levelCount").text(frog.level())
        $("#frogCount").text(frog.level())
        renderer.render(frog.get())
    }
})



$("#game").on("click", ".frog", function () {
    let frogID = $(this).data("id")
    frog.remove(frogID)
    $("#frogCount").text(frog.count())
    renderer.render(frog.get())
})

