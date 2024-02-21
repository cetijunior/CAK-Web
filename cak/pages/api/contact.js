// pages/api/contact.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Perform server-side logic, e.g., sending email
        const mailtoLink = `mailto:bsncetijunior@gmail.com?subject=${subject}&body=Hey Ceej, I am ${name}. ${message} (${email})`;

        // Respond with the mailto link or other relevant data
        res.status(200).json({ mailtoLink });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
