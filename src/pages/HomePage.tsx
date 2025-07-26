import { useNavigate } from 'react-router-dom';
import { UserIcon } from '../icons/UserIcon';

export const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div className="container  mx-auto px-6 py-20 ">
			<div className="flex flex-col lg:flex-row items-center ">
				<div className="lg:w-1/2 mb-10 lg:mb-0 lg:justify-center lg:ml-12 ">
					<h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6  flex justify-center md:justify-start ">
						Hi, I'm <span className="text-blue-600">Yash </span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 flex justify-center self-center ">
						A Full Stack Developer passionate about creating beautiful and
						functional web applications.
					</p>
					<div className="flex gap-4 justify-center md:justify-start">
						<button
							onClick={() => navigate('/projects')}
							className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							View My Work
						</button>
						<button
							onClick={() => navigate('/contact')}
							className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
						>
							Contact Me
						</button>
					</div>
				</div>
				<div className="lg:w-1/2 flex justify-center">
					<div className="w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
						<UserIcon />
					</div>
				</div>
			</div>
		</div>
	);
};
