
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <Main />
    </div>
  )
}
