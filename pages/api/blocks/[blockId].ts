import type { NextApiRequest, NextApiResponse } from "next"
import notion from "../../../utils/notion"

type Data = {
  results: any
}

async function getBlocks(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { blockId } = req.query
  const response = await notion.blocks.children.list({
    block_id: blockId as string,
    page_size: 50,
  })

  res.status(200).json({ results: response.results })
}

export default getBlocks
