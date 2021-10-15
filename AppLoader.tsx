import { NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { Login } from "./screens/Login";

type IAppLoaderProps = {
    isLoggedIn: boolean
}

export function AppLoader(props: IAppLoaderProps) {
    const colorScheme = useColorScheme();
    const { isLoggedIn = true } = props;
    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <StatusBar />
                {
                    isLoggedIn ? <Navigation colorScheme={colorScheme} />
                        : <Login />
                }
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}