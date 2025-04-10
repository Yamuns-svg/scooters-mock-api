export default function handler(req, res) {
  const summary = {
    total: 24,
    pendingCredentials: 6,
    readyToShip: 12
  };
  res.status(200).json(summary);
}