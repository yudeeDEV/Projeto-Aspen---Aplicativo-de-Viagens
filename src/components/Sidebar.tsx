import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigation = useNavigation<any>();

  const navigateTo = (screen: string) => {
    onClose(); // Fecha a sidebar suavemente
    navigation.navigate(screen); // Navega para a tela
  };

  return (
    <Modal visible={isOpen} animationType="fade" transparent={true} onRequestClose={onClose}>
      <View className="flex-1 bg-black/50 flex-row">
        {/* Menu Lateral Branco */}
        <View className="w-2/3 max-w-[300px] h-full bg-white p-6 shadow-2xl">
          <View className="flex-row justify-between items-center mb-10 mt-4">
            <Text className="text-2xl font-bold text-black">Menu</Text>
            <TouchableOpacity onPress={onClose} className="p-2 bg-gray-100 rounded-full">
              <X size={20} color="#181718" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={() => navigateTo('Home')} className="py-4 border-b border-gray-100">
            <Text className="text-lg text-gray-700 font-medium">Início</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Dashboard')} className="py-4 border-b border-gray-100">
            <Text className="text-lg text-gray-700 font-medium">Busca</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Settings')} className="py-4 border-b border-gray-100">
            <Text className="text-lg text-gray-700 font-medium">Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Login')} className="py-4 mt-auto">
            <Text className="text-lg text-red-500 font-bold">Sair</Text>
          </TouchableOpacity>
        </View>
        
        {/* Área escura clicável para fechar o menu */}
        <TouchableOpacity className="flex-1" activeOpacity={1} onPress={onClose} />
      </View>
    </Modal>
  );
};

export default Sidebar;