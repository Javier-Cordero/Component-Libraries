import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
const images = [
    { itemImageSrc: 'image-product-1.jpg', thumbnailImageSrc: 'image-product-1.jpg', alt: 'Image 1' },
    { itemImageSrc: 'image-product-2.jpg', thumbnailImageSrc: 'image-product-2.jpg', alt: 'Image 2' },
    { itemImageSrc: 'image-product-3.jpg', thumbnailImageSrc: 'image-product-3.jpg', alt: 'Image 3' },
    { itemImageSrc: 'image-product-4.jpg', thumbnailImageSrc: 'image-product-4.jpg', alt: 'Image 4' }
];
const options = {
    itemWrapper: { className: 'bg-transparent' },
    itemContainer: { className: 'bg-transparent' },
    thumbnailItemContainer: { className: 'bg-transparent' },
    thumbnailContainer: { className: 'bg-transparent' },
}
export const Imagen = () => {
    const [visible, setVisible] = useState(false);
    const itemTemplate = (item) => (<img src={item.itemImageSrc} alt={item.alt} className='block w-full rounded-lg bg-white' onClick={() => setVisible(true)} />);
    const thumbnailTemplate = (item) => (<img src={item.thumbnailImageSrc} alt={item.alt} className='block w-full rounded-lg' />);
    return (
        <div className='flex-1'>
            <div className='flex justify-center py-10 w-full'>
                <Galleria value={images} numVisible={4} circular style={{ width: '350px' }} item={itemTemplate} thumbnail={thumbnailTemplate} pt={options} />
            </div>
            <Dialog visible={visible} style={{ width: '400px' }} onHide={() => { if (!visible) return; setVisible(false) }}>
                <div><Galleria value={images} numVisible={4} circular style={{ width: '100%', height: '100%' }} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} pt={options} /></div>
            </Dialog>
        </div>
    )
}
