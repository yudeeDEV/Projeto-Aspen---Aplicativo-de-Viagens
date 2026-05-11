import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronLeft, 
  User, 
  Moon, 
  Globe, 
  Bell, 
  Shield, 
  LogOut, 
  ChevronRight 
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

// Variáveis globais para manter as informações na memória enquanto o app estiver aberto
let globalUserName = 'Aluno React Native';
let globalUserEmail = 'aluno@universidade.edu';

const Settings = () => {
  const navigation = useNavigation<any>();
  const [notifications, setNotifications] = useState(true);
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Estados para as informações do usuário
  const [userName, setUserName] = useState(globalUserName);
  const [userEmail, setUserEmail] = useState(globalUserEmail);
  
  // Estados para o Modal de edição
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');

  const handleOpenEdit = () => {
    setTempName(userName);
    setTempEmail(userEmail);
    setIsEditModalVisible(true);
  };

  const handleSaveProfile = () => {
    // Salva as alterações nas variáveis globais
    globalUserName = tempName;
    globalUserEmail = tempEmail;
    
    // Atualiza a tela
    setUserName(tempName);
    setUserEmail(tempEmail);
    setIsEditModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900" edges={['top']}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-6"
        bounces={false}
      >
        {/* Header */}
        <View className="flex-row items-center mt-6 mb-8">
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            className="p-3 bg-gray-50 dark:bg-neutral-800 rounded-full border border-gray-100 dark:border-neutral-700"
          >
            <ChevronLeft size={20} color={isDarkMode ? "white" : "#181718"} />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-black dark:text-white ml-4">Configurações</Text>
        </View>

        {/* User Profile Card */}
        <View className="flex-row items-center bg-white dark:bg-neutral-800 p-5 rounded-3xl mb-8 border border-gray-100 dark:border-neutral-700 shadow-sm shadow-gray-200 dark:shadow-none">
          <View className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-full items-center justify-center mr-4">
            <User size={28} color="#176FF2" />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-black dark:text-white">{userName}</Text>
            <Text className="text-gray-500 dark:text-gray-400 font-medium mt-1">{userEmail}</Text>
          </View>
          <TouchableOpacity onPress={handleOpenEdit}>
            <Text className="text-[#176FF2] font-bold">Editar</Text>
          </TouchableOpacity>
        </View>

        {/* Preferências Section */}
        <Text className="text-lg font-bold text-black dark:text-white mb-4 ml-2">Preferências</Text>
        <View className="bg-gray-50 dark:bg-neutral-800 rounded-3xl px-5 py-2 mb-8">
          <SettingItem 
            icon={<Moon size={20} color={isDarkMode ? "white" : "#181718"} />} 
            label="Modo Escuro" 
            action={<Switch value={isDarkMode} onValueChange={(value) => setColorScheme(value ? 'dark' : 'light')} trackColor={{ false: '#D1D5DB', true: '#176FF2' }} thumbColor="#ffffff" />}
          />
          <SettingItem 
            icon={<Bell size={20} color={isDarkMode ? "white" : "#181718"} />} 
            label="Notificações" 
            action={<Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#D1D5DB', true: '#176FF2' }} thumbColor="#ffffff" />}
          />
          <SettingItem 
            icon={<Globe size={20} color={isDarkMode ? "white" : "#181718"} />} 
            label="Idioma" 
            value="Português (BR)"
            border={false}
          />
        </View>

        {/* Conta Section */}
        <Text className="text-lg font-bold text-black dark:text-white mb-4 ml-2">Conta</Text>
        <View className="bg-gray-50 dark:bg-neutral-800 rounded-3xl px-5 py-2 mb-8">
          <SettingItem icon={<Shield size={20} color={isDarkMode ? "white" : "#181718"} />} label="Privacidade e Segurança" />
          <SettingItem icon={<User size={20} color={isDarkMode ? "white" : "#181718"} />} label="Informações Pessoais" border={false} />
        </View>

        {/* Botão Sair */}
        <TouchableOpacity 
          className="flex-row items-center justify-center bg-red-50 dark:bg-red-500/10 py-4 rounded-2xl mt-2 border border-red-100 dark:border-red-500/20"
          onPress={() => navigation.navigate('Login')}
        >
          <LogOut size={20} color="#EC5E5E" />
          <Text className="text-[#EC5E5E] font-bold text-lg ml-2">Sair da Conta</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white dark:bg-neutral-900 rounded-t-3xl p-6">
            <View className="flex-row justify-between items-center mb-6 mt-2">
              <Text className="text-2xl font-bold text-black dark:text-white">Editar Perfil</Text>
              <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                <Text className="text-gray-500 dark:text-gray-400 font-bold">Cancelar</Text>
              </TouchableOpacity>
            </View>

            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 font-bold mb-2 ml-1">Nome</Text>
              <TextInput
                className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl px-5 py-4 text-black dark:text-white text-base"
                value={tempName}
                onChangeText={setTempName}
                placeholder="Seu nome"
                placeholderTextColor="#ACADAD"
              />
            </View>

            <View className="mb-8">
              <Text className="text-gray-700 dark:text-gray-300 font-bold mb-2 ml-1">E-mail</Text>
              <TextInput
                className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl px-5 py-4 text-black dark:text-white text-base"
                value={tempEmail}
                onChangeText={setTempEmail}
                placeholder="Seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#ACADAD"
              />
            </View>

            <TouchableOpacity 
              className="bg-[#176FF2] rounded-2xl py-4 items-center mb-6 shadow-md shadow-blue-500/30"
              onPress={handleSaveProfile}
            >
              <Text className="text-white font-bold text-lg">Salvar Alterações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Componente reutilizável para cada linha de configuração
const SettingItem = ({ icon, label, value, action, border = true }: any) => (
  <TouchableOpacity activeOpacity={action ? 1 : 0.7} className={`flex-row justify-between items-center py-4 ${border ? 'border-b border-gray-200 dark:border-neutral-700' : ''}`}>
    <View className="flex-row items-center">
      <View className="bg-white dark:bg-neutral-700 p-2 rounded-xl mr-3 shadow-sm shadow-gray-200 dark:shadow-none">{icon}</View>
      <Text className="text-base font-bold text-gray-800 dark:text-white">{label}</Text>
    </View>
    {action ? action : <View className="flex-row items-center">{value && <Text className="text-gray-400 font-medium mr-2">{value}</Text>}<ChevronRight size={20} color="#ACADAD" /></View>}
  </TouchableOpacity>
);

export default Settings;