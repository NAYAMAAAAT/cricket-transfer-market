import PropTypes from "prop-types";

const Player = ({player}) => {
    const { category, country, hand_batting, img, name, price } = player
    return (
        <div className="border-2 p-5 rounded border-fuchsia-200">
        <img className="rounded w-full h-70 object-cover" src={img} alt="" />
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
            <button className='text-base font-semibold hover:from-pink-500 hover:to-orange-500 bg-gray-200 py-3 px-3 rounded-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Choose Player</button>
        </div>
     
    </div>

    );
};
Player.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayer: PropTypes.func,
}
export default Player;