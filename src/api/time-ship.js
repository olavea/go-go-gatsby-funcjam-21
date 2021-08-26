const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
    skill: "serverless_gatsby_function_programming"
}

async function postHandler(req, res) {
    // Get the data from the query of req-the-bat 🦇
    const { city, year, price } = req.query;

    // Give the data to res-the-cat 😺
    res.status(200).json({
        message: `You time travelled to
            the city of ${city},
            in year ${year}, burned
            ${price} cents in gold and teamed up with
            a Pirate
        `,
        princess: PiRATE_PRiNCESS
    });
}

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            await postHandler(req, res);
        } else {
            res.status(405).json({ message: "Method not supported" });
        }
    } catch (error) {
        // Something went wrong, log it
        console.error(error.message);
        // if ...8:45
        res.status(500).json({
            message: `Faulty 🗼 TimeShip`,
        });
    }
}