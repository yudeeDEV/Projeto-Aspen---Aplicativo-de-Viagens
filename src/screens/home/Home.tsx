import React from 'react';
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* StatusBar clara para contrastar com o fundo escuro da imagem */}
      <StatusBar barStyle="light-content" />

    <ImageBackground
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dDs-wh7mgfjWMrGYaGCjwMS4-J-lEx6JHw&s' }} 
    style={{ flex: 1, width: '100%', height: '100%' }}
    resizeMode="cover"
     >

        {/* Overlay escuro opcional para melhorar a leitura do texto branco */}
        <View className="flex-1 bg-black/20 px-8 pb-12">
          
          {/* Logo / Título Aspen */}
          <View className="flex-1 items-center pt-24">
            <Text 
              className="text-white text-8xl font-light" 
              style={{ fontFamily: 'Aspen-Script' }} // Se tiver a fonte instalada
            >
              Aspen
            </Text>
          </View>

          {/* Área de Texto Inferior */}
          <View className="justify-end">
            <Text className="text-white text-xl font-normal opacity-90">
              Planeje suas
            </Text>
            <Text className="text-white text-5xl font-bold leading-[56px] mb-8">
              Férias{"\n"}Luxuosas
            </Text>

            {/* Botão estilizado com Tailwind (usando o componente do Shadcn/Gluestack) */}
            <Button 
              size="xl" 
              className="bg-[#176FF2] rounded-2xl h-16 active:opacity-80"
              onPress={() => navigation.navigate('Dashboard')}
            >
              <ButtonText className="text-white font-bold text-lg">
                Explorar
              </ButtonText>
            </Button>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;