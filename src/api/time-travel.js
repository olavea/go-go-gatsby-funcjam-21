export default async function handler(req, res) {
    const { city } = req.query;
    res.send(`You time travelled to the city of ${city}`)
}