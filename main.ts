input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.showString("¡HOLA!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(5000)
})
