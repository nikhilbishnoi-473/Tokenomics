import React from 'react'
import dragonImg from '../assets/images/webp/dragon-img.webp';
import yellowBox from '../assets/images/png/yellow-box.png';
import greenBox from '../assets/images/png/green-box.png';
import boxTwo from '../assets/images/png/lightBlue-box.png';
import orangeBox from '../assets/images/png/orange-box.png'
import redBox from '../assets/images/png/red-box.png'
import colorFullLine from '../assets/images/webp/color-full-line.webp'
import { FiveLine, FourLine, LineFirst, SecondLine, ThirdLine } from './common/Icon';
import positionImg from '../assets/images/png/tokenomics-bottom-layer.png'
import bigTree from '../assets/images/png/big-tree.png'
import dragon from '../assets/images/png/dragon.png'
import small_tree from '../assets/images/png/small-tree.png'
import right_tree from '../assets/images/png/right-tree.png'
const Tokenomics = () => {
    return (
        <div className='bg-bgColor relative'>
            <div className='container max-w-[1164px] mx-auto px-3 pt-[246px] pb-[612px]'>
                <div className='flex justify-center'>
                    <h1 className='font-chewy font-normal text-[64px] leading-[83px] text-white'>Tokenomics</h1>
                </div>
                <div className='flex justify-center pt-20'>
                    <img className='max-w-[133px] w-full' src={dragonImg} alt="dragonImg" />
                </div>
                <div className='flex max-w-[589px] w-full mx-auto relative gap-[293px] justify-center -translate-y-16'>
                    <img src={yellowBox} alt="yellowBox" />
                    <img src={greenBox} alt="yellowBox" />
                    <img className='absolute top-[91px] left-[57px]' src={boxTwo} alt="yellowBox" />
                    <img className='absolute top-[149px] left-[206px]' src={orangeBox} alt="yellowBox" />
                    <img className='absolute top-[91px] left-[361px]' src={redBox} alt="yellowBox" />
                    <img className='absolute top-[-23px]' src={colorFullLine} alt="" />
                    <div className='absolute left-[-250px] top-[35px]'>
                        <div className='flex gap-[23px]'>
                            <div className='text-end'>
                                <h2 className='font-normal text-[32px] text-yellowText leading-9'>333,333,333</h2>
                                <h4 className='font-normal text-2xl leading-[33px] text-white pt-[5px] '>Supply</h4>
                            </div>
                            <LineFirst />
                        </div>
                    </div>
                    <div className='absolute left-[-139px] top-[230px]'>
                        <div className='flex gap-[23px]'>
                            <div className='text-end'>
                                <h2 className='font-normal text-[32px] text-lightBlue leading-9'>95% Uniswa</h2>
                                <h2 className='font-normal text-[32px] pt-1 text-lightBlue leading-9'>5% Marketing</h2>
                                <h4 className='font-normal text-2xl leading-[33px] text-white pt-[5px] '>Allocation</h4>
                            </div>
                            <SecondLine />
                        </div>
                    </div>
                    <div className='absolute left-[253px] top-[309px]'>
                        <div className='text-center items-center flex flex-col'>
                           <ThirdLine />
                            <h2 className='font-normal text-[32px] pt-[17px] text-orangeText leading-9'>No Tax</h2>
                        </div>
                    </div>
                    <div className='absolute left-[500px] top-[230px]'>
                        <div className='flex gap-[18px] items-center'>
                             <div>
                             <FourLine/>
                             </div>
                                <h2 className='font-normal text-nowrap text-[32px] text-redText leading-9'>No Mint Function</h2>
                        </div>
                    </div>
                    <div className='absolute left-[610px] top-[35px]'>
                        <div className='flex gap-[23px] items-center'>
                            <div>
                            <FiveLine/>
                            </div>
                               <div className='flex flex-col'>
                               <h2 className='font-normal text-[32px] text-nowrap max-w-[217px] text-greenText leading-9'>Liquidity lock</h2>
                                <h2 className='font-normal text-[32px] text-greenText leading-9'> for 1 year</h2>
                               </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <img className='absolute bottom-0 z-0 left-0' src={positionImg} alt="" />
            <img src={bigTree} className='z-10 absolute bottom-[51px] left-0 treeAnimation' alt="bigTree" />
            <img src={dragon} className='z-10 absolute bottom-[29px] left-0 dragonAnimation' alt="bigTree" />
            <img src={small_tree} className='z-0 absolute bottom-[86px] left-[489px] treeAnimation' alt="bigTree" />
            <img src={small_tree} className='z-0 absolute bottom-[34px] left-[800px] treeAnimation' alt="bigTree" />

            <img src={right_tree} className='z-0 absolute bottom-[40px] right-[130px] treeAnimation' alt="bigTree" />

        </div>
    )
}

export default Tokenomics
