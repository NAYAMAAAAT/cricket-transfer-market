import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selected = ({ pla, handleRemovePlayer }) => {
    const { img, name, country, category, hand_batting } = pla;
    const notifyPlayerRemove = () => {
        toast.warn("Remove Success !", {
            position: "top-center"
        });
    }

    return (
        <div className="border w-full p-5 rounded">
            <img className="rounded w-full h-64" src={img} alt="" />
            <h2 className="text-2xl font-semibold mt-5">{name}</h2>
            <p className="text-base my-3  text-gray-500">{country}</p>
            <div className="flex justify-between text-base  text-gray-500">
                <p>{category}</p>
                <p>{hand_batting}</p>
            </div>

            <div className="text-center">
                <button onClick={() => handleRemovePlayer(pla, notifyPlayerRemove)} className='text-base font-semibold hover:from-pink-500 hover:to-orange-500 bg-gray-200 py-3 px-3 rounded-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Remove Player</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

Selected.propTypes = {
    pla: PropTypes.object,
    handleRemovePlayer: PropTypes.func,
}
export default Selected;