export interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	githubUrl: string;
	liveUrl: string;
	technologies: string[];
}

export interface SkillProps {
	name: string;
	level: number;
	icon?: React.ReactNode;
}

export interface NavbarProps {
	currentPage: string;
	onPageChange: (page: string) => void;
}
