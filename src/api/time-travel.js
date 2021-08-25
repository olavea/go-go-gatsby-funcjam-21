
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
}

export default async function handler(req, res) {
    const { city, year } = req.query;
    res.send(`You time travelled to the city of ${city}, in year ${year}`)
}