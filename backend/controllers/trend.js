import PostMessage from "../models/post.js"

export const getTrends = async (req, res) => {
  try {
    const post = await PostMessage.find({
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    })

    const postWithHash = post.filter(({ hash }) => hash)

    let postQuantity = {}
    postWithHash.forEach(({ hash }) => {
      if (!postQuantity[hash]) {
        postQuantity[hash] = 1
      } else {
        postQuantity[hash]++
      }
    })

    const trendObj = Object.entries(postQuantity)
      .sort((a, b) => (a[1] < b[1] ? 1 : -1))
      .slice(0, 5)
    res.status(200).json(trendObj)
  } catch (error) {}
}
