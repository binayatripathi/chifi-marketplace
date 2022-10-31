import { MintFive,MintSeven,MintTwentyOne,MintFiveDemo } from "../../stacksFoundation/mintPacks"
export default function Packs(){
    return (<div>
        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-orange-400 flex flex-col rounded-md border-8 border-yellow-800">
                <div className='flex flex-row basis-1/5'>
                    <div className="ml-2 basis-1/2"></div>
                    <div className="basis-1/2 ml-64 mr-0">15 STX</div>
                </div>
                <div className="basis-2/3 bg-black m-4">
                    <img className="object-fill w-96 h-96"
                        src="images/packs/fivepack.png"
                        alt="example"
                    />
                </div>
                <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintFiveDemo()}>
                    Mint 5 Cards Pack
                </button>
            </div>
            <div className="bg-orange-400 flex flex-col rounded-md border-8 border-yellow-800">
                <div className='flex flex-row basis-1/5'>
                    <div className="ml-2 basis-1/2"></div>
                    <div className="basis-1/2 ml-64 mr-0">50 STX</div>
                </div>
                <div className="basis-2/3 bg-black m-4">
                    <img className="object-fill w-96 h-96"
                        src="images/packs/sevenpack.png"
                        alt="example"
                    />
                </div>
                <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintSeven()}>
                    Mint 7 Cards Pack
                </button>
            </div>
            <div className="bg-orange-400 flex flex-col rounded-md border-8 border-yellow-800">
                <div className='flex flex-row basis-1/5'>
                    <div className="ml-2 basis-1/2"></div>
                    <div className="basis-1/2 ml-64 mr-0">100 STX</div>
                </div>
                <div className="basis-2/3 bg-black m-4">
                    <img className="object-fill w-96 h-96"
                        src="images/packs/dayone_collectorsbox_goldfoil.png"
                        alt="example"
                    />
                </div>
                <button className="bg-cyan-700 text-slate-50 p-2 mb-2 rounded-md	mx-4" onClick={() => MintTwentyOne()}>
                    Mint 21 Cards Pack
                </button>
            </div>
            
        </div>
    </div>)
}