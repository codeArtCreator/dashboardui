import { Icon } from '@iconify/react';
import { useHamburger } from '../../contexts/HamburgerContext';

const NavBar: React.FC = () => {
    const { toggleHamburger } = useHamburger();

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-5'>
                <Icon
                    onClick={toggleHamburger}
                    id='hamburger' icon="ci:hamburger-md" width="30" height="30"
                />
                <h2 className="text-2xl font-semibold font-serif flex gap-2 items-center">
                    Hello Rakesh
                    <Icon icon="fluent-emoji-flat:waving-hand-medium-light" width="35" height="35" />
                </h2>
            </div>

            <div className='max-w-md'>
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." />
                </div>
            </div>

        </div>
    )
}

export default NavBar