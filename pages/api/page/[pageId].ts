import type { NextApiRequest, NextApiResponse } from "next"
import notion from "../../../utils/notion"

type Data = {
  results: any
}

async function getPage(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { pageId } = req.query
  const response = await notion.pages.retrieve({ page_id: pageId as string })

  res.status(200).json({ results: response })
}

export default getPage
