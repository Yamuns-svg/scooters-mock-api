export default function handler(req, res) {
  const stores = [
    { id: 2387, status: "Submitted to Testing" },
    { id: 2390, status: "Failed / Working with Customer" },
    { id: 2395, status: "Passed" },
    { id: 2401, status: "Missing VAR Credentials" },
  ];

  if (req.query.missing === "var_credentials") {
    return res.status(200).json(stores.filter(s => s.status.toLowerCase().includes("missing")));
  }

  res.status(200).json(stores);
}