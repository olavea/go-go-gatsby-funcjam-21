export default async function handler(req, res) {
    const { city, year } = req.query;
    res.send(`You time travelled to the city of ${city}, in year ${year}`)
}