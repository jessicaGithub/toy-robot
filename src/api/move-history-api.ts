import * as fs from 'fs'
import * as path from 'path'

const moveHistoryFile = path.join(__dirname, 'movehistory.json')

interface MoveHistory {
  x: number;
  y: number;
  face: string;
}

class MoveHistoryAPI {
  private myMoves: MoveHistory[] = []

  constructor() {
    this.myMoves = JSON.parse(fs.readFileSync(moveHistoryFile, {
      encoding: 'utf-8',
    }))
  }

  private saveMyMove() {
    if (!fs.existsSync(path.dirname(moveHistoryFile))) {
      fs.mkdirSync(path.dirname(moveHistoryFile))
    }
    const data = JSON.stringify(this.myMoves)
    fs.writeFileSync(moveHistoryFile, data, {
      encoding: 'utf-8',
    })
  }

  clearall() {
    this.myMoves.length = 0
    this.saveMyMove()
  }

  add(x: number, y: number, face: string) {
    const newMove: MoveHistory = {
      x: x,
      y: y,
      face: face,
    }
    this.myMoves.push(newMove)
    this.saveMyMove()
  }

  remove(index: number) {
    this.myMoves.splice(index, 1)
    this.saveMyMove()
  }

  list() {
    return this.myMoves
  }

  get(index: number): MoveHistory {
    return this.myMoves[index]
  }
}

const api = new MoveHistoryAPI()
export default api
