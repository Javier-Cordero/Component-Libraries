import { Button } from 'primereact/button';
import { useState } from 'react';
export const Datos = () => {
    const [count,setCount] =useState(0)
    const handleIncrement = () => {setCount(count+1)}
    const handleDecrement = () => {if(count > 0) setCount(count-1)}
    return (
        <div className="flex-1 grid gap-5 px-20 py-10">
            <h2 className='text-[#72757E] font-bold'>SNAKER COMPANY</h2>
            <h1 className='font-bold text-6xl'>Fall Limite Sneakers</h1>
            <p className='text-[#72757E] text-lg'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can ofter</p>
            <div className='flex gap-5 items-center font-semibold'>
                <h2 className='text-2xl font-bold '>$125.00</h2>
                <Button label="50%" className='bg-black text-white px-4 py-1 rounded-md'/>
            </div>
            <h4 className='font-bold text-lg text-[#72757E]'>$250.00</h4>
            <div className='flex gap-5 items-center'>
                <div className='flex gap-4 font-bold bg-[#F7F8FD]'>
                    <Button label="-" onClick={handleDecrement} className='size-6 text-orange-500'/>
                    <span className=''>{count}</span>
                    <Button label="+" onClick={handleIncrement} className='size-6 text-orange-500'/>
                </div>
                <Button label="Add to cart" icon='pi pi-shopping-cart' rounded className='bg-orange-500 px-20 py-3 flex gap-5 items-center font-semibold'/>
            </div>
        </div>
    )
}
