
// The PiRATE_PRiNCESS we are looking to team up with
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
    skill: "serverless_gatsby_function_programming"
}

async function timeShipHandler(req, res) {
    // Get the data from the query of req-the-bat 🦇
    const { city, year, price } = req.query;

    // Give the data to res-the-cat 😺 and
    // then the TimeShip is on a test trip
    res.status(200).json({
        message: `You time travelled to the city of ${city}, in year ${year} and burned ${price} cents in gold. To go back home, build your own serverless Gatsby function TimeShip with the help of a Pirate`,
        princess: PiRATE_PRiNCESS
    });
}

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            await timeShipHandler(req, res);
        } else {
            res.status(405).json({ message: "Method not supported" });
        }
    } catch (error) {
        // Something went wrong, log it
        console.error(error.message);
        // if something went wrong
        res.status(500).json({
            message: `Faulty 🗼 TimeShip`,
        });
    }
}