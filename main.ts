input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < randint(20, 30); index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
    }
    music.playMelody("C5 B C5 B C5 B C5 B ", 120)
})
