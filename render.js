const Render = function () {
    const renderFrogs = function (frogs) {
        $("#game").empty()
        for (let i = 0; i < frogs.length; i++) {
            let frogBox = `<div class="frog" data-id="${frogs[i].id}" style="
            background-color: ${frog.randomColor()}; 
            width:${frogs[i].size()}px;
            height:${frogs[i].size()}px;
            left:${((Math.random() * ($('#game').width() - 100)))}px;
            top:${frogs[i].size() * 4}px;">      
            </div>`

            $("#game").append(frogBox)
        }
    }
    return {
        render: renderFrogs
    }
}