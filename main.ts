basic.showIcon(IconNames.Sword)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(25, 25)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        basic.pause(200)
        cuteBot.moveTime(cuteBot.Direction.right, 25, 1.25)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        basic.pause(200)
        cuteBot.moveTime(cuteBot.Direction.left, 25, 1.25)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        basic.pause(200)
        cuteBot.moveTime(cuteBot.Direction.backward, 25, 1.25)
        basic.pause(200)
        cuteBot.moveTime(cuteBot.Direction.right, 20, 2)
    } else {
        cuteBot.motors(25, 25)
    }
})
