import React, { useCallback, useState } from 'react';
import { Button, Icon, Input, Stack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function Login() {

    const [showPassWord, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePress = useCallback(() => setShowPassword(!showPassWord), [showPassWord]);

    return (
        <Stack space={4} alignItems="center">
            <Input
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />}
                placeholder="Enter user name" />
            <Input
                InputRightElement={
                    <Icon
                        as={<MaterialIcons name="visibility-off" />}
                        size={5}
                        mr="2"
                        color="muted.400"
                        onPress={handlePress}
                    />
                }
                placeholder="Enter password" type={showPassWord ? "text" : "password"} value={password} onChangeText={setPassword} />
            <Button m="1" >
                Login
            </Button>
        </Stack>
    );
}