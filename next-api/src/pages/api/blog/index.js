export default function handler(req, res) {
    console.log(req)
    // debugger;
    res.status(200).json({
        name: 'Blog API route',
        url: req.url,
        method: req.method
    })
}