import { Container } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen>Welcome to Proshop</HomeScreen>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
