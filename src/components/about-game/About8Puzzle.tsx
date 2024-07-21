
import { TextGenerateEffect } from "../ui/text-generate"
import poster from '../../../public/8-puzzle.png'
import VideoLinker from "./VideoLinker";
import { FaPlaystation } from "react-icons/fa";
import { Link } from "react-router-dom";


const About8Puzzle = () => {

    const generalIntro = `The 8-puzzle is a well-known problem in the field of artificial intelligence and puzzle-solving. It serves as an intriguing model problem with various applications and is widely used to explore heuristic search and state-space exploration.
`;
    const problemWRTai = `The 8-puzzle, often regarded as a small, solvable piece of a larger puzzle, holds a central place in AI because of its relevance in understanding and developing algorithms for more complex problems.
    `;

    return (
        <div className="text-left text-pretty text-raleway">
            <h1 className="text-3xl font-extrabold text-gray-200 my-6">8 Puzzle Problem in AI</h1>

            <Link to={'/8-puzzle-game-play'} className="fixed right-5 top-4 flex gap-1"><FaPlaystation className="text-4xl"></FaPlaystation><span className="text-sm mt-0">Start Puzzle</span></Link>

            <TextGenerateEffect words={generalIntro} />

            <img src={poster} alt="8-Puzzle Problem" className="flex mx-[20vw] text-center items-center justify-center" />
            <a href="https://www.javatpoint.com/8-puzzle-problem-in-python" target="_blank" className=" text-center text-xs"><h2>Image Source (javatpoint)</h2></a>

            <h1 className="text-3xl font-extrabold text-gray-200 my-6">What is 8 Puzzle Problem in AI and Its Relevance?</h1>
            <TextGenerateEffect words={problemWRTai} />

            <h1 className="text-3xl font-extrabold text-gray-200 my-6">Rules and Constraints</h1>

            <p className="text-base text-gray-300 mb-4">
                To tackle the 8-puzzle, it's crucial to comprehend its rules and constraints:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>
                    The 8-puzzle is typically played on a 3x3 grid, which provides a 3x3 square arrangement for tiles. This grid structure is fundamental to the problem's organization.
                </li>
                <li>
                    The puzzle comprises 8 numbered tiles (usually from 1 to 8) and one blank tile. These numbered tiles can be slid into adjacent positions (horizontally or vertically) when there's an available space, which is occupied by the blank tile.
                </li>
                <li>
                    The objective of the 8-puzzle is to transform an initial state, defined by the arrangement of the tiles on the grid, into a specified goal state. The goal state is often a predefined configuration, such as having the tiles arranged in ascending order from left to right and top to bottom, with the blank tile in the bottom-right corner.
                </li>
            </ul>

            <h1 className="text-3xl font-extrabold text-gray-200 my-6">Initial and Goal States</h1>

            <p className="text-base text-gray-300 mb-4">
                The initial state of the 8-puzzle represents the starting configuration. It's the state from which the puzzle-solving process begins.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>The initial state can be any arrangement of the tiles, which can be specified manually or generated randomly.</li>
                <li>The problem-solving algorithm aims to transform the initial state into the goal state using a sequence of valid moves.</li>
            </ul>

            <h1 className="text-2xl font-extrabold text-gray-200 my-6">How many configurations are there in the 8-puzzle?</h1>

            <p className="text-base text-gray-300 mb-4">
                The set of all possible configuration in the problem space, consists of 3,62,880 different configurations of the 8 tiles and blank space.
                <br /> For the 8-puzzle, a straight forward description is a 3X3 array of matrix of numbers.
            </p>

            <h1 className="text-3xl font-extrabold text-gray-200 my-6">Get a Closer Look at the Problem</h1>

            <VideoLinker src="https://www.youtube.com/embed/TVUkCyJygPE?list=PLyqSpQzTE6M8N9lDWllq6NqB5dmpy6gtc"
                title="8 Puzzle Problem with AI" />

            <a href="https://www.youtube.com/channel/UCYa1WtI-vb_bx-anHdmpNfA" target="_blank" className=" text-center text-xs"><h2>Video Source (NPTEL-NOC IITM)</h2></a>


        </div>
    )
}

export default About8Puzzle