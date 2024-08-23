import {Imagen} from './Imagen'
import { Datos } from './Datos';
export const Main = () => {
    return (
        <main className='flex w-11/12 h-[85%] mx-auto'>
            <Imagen/>
            <Datos/>
        </main>
    )
}
