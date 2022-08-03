import clientPromise from '../../lib/mongodb'


export default async function handler(req, res) {
    const client = await clientPromise

    const db = client.db('s2m2')
    const puzzles = await db
        .collection ('puzzles')
        .find ({'_chain.valid_to' : null})
        .sort ({ 'puzzle_id': 1 })
        .toArray ()

    res.status(200).json({ 'puzzles': puzzles })
}
