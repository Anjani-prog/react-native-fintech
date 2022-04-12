import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'
import { Icon, icoMoonConfigSet } from './Icon'

export default function GradientIcon({ name, size, style, colors, }) {
    return (
        <MaskedView
            style={{ flex: 1, flexDirection: 'row', height: size }}
            maskElement={
                <View
                    style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon
                        name={name}
                        size={size}
                        color="white"
                        config={icoMoonConfigSet}
                        style={style}
                    />
                </View>
            }>
            <LinearGradient
                colors={colors}
                style={{ flex: 1 }}
            />
        </MaskedView>
    )
}

