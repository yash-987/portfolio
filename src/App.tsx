import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MainPage } from './pages/MainPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';

import { SkillsPage } from './pages/SkillsPage';
import { AboutPage } from './pages/AboutPage';
import { ToastContainer } from 'react-toastify';

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
				<ToastContainer
					position="bottom-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
