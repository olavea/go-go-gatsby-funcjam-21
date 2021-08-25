
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
}

export default async function handler(req, res) {
    const { city, year } = req.query;
    const message = `You time travelled to the city of ${city}, in year ${year} and teamed up with a Pirate `

    res.json({ message: message, princess: PiRATE_PRiNCESS })
    // res.send(message)
}