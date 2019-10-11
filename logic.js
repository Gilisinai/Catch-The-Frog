const Frog = function () {

    let level = 0
    let frogs = []

    const getFrogs = function () {
        return frogs
    }

    const addFrogs = function () {

        for (let i = 0; i < level; i++) {
            numID = frogs.length + 1
            let num = Math.floor(Math.random() * 100)
            frogs.push({
                size: function () {
                    if (num < 15) {
                        num = 15
                    }
                    return num
                },
                id: numID
            })
        }

        return frogs.length
    }

    const getLevel = function () {
        return level
    }

    const countFrogs = function () {
        let number = frogs.length
        return number
    }

    const removeFrog = function (frogID) {
        for (let i = 0; i < frogs.length; i++) {
            if (frogs[i].id === frogID) {
                frogs.splice(i, 1)
            }
        }
    }

    const levelUp = function () {
        level += 1
        addFrogs()
    }

    const randomColor = function () {
        let num1 = Math.floor(Math.random() * 255)
        let num2 = Math.floor(Math.random() * 255)
        let num3 = Math.floor(Math.random() * 255)

        return `rgb(${num1},${num2},${num3})`
    }

    return {
        get: getFrogs,
        frogs: addFrogs,
        level: getLevel,
        count: countFrogs,
        remove: removeFrog,
        up: levelUp,
        randomColor: randomColor

    }
}

const Timer = function() {
    let timeLeft = 10;
    const start = function() {
        time = setInterval(function () {
    
            timeLeft = timeLeft - 1;
            if(timeLeft < 5) {
                $(".sec").addClass("blink")
            }
            if (timeLeft == 0) {
                clearInterval(time);
                $("#game").text("game over")
                $(".sec").removeClass("blink")
            }
            
            $("#time").text(timeLeft)
        }, 1000);
    }

    const moreTime = function() {
        timeLeft += 2
    }
    return {
        start: start,
        moreTime: moreTime
    }
}