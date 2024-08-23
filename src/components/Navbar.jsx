import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
export const Navbar = () => {
    const items = [
        { label: 'Collections' },
        { label: 'Men' },
        { label: 'Women' },
        { label: 'About' },
        { label: 'Contact' }
    ];
    const start = <img alt='logo' src='logo.svg' />
    const end = (
        <div className='flex gap-2 items-center'>
            <i className='pi pi-shopping-cart'></i>
            <Avatar image="image-avatar.png" shape="circle" />
        </div>
    )
    return (
        <nav className='w-11/12 h-[15%] mx-auto flex items-center'>
            <Menubar start={start} model={items} end={end} className='bg-white w-full' />
        </nav>
    )
}
