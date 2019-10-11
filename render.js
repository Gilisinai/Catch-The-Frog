const Render = function () {
    const renderFrogs = function (frogs) {
        $("#game").empty()
        for (let i = 0; i < frogs.length; i++) {
            let frogBox = `<div class="frog" data-id="${frogs[i].id}" style="
            left:${((Math.random() * ($('#game').width() - 100)))}px;
            top:${frogs[i].size() * 4}px;"> 
            <i class="fas fa-frog" style="
            font-size: ${frogs[i].size()}px;
            color: ${frog.randomColor()};"></i>
            </div>`

            $("#game").append(frogBox)
        }
    }
    return {
        render: renderFrogs
    }
}