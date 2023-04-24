import { connectToMongoDB } from "@/lib/mongodb";
import hash from "bcryptjs";
import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });
    const { fullName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ erro: "User Already exist" });
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: "Password should be 6 characters long" });

      const hashedPassword = await hash;
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
