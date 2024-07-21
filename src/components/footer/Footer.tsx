import { SparklesCore } from "../ui/sparkles";
import { Icon } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="w-full bg-black flex flex-col items-center my-20 justify-center overflow-hidden rounded-md">

            <div className="w-[40rem] relative">

                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

            </div>

            <p> &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ by Rashid </p>

            <div className="flex justify-center mt-4 space-x-4">
                <a href=" https://github.com/RashidSiddiqui2004" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaGithub} boxSize={25} />
                </a>
                <a href="https://www.linkedin.com/in/rashid-siddiqui2004/" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaLinkedin} boxSize={25} />
                </a>
                <a href="https://twitter.com/RashidSidd3319" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaTwitter} boxSize={25} />
                </a>
                <a href="https://instagram.com/rashid_siddiqui2026" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaInstagram} boxSize={25} />
                </a>
            </div>
        </div>
    )
}

export default Footer