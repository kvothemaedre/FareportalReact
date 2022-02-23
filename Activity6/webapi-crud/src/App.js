import Display from './components/Display';
import FormCause from './components/Form';

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-3">
        <FormCause />
        <hr />
        <Display />
    </div>
  );
}

export default App;
