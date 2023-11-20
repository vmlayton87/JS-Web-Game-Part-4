function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, onDirectionChange) {
        let direction = null
        let x = left
        let y = bottom

        function moveCharacter() {
        if (direction === 'north') {y = y + 1}
        if (direction === 'south') {y = y - 1}
        if (direction === 'east') {x = x + 1}
        if (direction === 'west') {x = x - 1}

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        }    
        setInterval(moveCharacter, 1)


        document.addEventListener('keydown', function(event){
        if (event.repeat) return
        if (event.key === 'ArrowUp') {direction = 'north'}
        if (event.key === 'ArrowDown') {direction = 'south'}
        if (event.key === 'ArrowRight') {direction = 'east'}
        if (event.key === 'ArrowLeft') {direction = 'west'}
        onDirectionChange(direction)
        })

        document.addEventListener('keyup', function(event){
            direction = null
            onDirectionChange(direction)})
    }

    return {
        to: moveToCoordinates, 
        withArrowKeys: moveWithArrowKeys
    }
}