import express from 'express';

const router = express.Router();

router.post("/echo", (req, res) => {
    let message = req.body.message || "Please enter something";
    res.json({echo: message});
});

export default router;