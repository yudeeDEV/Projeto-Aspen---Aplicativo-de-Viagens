import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronLeft, 
  Heart, 
  Star, 
  Wifi, 
  Utensils, 
  Bath, 
  Wind, 
  ArrowRight,
  ChevronDown
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

const Details = ({ route, navigation }: any) => {
  // Extraindo os parâmetros que o Dashboard enviou no clique
  const { title, image, rating } = route.params || {};
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900" edges={['top']}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className="px-5"
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        bounces={false}
        overScrollMode="never"
      >
        
        {/* Imagem Principal com Botão Voltar e Favorito */}
        <View className="relative mt-4">
          <Image 
            source={{ uri: image || 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000' }} 
            className="w-full h-[400px] rounded-[40px]"
            resizeMode="cover"
          />
          
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="absolute top-6 left-6 bg-white dark:bg-neutral-800 p-3 rounded-2xl shadow-sm"
          >
            <ChevronLeft size={20} color="#B8B8B8" />
          </TouchableOpacity>

          <TouchableOpacity 
            className="absolute -bottom-6 right-8 bg-white dark:bg-neutral-800 p-4 rounded-full shadow-xl dark:shadow-none"
            style={{ elevation: 5 }}
          >
            <Heart size={24} color="#EC5E5E" fill="#EC5E5E" />
          </TouchableOpacity>
        </View>

        {/* Título e Avaliação */}
        <View className="mt-10 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-black dark:text-white">{title}</Text>
            <View className="flex-row items-center mt-1">
              <Star size={16} color="#FFD700" fill="#FFD700" />
              <Text className="ml-1 text-gray-500 font-medium">{rating || '4.8'} (355 Avaliações)</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-600 font-bold">Ver mapa</Text>
          </TouchableOpacity>
        </View>

        {/* Descrição */}
        <View className="mt-8">
          <Text className="text-gray-600 dark:text-gray-300 leading-6 text-base">
            {title} é o mais próximo que se pode chegar de uma cidade alpina de conto de fadas. 
            As possibilidades de aventura são infinitas: esqui, trilhas, jantares, 
            compras e ....
          </Text>
          <TouchableOpacity className="flex-row items-center mt-2">
            <Text className="text-blue-600 font-bold mr-1">Ler mais</Text>
            <ChevronDown size={16} color="#176FF2" />
          </TouchableOpacity>
        </View>

        {/* Facilidades (Facilities) */}
        <Text className="text-2xl font-bold text-black dark:text-white mt-8">Comodidades</Text>
        <View className="flex-row justify-between mt-5 mb-10">
          <FacilityItem icon={<Wifi size={24} color="#B8B8B8" />} label="1 Aquecedor" />
          <FacilityItem icon={<Utensils size={24} color="#B8B8B8" />} label="Jantar" />
          <FacilityItem icon={<Bath size={24} color="#B8B8B8" />} label="1 Banheira" />
          <FacilityItem icon={<Wind size={24} color="#B8B8B8" />} label="Piscina" />
        </View>

      </ScrollView>

      {/* Footer Fixo: Preço e Botão */}
      <View className="flex-row items-center justify-between px-8 py-6 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800">
        <View>
          <Text className="text-gray-500 dark:text-gray-400 font-bold">Preço</Text>
          <Text className="text-3xl font-bold text-emerald-400">$199</Text>
        </View>
        
        <TouchableOpacity 
          className="bg-[#176FF2] flex-row items-center justify-center px-10 py-5 rounded-2xl shadow-lg"
          style={{ width: '65%' }}
        >
          <Text className="text-white font-bold text-lg mr-2">Reservar</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Sub-componente para os itens de facilidade
const FacilityItem = ({ icon, label }: { icon: any, label: string }) => (
  <View className="items-center bg-blue-50/40 dark:bg-neutral-800 p-4 rounded-3xl w-20">
    <View className="mb-2">{icon}</View>
    <Text className="text-gray-400 text-[10px] font-medium">{label}</Text>
  </View>
);

export default Details;