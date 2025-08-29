const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                user_id: "Sashidhar_Reddy_29082025",
                message: "Invalid input: 'data' must be an array."
            });
        }

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];

        data.forEach(item => {
            if (!isNaN(item)) {
                if (parseInt(item) % 2 === 0) {
                    even_numbers.push(item.toString()); 
                } else {
                    odd_numbers.push(item.toString()); 
                }
            }
            else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
                alphabets.push(item.toUpperCase()); 
            }
        });

        const user_id = "Sashidhar_Reddy_29082025"; 

        const responsePayload = {
            is_success: true,
            user_id: user_id,
            email: "putluru.sashidhar2022@vitstudent.ac.in", 
            roll_number: "22BCE1511", 
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets,
        };

        res.status(200).json(responsePayload);

    } catch (error) {
        console.error("Error processing request:", error);

        res.status(500).json({
            is_success: false,
            user_id: "Sashidhar_Reddy_29082025",
            message: "An internal server error occurred.",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}/bfhl`);
});
