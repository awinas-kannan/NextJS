export default function handler(req, res) {
  console.log(req)
  console.log(req.query)

  // Following hash value will notnbe available in server side
  // console.log(window.location.hash);
  
  const params = req.query.params
  console.log(params)
  const data = {
    query: req.query,
    url: req.url,
  }
  res.status(200).json(data)
}
