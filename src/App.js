import { ChakraProvider } from "@chakra-ui/react";
import HeaderWithHamburger from "./components/HeaderWithHamburger";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import ServicesSection from "./components/ServicesSection";
import GoToTopButton from "./components/gototopButton";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <HeaderWithHamburger />
          <LandingSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          <GoToTopButton />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
