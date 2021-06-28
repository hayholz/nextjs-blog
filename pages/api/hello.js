export default function handler(req, res) {
  // this is a note
  res.status(200).json({ text: 'Hello' })
}