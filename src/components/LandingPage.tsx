 
import GamePlayCTA from './playground-area/GamePlayCTA' 
import Layout from './layouts/Layout'
import { HeroSection } from './HeroSection'

const LandingPage = () => {
    return (
        <Layout>
            <HeroSection />
            <GamePlayCTA />
        </Layout>
    )
}

export default LandingPage