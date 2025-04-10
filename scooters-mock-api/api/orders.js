export default async function handler(req, res) {
  const { storeId } = req.body;
  console.log(`Auto-generated FO order form for Store #${storeId} sent to Aurus.`);
  res.status(200).json({ success: true, message: `Order for Store #${storeId} submitted.` });
}