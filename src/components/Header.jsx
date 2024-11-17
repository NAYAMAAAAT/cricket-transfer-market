
const Header = () => {
    return (
    <div  className="flex justify-between w-11/12 mt-12 items-center mx-auto">
     
        <div>
            <img className="w-20" src="/src/assets/logo.png"  alt="logo"></img>
        </div>
        <div className="flex gap-5 justify-center items-center ">
                <a>Home</a>
                <a>Team</a>
                <a>Fixture</a>
                <a>Schedules</a>
             
        
        <div>
            <button className="flex gap-2 items-center border border-solid rounded-xl px-5">
                Coin
                <img className="w-8"src="/src/assets/download.png" />
            </button>
        </div>
     </div>
  </div>
    );
};

export default Header;