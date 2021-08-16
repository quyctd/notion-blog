import type { NextApiRequest, NextApiResponse } from "next"
import notion from "../../utils/notion"

type Data = {
  results: any
}

async function getDatabase(req: NextApiRequest, res: NextApiResponse<Data>) {
  const DB_ID = process.env.NOTION_DATABASE_ID!
  const response = await notion.databases.query({
    database_id: DB_ID,
  })

  res.status(200).json({ results: response.results })
}

export default getDatabase
