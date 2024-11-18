import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Player = ({ player, handleSelectedPlayer}) => {
   
    const { category, country, hand_batting, img, name, price } = player
    const notify = () => {
        toast.success("Selected Success  !", {
            position: "top-center"
        });
    }

    const notifyWarning = () => {
        toast.warn("Not enough money to by this player Claim some Credit !", {
            position: "top-center"
        });
    }
    const notifyAlradyAddWarning = () => {
        toast.warn("Already Add The player !", {
            position: "top-center"
        });
    }
    const notifyAlready6Players = () => {
        toast.warn("Sorry 6 Player Selected !", {
            position: "top-center"
        });
    }
    return (
        <div className="border-2 p-5 rounded border-fuchsia-200">
        <img className="rounded w-full h-72" src={img} alt="" />
        <h1 className="font-semibold text-xl mt-4">{name}</h1>
        <div className="flex justify-between items-center my-3 text-base text-gray-500 font-semibold">
            <p className="">{country}</p>
            <p className="font-bold border-2 rounded-lg px-3 py-2 border-fuchsia-200">{category}</p>
        </div>
        <hr />
        <p className="text-base font-semibold">Rating</p>
        <div className="flex justify-between text-base font-semibold my-3">
            <p>Left-Hand-Bat</p>
            <p>{hand_batting}</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Price: ${price}</p>
            <button onClick={() => handleSelectedPlayer(player, notify, notifyWarning, notifyAlradyAddWarning, notifyAlready6Players)} className='text-base font-semibold hover:from-pink-500 hover:to-orange-500 bg-gray-200 py-3 px-3 rounded-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Choose Player</button>
        </div>
       <ToastContainer></ToastContainer>
    </div>

    );
};
Player.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayer: PropTypes.func,
}
export default Player;