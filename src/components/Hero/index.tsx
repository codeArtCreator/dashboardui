import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
    return (
        <div id='hero-section' className="mt-20 flex items-center justify-between">
            <div className="flex items-center gap-3  mt-2 rounded-lg bg-white p-4 font-semibold">
                <div className='bg-green-100 p-5 rounded-full'>
                    <Icon icon="solar:dollar-outline" color="#00a745" width="50" height="50" />
                </div>
                <div>
                    <p className='text-slate-400'>Earning</p>
                    <p className='font-bold text-2xl'>$198k</p>
                    <div className='text-green-500 font-bold mr-1 flex items-center'>
                        <Icon icon="mdi:arrow-up-thin" />
                        37.8%
                        <span className='text-sm text-slate-700 ml-1'>this month</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3  mt-2 rounded-lg bg-white p-4 font-semibold">
                <div className='bg-purple-100 p-5 rounded-full'>
                    <Icon icon="tabler:notes" color="#a203ff" width="50" height="50" />
                </div>
                <div>
                    <p className='text-slate-400'>Orders</p>
                    <p className='font-bold text-2xl'>$2.4k</p>
                    <div className='text-red-500 font-bold mr-1 flex items-center'>
                        <Icon icon="mdi:arrow-down-thin" />
                        2%
                        <span className='text-sm text-slate-700 ml-1'>this month</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3  mt-2 rounded-lg bg-white p-4 font-semibold">
                <div className='bg-blue-100 p-5 rounded-full'>
                    <Icon icon="solar:wallet-outline" color="#0356be" width="50" height="50" />
                </div>
                <div>
                    <p className='text-slate-400'>Balance</p>
                    <p className='font-bold text-2xl'>$2.4k</p>
                    <div className='text-red-500 font-bold mr-1 flex items-center'>
                        <Icon icon="mdi:arrow-down-thin" />
                        2%
                        <span className='text-sm text-slate-700 ml-1'>this month</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3  mt-2 rounded-lg bg-white p-4 font-semibold">
                <div className='bg-custom-hero-icon-bg4 p-5 rounded-full'>
                    <Icon icon="uil:cart" color="#d70009" width="50" height="50" />
                </div>
                <div>
                    <p className='text-slate-400'>Total Sales</p>
                    <p className='font-bold text-2xl'>$89k</p>
                    <div className='text-green-500 font-bold mr-1 flex items-center'>
                        <Icon icon="mdi:arrow-up-thin" />
                        11%
                        <span className='text-sm text-slate-700 ml-1'>this month</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero