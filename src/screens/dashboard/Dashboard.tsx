import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  Image, 
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, ChevronDown, Star, Heart, Menu } from 'lucide-react-native';
import BottomNav from '@/components/BottomNav';
import Sidebar from '@/components/Sidebar';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

const popularData = [
  { id: '1', title: 'Alley Palace', rating: '4.1', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=500' },
  { id: '2', title: 'Coeurdes Alpes', rating: '4.5', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500' },
];

const recommendedData = [
  { id: '1', title: 'Explore Aspen', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=500' },
  { id: '2', title: 'Luxurious Aspen', duration: '2N/3D', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500' },
];

const Dashboard = () => {
  const categories = ['Location'];
  const navigation = useNavigation<any>();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const filteredPopular = popularData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredRecommended = recommendedData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900" edges={['top']}>
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            className="px-5"
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 30 }}
            bounces={false}
            overScrollMode="never"
          >
            
            {/* Header */}
            <View className="flex-row justify-between items-center mt-6">
              <View className="flex-row items-center">
                <TouchableOpacity onPress={() => setSidebarOpen(true)} className="mr-4">
                  <Menu size={28} color={isDarkMode ? "white" : "#181718"} />
                </TouchableOpacity>
                <View>
                  <Text className="text-gray-500 text-lg font-medium"></Text>
                  <Text className="text-4xl font-bold text-black dark:text-white">Aspen</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <MapPin size={18} color="#176FF2" />
                <Text className="ml-1 text-gray-600 dark:text-white font-medium">Aspen, USA</Text>
                <ChevronDown size={18} color="#176FF2" className="ml-1" />
              </View>
            </View>

            {/* Search Bar */}
            <View className="flex-row items-center bg-blue-50/60 dark:bg-neutral-800 rounded-3xl px-5 py-4 mt-8">
              <Search size={20} color="#ACADAD" />
              <TextInput 
                placeholder="Buscar destinos, experiências..."
                className="ml-3 flex-1 text-base text-black dark:text-white"
                placeholderTextColor="#ACADAD"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Categories */}
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              className="mt-8"
              bounces={false}
              overScrollMode="never"
            >
              {categories.map((cat, index) => (
                <TouchableOpacity key={cat} className={`mr-8 pb-2 ${index === 0 ? 'border-b-2 border-blue-600' : ''}`}>
                  <Text className={`text-base font-bold ${index === 0 ? 'text-blue-600' : 'text-gray-400'}`}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Popular Section */}
            <View className="flex-row justify-between items-center mt-10 mb-5">
              <Text className="text-2xl font-bold text-black dark:text-white">Popular</Text>
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              className="mt-2"
              bounces={false}
              overScrollMode="never"
            >
              {filteredPopular.length > 0 ? (
                filteredPopular.map((item) => (
                  <PopularCard 
                    key={item.id}
                    title={item.title} 
                    rating={item.rating} 
                    image={item.image} 
                    onPress={() => navigation.navigate('Details', { title: item.title, rating: item.rating, image: item.image })}
                  />
                ))
              ) : (
                <Text className="text-gray-400 mt-10 w-full text-center">Nenhum local encontrado.</Text>
              )}
            </ScrollView>

            {/* Recommended Section */}
            <Text className="text-2xl font-bold text-black dark:text-white mt-10 mb-5">Recommended</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              className="mb-12"
              bounces={false}
              overScrollMode="never"
            >
              {filteredRecommended.length > 0 ? (
                filteredRecommended.map((item) => (
                  <RecommendedCard 
                    key={item.id}
                    title={item.title} 
                    duration={item.duration} 
                    image={item.image} 
                    onPress={() => navigation.navigate('Details', { title: item.title, image: item.image })}
                  />
                ))
              ) : (
                <Text className="text-gray-400 mt-8 w-full text-center">Nenhuma recomendação encontrada.</Text>
              )}
            </ScrollView>

          </ScrollView>

          <BottomNav />

          {/* Sidebar extraída para um componente */}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </SafeAreaView>
  );
};

const PopularCard = ({ title, rating, image, onPress }: any) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mr-6 w-52 h-72 rounded-[30px] overflow-hidden relative shadow-lg">
    <Image source={{ uri: image }} className="w-full h-full" />
    <View className="absolute bottom-4 left-3 right-3 bg-black/50 p-3 rounded-2xl">
      <Text className="text-white font-bold text-sm">{title}</Text>
      <View className="flex-row items-center mt-1">
        <Star size={12} color="#FFD700" fill="#FFD700" />
        <Text className="text-white text-xs ml-1 font-bold">{rating}</Text>
      </View>
    </View>
    <TouchableOpacity className="absolute bottom-4 right-4 bg-white rounded-full p-2">
      <Heart size={16} color="#EC5E5E" fill="#EC5E5E" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const RecommendedCard = ({ title, duration, image, onPress }: any) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mr-5 w-44">
    <View className="relative">
      <Image source={{ uri: image }} className="w-full h-32 rounded-3xl" />
      <View className="absolute bottom-2 right-2 bg-[#3A544F] px-2 py-1 rounded-lg border-2 border-white">
        <Text className="text-[10px] font-bold text-white">{duration}</Text>
      </View>
    </View>
    <Text className="mt-3 font-bold text-black dark:text-white text-base">{title}</Text>
    <Text className="text-xs text-gray-500 mt-1">✨ Hot Deal</Text>
  </TouchableOpacity>
);

export default Dashboard;