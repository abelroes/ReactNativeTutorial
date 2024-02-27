import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        "DMBold": require('../assets/fonts/DMSans-Bold.ttf'),
        "DMMedium": require('../assets/fonts/DMSans-Medium.ttf'),
        "DMRegular": require('../assets/fonts/DMSans-Regular.ttf')
    })

    useEffect(() => {
        async function prepare() {
            SplashScreen.preventAutoHideAsync();
        }
        prepare();
    })
    
    const onLayoutRootView = useCallback(async () => {
        console.log("Fonts loaded?", fontsLoaded);
        if (fontsLoaded) {
            console.log("Fonts loaded");
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    
    if (!fontsLoaded && !fontError) {
        return undefined;
    }

    return <Stack onLayout={onLayoutRootView}/>;

}

export default Layout;