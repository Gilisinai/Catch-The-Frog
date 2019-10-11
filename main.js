const frog = Frog()
const timer = Timer()
const renderer = Render()

renderer.render(frog.frogs())



$("#start").on("click", function () {
    frog.up()
    renderer.render(frog.get())
    $("#frogCount").text(frog.level())
    
    timer.start()
    
})

$("#game").on("click", ".frog", function () {
    let frogID = $(this).data("id")
    frog.remove(frogID)
    $("#frogCount").text(frog.count())
    if (frog.count() === 0) {
        frog.up()
        timer.moreTime()
        $("#levelCount").text(frog.level())
        $("#frogCount").text(frog.level())
        renderer.render(frog.get())
    }
    renderer.render(frog.get())
    
})

