import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import ListView from './components/ListView/ListView';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
      <GlobalStyle />
     <Header />
     <ListView />
     <Map />
    </div>
  );
}

export default App;
