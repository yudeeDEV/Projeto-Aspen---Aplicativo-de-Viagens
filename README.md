# 🏔️ Projeto Aspen - Aplicativo de Viagens

Bem-vindo ao **Aspen**, um aplicativo mobile de planejamento de viagens de luxo. Este projeto foi desenvolvido como requisito acadêmico para demonstrar conhecimentos avançados em desenvolvimento mobile multiplataforma.

O aplicativo simula a experiência de usuário de uma plataforma de turismo, permitindo a exploração de locais populares, visualização de detalhes de acomodações e gerenciamento de perfil e configurações.

---

## ✨ Principais Funcionalidades

- **Autenticação Simulada:** Tela de login com validação de credenciais e alternância de visibilidade de senha.
- **Navegação Dinâmica (React Navigation):** Navegação fluida entre telas (Stack Navigation) e passagem de parâmetros via rotas para alimentar a tela de Detalhes dinamicamente.
- **Dark Mode Nativo:** Suporte completo a tema Claro e Escuro, integrado em todas as telas através do NativeWind (`useColorScheme`), oferecendo acessibilidade e conforto visual.
- **Gerenciamento de Estado:** Edição de perfil em tempo real utilizando variáveis globais e estados do React (`useState`), permitindo atualizações dinâmicas no app sem perda momentânea de dados.
- **Design Responsivo:** UI/UX moderna construída com componentes funcionais (Modais, ScrollViews horizontais, Inputs personalizados e Menus Laterais).
- **Layout e Estilização (Tailwind):** Uso de NativeWind para aplicar classes utilitárias diretamente no JSX, proporcionando um design limpo e de fácil manutenção.

---

## 📱 Estrutura de Telas do Sistema

1. **Login:** Acesso seguro com teclado adaptável (`KeyboardAvoidingView`).
2. **Home (Início):** Landing page de boas-vindas com background imersivo.
3. **Dashboard (Busca):** Tela principal contendo:
   - Barra de busca simulada.
   - Listagem horizontal de Locais Populares e Recomendados.
   - Integração com um Menu Lateral (`Sidebar`).
4. **Details (Detalhes):** Tela carregada dinamicamente com base no item clicado. Exibe imagens amplas, avaliações, descrições, comodidades (facilities) e botão de reserva.
5. **Settings (Configurações):** Central de preferências do usuário, incluindo o "Toggle" real do Modo Escuro e um Modal interativo para edição de Perfil.

---

## 🚀 Tecnologias Utilizadas

- **React Native:** Framework base para desenvolvimento mobile.
- **Expo:** Plataforma e cadeia de ferramentas para simplificar o build.
- **NativeWind (Tailwind CSS):** Estilização baseada em classes utilitárias padrão Tailwind.
- **React Navigation:** Para roteamento estruturado no aplicativo.
- **Lucide Icons:** Biblioteca de ícones vetoriais modernos e leves.
- **TypeScript:** Tipagem estática para um código mais seguro e previsível.

---

## 🔐 Credenciais de Acesso (Demo)

Para avaliar a entrada no aplicativo, utilize as seguintes credenciais na tela de Login:

- **E-mail:** `yudeedev@gmail.com`
- **Senha:** `280306`

*(Tentar acessar com dados diferentes disparará o tratamento de erros visuais).*

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina, assim como um emulador (Android Studio / Xcode) ou o aplicativo **Expo Go** instalado no seu smartphone físico.

### Passo a passo

1. Clone ou extraia o repositório do projeto.
2. Abra o terminal na raiz da pasta do projeto (`meu-app`).
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
5. **Para visualizar:**
   - Pressione `a` para abrir no Emulador Android.
   - Pressione `i` para abrir no Simulador iOS.
   - Pressione `w` para rodar na Web (suporte experimental incluído).
   - Ou escaneie o **QR Code** gerado no terminal usando o app **Expo Go** no seu celular.

---

## 📂 Estrutura de Diretórios Resumida

```text
meu-app/
├── App.tsx                     # Ponto de entrada e rotas do app
├── src/
│   ├── components/             # Componentes reutilizáveis (BottomNav, Sidebar, ui)
│   └── screens/                # Telas completas do app
│       ├── auth/               # (Opcional) telas de autenticação
│       ├── dashboard/          # Dashboard, Detalhes, Login e Configurações
│       └── home/               # Tela inicial / Splash
├── global.css                  # Configurações globais do Tailwind
└── tailwind.config.js          # Temas e cores personalizadas
```

---

> **Nota Acadêmica:**  
> Trabalho desenvolvido com foco nas melhores práticas de Componentização do React, Estilização Condicional, Tipagem (TS) e Gerenciamento de Layouts no React Native.