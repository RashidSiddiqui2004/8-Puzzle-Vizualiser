import { SparklesCore } from "../ui/sparkles";

const AppName = () => {
    return (
        <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                8-Puzzle Game
            </h1>
            <div className="w-[60rem] h-20 relative">
            
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
 
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>

        </div>
    )
}

export default AppName