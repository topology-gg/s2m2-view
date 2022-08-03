import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise

    const db = client.db('s2m2')
    const state = await db
        .collection ('state')
        .find ()
        .toArray ()

    res.status(200).json({ 'state': state })
}
