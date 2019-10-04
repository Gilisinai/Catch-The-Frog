const Frog = function () {

    let level = 0
    let frogs = []
    
    let timeleft = 5

    const getFrogs = function () {
        return frogs
    }

    const addFrogs = function () {

        
        for (let i = 0; i < level; i++) {
            numID = frogs.length + 1
            frogs.push({
                size: Math.floor(Math.random() * 100),
                position: Math.floor(Math.random() * 200),
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
        timeleft += 4
        addFrogs()
    }

    const randomColor = function () {
        let num1 = Math.floor(Math.random() * 255)
        let num2 = Math.floor(Math.random() * 255)
        let num3 = Math.floor(Math.random() * 255)

        return `rgb(${num1},${num2},${num3})`
    }

    

    const timer = function () {
        setInterval(function () {
            timeleft -= 1
            if (timeleft < 0) {
                clearInterval(timer)

            }

        }, 1000)
        return timeleft
    }


    return {
        get: getFrogs,
        frogs: addFrogs,
        level: getLevel,
        count: countFrogs,
        remove: removeFrog,
        up: levelUp,
        randomColor: randomColor,
        timer: timer
    }
}

