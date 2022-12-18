import  Navbar  from "app/components/molecules/navbar/navbar.component";
import Main from "app/components/molecules/main/main.component";
import { HomeContainer } from "./home.styles";
import Feature from "app/components/molecules/feature-box/feature-box.component";
import TransferAd from "app/components/molecules/transfer-ad/transfer-ad.component";
import About from "app/components/molecules/about/about.components";
import Newsletter from "app/components/molecules/newsletter/newsletter.components";
import Footer from "app/components/molecules/footer/footer.component";
import { observer } from "mobx-react-lite";
import { useStore } from "store";

 const Home = observer(() => {
  const {authStore} = useStore();
  const login = authStore.isLoading.login;

  return (
  
    <HomeContainer>
      <Navbar Login={login}/>
      <Main />
      <Feature />
      <TransferAd />
      <About />
      <Newsletter/>
      <Footer/>
    </HomeContainer>
   
  )
});

export default Home;
