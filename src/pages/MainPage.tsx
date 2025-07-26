import { AboutPage } from './AboutPage';
import { SkillsPage } from './SkillsPage';
import { ProjectsPage } from './ProjectsPage';
import { ContactPage } from './ContactPage';
import { HomePage } from './HomePage';

export const MainPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<section id="home">
				<HomePage />
			</section>
			<section id="about">
				<AboutPage />
			</section>
			<section id="skills">
				<SkillsPage />
			</section>
			<section id="projects">
				<ProjectsPage />
			</section>
			<section id="contact">
				<ContactPage />
			</section>
		</div>
	);
};
