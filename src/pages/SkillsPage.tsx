import { CiPalette } from 'react-icons/ci';
import { SkillCard } from '../components/SkillCard';
import { CodeIcon } from '../icons/CodeIcon';
import { DataBaseIcon } from '../icons/DataBaseIcon';
// import { PaletteIcon } from '../icons/PaletteIcon';
import { ServerIcon } from '../icons/ServerIcon';
import { RiTailwindCssFill } from 'react-icons/ri';

export const SkillsPage: React.FC = () => {
	const skills = [
		{
			name: 'React.js',
			level: 90,
			icon: <CodeIcon />,
		},
		{
			name: 'TypeScript',
			level: 85,
			icon: <CodeIcon />,
		},
		{
			name: 'MongoDB',
			level: 90,
			icon: <DataBaseIcon />,
		},
		{
			name: 'PostgreSQL',
			level: 70,
			icon: <DataBaseIcon />,
		},
		{
			name: 'Express.js',
			level: 90,
			icon: <ServerIcon />,
		},

		{
			name: 'Node.js',
			level: 80,
			icon: <ServerIcon />,
		},

		{
			name: 'Tailwindcss',
			level: 85,
			icon: <RiTailwindCssFill color="blue" size={24} />,
		},

		{
			name: 'Next.js (Currently Learning)',
			level: 10,
			icon: <CodeIcon />,
		},
		{
			name: 'Python',
			level: 45,
			icon: <CodeIcon />,
		},

		{
			name: 'UI/UX Design',
			level: 60,
			icon: <CiPalette size={24} />,
		},
	];

	return (
		<div className="min-h-screen bg-white py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					Skills & Expertise
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{skills.map((skill, index) => (
						<SkillCard key={index} {...skill} />
					))}
				</div>
				<div className="mt-16 text-center">
					<h3 className="text-2xl font-semibold text-gray-800 mb-8">
						Technologies I Work With
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							'React',
							'TypeScript',
							'Node.js',
							'Python',
							'PostgreSQL',
							'MongoDB',
							'Tailwindcss',
							'Git',
							'Figma',
						].map((tech) => (
							<span
								key={tech}
								className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
