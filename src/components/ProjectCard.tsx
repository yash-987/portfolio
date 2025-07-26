import type { ProjectCardProps } from '../utils/types';

export const ProjectCard = ({
	title,
	description,
	imageUrl,
	githubUrl,
	liveUrl,
	technologies,
}: ProjectCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
			<div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover "
					/>
				) : (
					<div className="text-gray-400 text-center">
						<p>Project Image</p>
					</div>
				)}
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-4">
					<a
						href={githubUrl || '#'}
						className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>GitHub</span>
					</a>
					<a
						href={liveUrl || '#'}
						className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Live Demo</span>
					</a>
				</div>
			</div>
		</div>
	);
};
