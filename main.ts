while (true) {
    console.log("Light Level:" + input.lightLevel())
}
if (input.lightLevel() > 30) {
    light.setAll(light.rgb(255, 0, 0))
} else if (input.lightLevel() < 30) {
    light.setAll(light.rgb(0, 255, 0))
}

