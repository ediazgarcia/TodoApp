import { Provider } from 'react-redux';
import { store } from '@/infrastructure/store/store';
import { TodoPage } from '@/presentation/pages/TodoPage';

function App() {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}

export default App;