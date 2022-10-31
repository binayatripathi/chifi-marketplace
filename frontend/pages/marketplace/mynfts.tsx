import { MintFive } from "../../stacksFoundation/mintPacks"
import { ArrowRight } from "@mui/icons-material";
export default function MyNfts() {
    return (
        <div>
            <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#1</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/regular foil/Captain_Commando_regularfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>

                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#2</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-white m-4">
                        <img
                            src="/images/individualNfts/regular foil/Doctor Wacky_regularfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#3</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/cosmic foil/Clueless_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#4</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/cosmic foil/Jackpot_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#5</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/cosmic foil/Alpha_Bot_cosmicfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#6</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/gold foil/Shambo_goldfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 mb-2 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>
                <div className="bg-orange-400 flex flex-col rounded-md">
                    <div className='flex flex-row mt-4 basis-1/5'>
                        <div className="ml-2 mr-24 basis-1/2">#7</div>
                        <button className="bg-cyan-700 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                            Transfer
                        </button>
                    </div>
                    <div className="basis-2/3 bg-black m-4">
                        <img
                            src="/images/individualNfts/gold foil/Femme_Fatale_goldfoil_dayone_card.png"
                            alt="example"
                        />
                    </div>
                    <button className="bg-cyan-700 mb-2 text-slate-50 p-2 rounded-md	mx-4" onClick={() => MintFive()}>
                        List
                    </button>
                </div>

            </div>
        </div>)

}