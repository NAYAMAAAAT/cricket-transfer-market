import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


const Banner = ({ handleClaimCoin }) => {
    const notify1 = () => {
        toast.success("Success Claim ", {
            position: "top-center"
        });
    }
    return (
        <div className='w-10/12 mx-auto text-center'>
            
                <h1 className='md:text-5xl text-2xl font-bold my-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>

                <p className='md:text-2xl font-bold text-gray-400'>Beyond Boundaries Beyond Limits</p>


                <span className='rounded-lg border-2 px-2 py-5 border-fuchsia-200'>

                    
                    <button  onClick={() => handleClaimCoin(10000000, notify1)}  className='text-base  font-bold rounded-lg bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500  py-3 px-5 my-5 '>Claim Free Credit</button>
                </span>
               
            <ToastContainer></ToastContainer>
        </div>
    );
};
Banner.propTypes = {
    handleClaimCoin: PropTypes.func,
}

export default Banner;