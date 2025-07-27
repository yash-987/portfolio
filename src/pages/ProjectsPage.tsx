import { ProjectCard } from '../components/ProjectCard';
import youtubeImage from '../assets/youtube.jpg';
import instagramImage from '../assets/instagram.jpg';
import chatAppImage from '../assets/chatApp.jpg';
import brainlyImage from '../assets/brainly.jpg';
export const ProjectsPage = () => {
	const projects = [
		{
			title: 'ChatWise',
			description:
				'Built a full-stack responsive Chat Application using Mern Stack with the integration of Socket.IO for real-time messages. This app provides one to one as well as group chat feature.',
			imageUrl: chatAppImage,
			githubUrl: 'https://github.com/yash-987/ChatApp',
			liveUrl: 'https://chatwise-a4ba.onrender.com/',
			technologies: [
				'React.js',
				'Express.js',
				'Node.js',
				'MongoDB',
				'Socket.IO',
			],
		},
		{
			title: 'Instagram Clone',
			description:
				'A full-stack responsive Instagram app using ReactJs, ChakraUI, and Firebase. This app allows users to create, edit and delete posts providing a user-frendly experience.',
			imageUrl: instagramImage,
			githubUrl: 'https://github.com/yash-987/instagram',
			liveUrl: 'https://instagram-clone-yash.vercel.app/',
			technologies: ['React.js', 'Firebase', 'ChakraUI'],
		},
		{
			title: 'Youtube Clone',
			description:
				'A responsive weather application with location-based forecasts.',
			imageUrl: youtubeImage,
			githubUrl: 'https://github.com/yash-987/youtube-clone',
			liveUrl: 'https://youtube-clone-234.vercel.app/',
			technologies: ['React', 'API Integration', 'Chart.js'],
		},
		{
			title: 'Second Brain',
			description:
				'A second brain application to save notes, articles, etc. and share them.',

			imageUrl: brainlyImage,
			githubUrl: 'https://github.com/yash-987/second-brain',
			liveUrl: 'https://brain-keeper.vercel.app/',
			technologies: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					My Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</div>
	);
};
