import axios from 'axios';

export default async function login(req, res) {
  const { method  } = req;
  switch (method) {
    case 'POST':
      try {
        const response = await axios.post(process.env.BACKEND_URL + '/auth' + "createOrCheckEmail", req.body);
        return res.status(200).json(response.data);
      } catch (err) {
        console.log(err);
        return res.status(err.response.status).json({ error: err.message });
      }

    default:
      return res.status(405)(`Method ${method} Not Allowed`);
  }
}