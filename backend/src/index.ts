import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import z from 'zod';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const contactBodySchema = z.object({
	name: z.string(),
	email: z.email(),
	message: z.string(),
});

type ContactBody = z.infer<typeof contactBodySchema>;
app.post('/api/contact', async (req, res) => {
	const { name, email, message }: ContactBody = req.body;

	const { success } = contactBodySchema.safeParse(req.body);

	if (!success) {
		res.status(403).json({ msg: 'Zod validation failed' });
		return;
	}

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});

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
		res.send(error);
		res.status(500).json({ message: 'Failed to send message' });
	}
});
const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
