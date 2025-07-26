import { useState } from 'react';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { MapIcon } from '../icons/MapIcon';

export const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Message sent! (This is a demo)');
		setFormData({ name: '', email: '', message: '' });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen bg-white py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					Get In Touch
				</h2>
				<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<div>
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">
							Let's Connect
						</h3>
						<p className="text-gray-600 mb-8">
							I'm always interested in new opportunities and collaborations.
							Whether you have a project in mind or just want to chat about
							technology, feel free to reach out!
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<MailIcon />
								<span className="text-gray-700">ys2599518@gmail.com</span>
							</div>
							<div className="flex items-center gap-4">
								<PhoneIcon />
								<span className="text-gray-700">+919870202249</span>
							</div>
							<div className="flex items-center gap-4">
								<MapIcon />
								<span className="text-gray-700">New Delhi, India</span>
							</div>
						</div>
					</div>
					<div>
						<div className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
								></textarea>
							</div>
							<button
								onClick={handleSubmit}
								className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
							>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
