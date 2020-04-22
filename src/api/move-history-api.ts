import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const myMove = path.join(os.homedir(), 'api', 'movehistory.json')

interface MoveHistory {
  x: number;
  y: number;
  face: string;
}

class MoveHistoryAPI {
  private myMoves: MoveHistory[] = []

  constructor() {
    this.myMoves = JSON.parse(fs.readFileSync(myMove, {
      encoding: 'utf-8',
    }))
  }

  private saveMyMove() {
    // make folder for the first run
    if (!fs.existsSync(path.dirname(myMove))) {
      fs.mkdirSync(path.dirname(myMove))
    }
    const data = JSON.stringify(this.myMoves)
    fs.writeFileSync(myMove, data, {
      encoding: 'utf-8',
    })
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
