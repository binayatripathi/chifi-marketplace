import MenuNftTypes from "../../components/menudropdown"
import { mintCard } from "../../stacksFoundation/mintCard"
import { authenticate, userSession } from "../../stacksFoundation/connectWallet"
import { useState, useEffect } from "react"


export default function IndividualNfts() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData) => {
                setUserData(userData);
            })
        }
        else if (userSession.isUserSignedIn()) {
            setLoggedIn(true);
            setUserData(userSession.loadUserData());
        }
    }, []);
    const checkloggedIn = () => {
        
        userSession.isUserSignedIn() ? mintCard()
            : authenticate()
    }
    const images=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    return (
        <div>
            <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/cosmic foil/Alpha_Bot_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                {/* <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/cosmic foil/Astro_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Blink_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Clueless_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Commando_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Doctor_Wacky_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Elder_Prime_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div>
                <div className="bg-zinc-400 flex flex-col rounded-md">
                    <div className='flex flex-row basis-1/5'>
                        <div className="ml-2 basis-1/2">#1</div>
                        <div className="basis-1/2 ml-14 mr-0">142069.000 STX</div>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img className="object-fill h-full w-full"
                            src="/images/individualNfts/cosmic foil/Femme_Fatale_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={checkloggedIn}>
                        Mint Card
                    </button>
                </div> */}

            </div>
            <MenuNftTypes />
        </div>)
}