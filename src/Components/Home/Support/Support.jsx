import React from 'react';
import {FaShippingFast} from '@react-icons/all-files/fa/FaShippingFast';
import {MdAttachMoney} from '@react-icons/all-files/md/MdAttachMoney';
import {GiTakeMyMoney} from '@react-icons/all-files/gi/GiTakeMyMoney';
import {BiPhoneCall} from '@react-icons/all-files/bi/BiPhoneCall';

const Support = () => {
    return (
        <div className='flex lg:flex-row border-y-2 border-dashed border-black p-10 flex-col gap-3 items-center rounded-2xl'>
            <div className='flex gap-4 h-32 p-4 border-l-8 border-black hover:border-dashed hover:border-black shadow shadow-gray-300 justify-center w-full items-center font-wallPoet rounded-xl'>
                <FaShippingFast className='text-[60px]'></FaShippingFast>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-md font-bold'>Free Shipping Item</h3>
                    <p className='text-sm text-gray-600'>For any order over $100</p>
                </div>
            </div>
            <div className='flex gap-4 h-32 p-4 border-l-8 border-black hover:border-dashed hover:border-black shadow shadow-gray-300 justify-center w-full items-center font-wallPoet rounded-xl'>
                <MdAttachMoney className='text-[60px]'></MdAttachMoney>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-md font-bold'>Money Back Guarantee</h3>
                    <p className='text-sm text-gray-600'>100% money back guarante</p>
                </div>
            </div>
            <div className='flex gap-4 h-32 p-4 border-l-8 border-black hover:border-dashed hover:border-black shadow shadow-gray-300 justify-center w-full items-center font-wallPoet rounded-xl'>
                <GiTakeMyMoney className='text-[60px]'></GiTakeMyMoney>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-md font-bold'>Cash On Delivery</h3>
                    <p className='text-sm text-gray-600'>Easy Payment Option</p>
                </div>
            </div>
            <div className='flex gap-4 h-32 p-4 border-l-8 border-black hover:border-dashed hover:border-black shadow shadow-gray-300 justify-center w-full items-center font-wallPoet rounded-xl'>
                <BiPhoneCall className='text-[60px]'></BiPhoneCall>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-md font-bold'>Help & Support</h3>
                    <p className='text-sm text-gray-600'>Call us: +0123.4567.89</p>
                </div>
            </div>
        </div>
    );
};

export default Support;