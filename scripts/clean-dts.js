import fs from "fs"
import path from "path"

const dtsPath = path.resolve(process.cwd(), "dist/index.d.ts")
const content = fs.readFileSync(dtsPath, "utf-8")
// 删除空导出并去除多余空行
const cleaned = content
  .replace(/\nexport\s*\{\}\s*;?$/g, "")
  .replace(/\n{3,}/g, "\n\n")
fs.writeFileSync(dtsPath, cleaned)
