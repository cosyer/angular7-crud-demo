import { Request, Response } from "express";

import pool from "../database";

class GamesController {
  // 查询列表
  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query("SELECT * FROM games");
    res.json(games);
  }

  // 查询单条
  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
    if (games.length > 0) {
      return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });
  }

  // 创建
  public async create(req: Request, res: Response): Promise<void> {
    const result = await pool.query("INSERT INTO games set ?", [req.body]);
    res.json({ message: "Game Saved" });
  }

  // 更新
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const oldGame = req.body;
    await pool.query("UPDATE games set ? WHERE id = ?", [req.body, id]);
    res.json({ message: "The game was Updated" });
  }

  // 删除
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM games WHERE id = ?", [id]);
    res.json({ message: "The game was deleted" });
  }
}

const gamesController = new GamesController();
export default gamesController;
