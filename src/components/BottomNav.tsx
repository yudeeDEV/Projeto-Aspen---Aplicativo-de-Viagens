import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, Compass, Heart, User } from 'lucide-react-native';

const BottomNav = () => {
  return (
    <View className="flex-row justify-around items-center bg-white py-4 px-6 border-t border-gray-100">
      <NavItem icon={<Home size={24} color="#176FF2" />} label="Início" isActive />
      <NavItem icon={<Compass size={24} color="#B8B8B8" />} label="Explorar" />
      <NavItem icon={<Heart size={24} color="#B8B8B8" />} label="Salvos" />
      <NavItem icon={<User size={24} color="#B8B8B8" />} label="Perfil" />
    </View>
  );
};

const NavItem = ({ icon, label, isActive }: { icon: React.ReactNode, label: string, isActive?: boolean }) => (
  <TouchableOpacity className="items-center">
    <View className="mb-1">{icon}</View>
    <Text className={`text-xs ${isActive ? 'text-blue-600 font-bold' : 'text-gray-400 font-medium'}`}>{label}</Text>
  </TouchableOpacity>
);

export default BottomNav;