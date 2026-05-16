import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleLogin = () => {
    setErrorMessage('');
    // Credenciais fixas (hardcoded)
    if (email.toLowerCase().trim() === 'yudeedev@gmail.com' && password === '280306') {
      setErrorMessage('');
      navigation.navigate('Home');
    } else {
      setErrorMessage('E-mail ou senha incorretos.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 32 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Header */}
          <View className="mb-12 mt-10">
            <Text className="text-5xl font-bold text-[#181718] dark:text-white mb-3">
              Aspen
            </Text>
            <Text className="text-gray-500 dark:text-gray-400 text-base font-medium">
              Faça login para continuar sua aventura.
            </Text>
          </View>
          
          {/* E-mail Input */}
          <View className="mb-5">
            <Text className="text-gray-700 dark:text-gray-300 font-bold mb-2 ml-1">E-mail</Text>
            <View className={`flex-row items-center bg-gray-50/80 dark:bg-neutral-800 border ${errorMessage ? 'border-red-400' : 'border-gray-200 dark:border-neutral-700'} rounded-3xl px-5 h-16`}>
              <Mail size={20} color="#ACADAD" />
              <TextInput 
                className="flex-1 ml-3 text-[#181718] dark:text-white text-base"
                placeholder="Digite seu e-mail"
                placeholderTextColor="#ACADAD"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-4">
            <Text className="text-gray-700 dark:text-gray-300 font-bold mb-2 ml-1">Senha</Text>
            <View className={`flex-row items-center bg-gray-50/80 dark:bg-neutral-800 border ${errorMessage ? 'border-red-400' : 'border-gray-200 dark:border-neutral-700'} rounded-3xl px-5 h-16`}>
              <Lock size={20} color="#ACADAD" />
              <TextInput 
                className="flex-1 ml-3 text-[#181718] dark:text-white text-base"
                placeholder="Digite sua senha"
                placeholderTextColor="#ACADAD"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-2">
                {showPassword ? <EyeOff size={20} color="#ACADAD" /> : <Eye size={20} color="#ACADAD" />}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="items-end mb-8">
            <Text className="text-[#176FF2] font-bold">Esqueceu a senha?</Text>
          </TouchableOpacity>

          {errorMessage ? <Text className="text-red-500 mb-6 text-center font-bold">{errorMessage}</Text> : null}

          <TouchableOpacity className="bg-[#176FF2] rounded-3xl h-16 justify-center items-center shadow-lg shadow-blue-500/30 mb-8" onPress={handleLogin}>
            <Text className="text-white font-bold text-lg">Entrar</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-auto mb-10">
            <Text className="text-gray-500 dark:text-gray-400 font-medium">Não tem uma conta? </Text>
            <TouchableOpacity><Text className="text-[#176FF2] font-bold">Cadastre-se</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;