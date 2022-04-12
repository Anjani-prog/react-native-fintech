import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import Colors from '@constants/Colors'
import ScaleDimen from '@constants/ScaleDimen'

const FAB = (props) => {

    const { childComponent, onPress, style } = props;


    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.container, style]}>
                <TouchableOpacity onPress={onPress}>
                    {childComponent}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FAB;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: ScaleDimen.ms10,
        right: ScaleDimen.ms10
    },
});
