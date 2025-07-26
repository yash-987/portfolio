import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MainPage } from './pages/MainPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';

import { SkillsPage } from './pages/SkillsPage';
import { AboutPage } from './pages/AboutPage';

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-50">
				<Navbar />

				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/skills" element={<SkillsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
