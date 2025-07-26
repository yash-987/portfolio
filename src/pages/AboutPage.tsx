import { UserIcon } from '../icons/UserIcon';

export const AboutPage = () => (
	<div className="min-h-screen bg-gray-50 py-20">
		<div className="container mx-auto px-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					About Me
				</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
							<UserIcon />
						</div>
					</div>
					<div>
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">
							Passionate Developer & Problem Solver
						</h3>
						<p className="text-gray-600 mb-6">
							An Enthusiastic and detail-oriented MERN Stack Web Developer with
							a solid foundation in MongoDB, Express.js, React.js, and Node.js.
							Proficient in designing and developing dynamic, scalable, and
							responsive web applications with seamless frontend-backend
							integration.
						</p>
						<p className="text-gray-600 mb-6">
							Strong understanding of modern development practices including
							version control (Git) and deployment strategies using platforms
							like Render and Vercel. Passionate about continuous learning,
							problem-solving, and leveraging technology to build impactful
							digital solutions.
						</p>
						<div className="flex gap-20">
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-600">5+</div>
								<div className="text-gray-600">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-600">1+</div>
								<div className="text-gray-600">
									Years of Hands-on Experience
								</div>
							</div>
							{/* <div className="text-center">
								<div className="text-2xl font-bold text-blue-600">100%</div>
								<div className="text-gray-600">Client Satisfaction</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
