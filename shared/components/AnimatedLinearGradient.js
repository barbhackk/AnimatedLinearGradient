import { LinearGradient } from "expo-linear-gradient"
import React, { useEffect, useState } from "react"
import Animated, { interpolate, interpolateColor, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated"

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedLinearGradient = (props) => {

    const { style } = props
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(withTiming(1, { duration: 2000 }), 50, true)
    }, [])

    const animatedProps = useAnimatedProps(() => {

        const colors = [
            interpolateColor(
                progress.value,
                [0, 1],
                ["blue", "red"]
            ),
            interpolateColor(
                progress.value,
                [0, 1],
                ["orange", "green"]
            )]

        return {
            colors: colors
        }
    })

    return (
        <AnimatedLG animatedProps={animatedProps} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style}
            locations={[0, 0.6]}
        />
    )
}

export default AnimatedLinearGradient