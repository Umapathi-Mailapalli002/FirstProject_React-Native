import React from "react";

import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === "dark";
    return (
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                    This is My world
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteText: {
        color: "#ffffff"
    },
    blackText: {
        color: "#000000"
    }
})

export default AppPro;
