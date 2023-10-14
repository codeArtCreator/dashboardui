import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useHamburger } from '../../contexts/HamburgerContext';

const SideBar: React.FC = () => {
    const { isOpen, toggleHamburger } = useHamburger();
    return (
        <div id={isOpen ? 'sidebar-closed' : 'sidebar'}
            className='bg-custom-blue w-60 min-h-screen fixed top-0 left-0'>
            <div className="header flex justify-start items-center gap-2 text-white my-10 ml-5">
                <Icon icon="ri:settings-line" width="30" height="30" />
                <h1 className='text-2xl font-bold'>Dashboard</h1>
                <Icon
                    id='hamburger'
                    className='ml-2'
                    onClick={toggleHamburger}
                    icon="ci:hamburger-md" width="30" height="30"
                />
            </div>

            <div className='mt-20 mx-5'>
                <Link
                    to='#'
                    className='flex justify-start items-center gap-2 p-2 my-2 text-white rounded-lg bg-custom-blue-light'
                >
                    <Icon icon="solar:key-square-outline" width="25" height="25" />
                    <div className='ml-2'>Dashboard</div>
                </Link>
                <Link
                    to='#'
                    className='flex justify-between items-center p-2 my-2 text-white rounded-lg hover:bg-custom-blue-light'
                >
                    <div className='flex gap-2'>
                        <Icon className='' icon="icon-park-outline:ad-product" width="25" height="25" />
                        <div className='ml-2'>Product</div>
                    </div>
                    <Icon className='' icon="ri:arrow-right-s-line" width="25" height="25" />
                </Link>
                <Link
                    to='#'
                    className='flex justify-between items-center p-2 my-2 text-white rounded-lg hover:bg-custom-blue-light'
                >
                    <div className='flex gap-2'>
                        <Icon icon="majesticons:user-box-line" width="25" height="25" />
                        <div className='ml-2'>Customers</div>
                    </div>
                    <Icon className='' icon="ri:arrow-right-s-line" width="25" height="25" />
                </Link>
                <Link
                    to='#'
                    className='flex justify-between items-center p-2 my-2 text-white rounded-lg hover:bg-custom-blue-light'
                >
                    <div className='flex gap-2'>
                        <Icon icon="fa:money" width="25" height="25" />
                        <div className='ml-2'>Income</div>
                    </div>
                    <Icon className='' icon="ri:arrow-right-s-line" width="25" height="25" />
                </Link>
                <Link
                    to='#'
                    className='flex justify-between items-center p-2 my-2 text-white rounded-lg hover:bg-custom-blue-light'
                >
                    <div className='flex gap-2'>
                        <Icon icon="bxs:offer" width="25" height="25" />
                        <div className='ml-2'>Promote</div>
                    </div>
                    <Icon className='' icon="ri:arrow-right-s-line" width="25" height="25" />
                </Link>
                <Link
                    to='#'
                    className='flex justify-between items-center p-2 my-2 text-white rounded-lg hover:bg-custom-blue-light'
                >
                    <div className='flex gap-2'>
                        <Icon icon="material-symbols:live-help-outline" width="25" height="25" />
                        <div className='ml-2'>Help</div>
                    </div>
                    <Icon className='' icon="ri:arrow-right-s-line" width="25" height="25" />
                </Link>
            </div>

            <div className='flex items-center fixed bottom-5 mx-5 p-2 my-2 rounded-lg bg-custom-blue-light'>
                <div className='bg-slate-400 rounded-full p-2 text-white'>
                    <Icon icon="ph:user-fill" width="35" height="35" />
                </div>
                <div className='text-white flex items-center justify-between'>
                    <div className='ml-2'>
                        <h4 className='text-l font-semibold'>Evano</h4>
                        <p className='text-sm text-slate-400 font-semibold'>Project Manager</p>
                    </div>
                    <Icon icon="fe:arrow-down" width="24" height="24" />
                </div>
            </div>
        </div>
    )
}

export default SideBar