import React from 'react';
import HomeWrapper from './home.style';

interface IProps {
  userName: string;
}

const HomeViewNoMemo: React.FC<IProps> = (props) => (
  <HomeWrapper className='home-component'>
    <h1>Olá, {props.userName}</h1>
    <p>
      E aí pessoal, tudo bem?
      <br />
      <br />
      <br />Estou muito empolgado para compartilhar com vocês o software incrível que desenvolvi recentemente! É uma verdadeira maravilha da tecnologia moderna!
      <br />
      <br />Então, eu construí esse software usando algumas das melhores ferramentas disponíveis atualmente. Utilizei microfrontends para torná-lo totalmente modular, o que significa que posso adicionar e atualizar funcionalidades sem complicações. É uma verdadeira benção para qualquer desenvolvedor!
      <br />
      <br />Além disso, contei com o Angular e o React para criar interfaces de usuário incríveis e interativas. E para deixar tudo ainda mais bonito, aproveitei ao máximo o Material UI, que me deu acesso a uma biblioteca vasta de componentes estilizados e prontos para uso.
      <br />
      <br />Ah, e não posso esquecer do armazenamento de sessão usando cookies e local storage. Essa parte foi fundamental para garantir uma experiência consistente e personalizada para os usuários.
    </p>
  </HomeWrapper>
);

const HomeView = React.memo(HomeViewNoMemo);
export default HomeView;
