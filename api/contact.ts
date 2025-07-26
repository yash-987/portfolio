import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import z from 'zod';

const contactBodySchema = z.object({
	name: z.string(),
	email: z.email(),
	message: z.string(),
});

type ContactBody = z.infer<typeof contactBodySchema>;

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { name, email, message }: ContactBody = req.body;

	const { success } = contactBodySchema.safeParse(req.body);

	if (!success) {
		return res.status(403).json({ msg: 'Zod validation failed' });
	}

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});

	console.log('EMAIL:', !!process.env.EMAIL);
	console.log('PASS:', !!process.env.PASS);
	try {
		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL,
			replyTo: email,
			subject: `Contact from ${name}`,
			text: message,
		});

		res.status(200).json({
			message: 'Message sent',
			data: {
				name,
				email,
				message,
			},
		});
	} catch (error) {
		console.error('Error sending mail:', error);
		res
			.status(500)
			.json({ message: 'Failed to send message', error: error.message });
	}
}
