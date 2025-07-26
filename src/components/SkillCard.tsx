import type { SkillProps } from '../utils/types';

export const SkillCard = ({ name, level, icon }: SkillProps) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<div className="flex items-center gap-3 mb-3">
				{icon}
				<h3 className="text-lg font-semibold text-gray-800">{name}</h3>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2">
				<div
					className="bg-blue-600 h-2 rounded-full transition-all duration-300"
					style={{ width: `${level}%` }}
				></div>
			</div>
			<span className="text-sm text-gray-600 mt-2 block">{level}%</span>
		</div>
	);
};
