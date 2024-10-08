import type { player } from './types.js';
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import Database from 'better-sqlite3';

const db = new Database('src/lib/data/players.sqlite', { verbose: console.log });

export type Database = typeof db;

// export const adapter = new BetterSqlite3Adapter(db, {
// 	id: 'id',
// 	name: 'name',
// 	team: 'team',
// 	status: 'status'
// });
// db.pragma('journal_mode = WAL');

export function getPlayers(): player[] {
	const sql = `SELECT players.id, players.name, players.team, players.position, players.rank, players_keeper.player_status as status FROM players JOIN players_keeper on players_keeper.player_name = players.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getQuarterbacks(): player[] {
	const sql = `SELECT qb.id, qb.name, qb.team, qb.position, qb.rank, players_keeper.player_status as status FROM qb JOIN players_keeper on players_keeper.player_name = qb.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getTightEnds(): player[] {
	const sql = `SELECT te.id, te.name, te.team, te.position, te.rank, 
players_keeper.player_status as status 
FROM te 
JOIN players_keeper on players_keeper.player_name = te.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getKickers(): player[] {
	const sql = `SELECT k.id, k.name, k.team, k.position, k.rank, players_keeper.player_status as status FROM k JOIN players_keeper on players_keeper.player_name = k.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getRunningBacks(): player[] {
	const sql = `SELECT rb.id, rb.name, rb.team, rb.position, rb.rank, players_keeper.player_status as status FROM rb JOIN players_keeper on players_keeper.player_name = rb.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getReceivers(): player[] {
	const sql = `SELECT wr.id, wr.name, wr.team, wr.position, wr.rank, players_keeper.player_status as status FROM wr JOIN players_keeper on players_keeper.player_name = wr.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getDefBacks(): player[] {
	const sql = `SELECT db.id, db.name, db.team, db.position, db.rank, players_keeper.player_status as status FROM db JOIN players_keeper on players_keeper.player_name = db.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getDefLinemen(): player[] {
	const sql = `SELECT dl.id, dl.name, dl.team, dl.position, dl.rank, players_keeper.player_status as status FROM dl JOIN players_keeper on players_keeper.player_name = dl.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}

export function getLinebackers(): player[] {
	const sql = `SELECT lb.id, lb.name, lb.team, lb.position, lb.rank, players_keeper.player_status as status FROM lb JOIN players_keeper on players_keeper.player_name = lb.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
export function getIdp(): player[] {
	const sql = `SELECT idp.id, idp.name, idp.team, idp.position, idp.rank, players_keeper.player_status as status FROM idp JOIN players_keeper on players_keeper.player_name = idp.name`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
export function getDefense(): player[] {
	const sql = `SELECT * FROM players WHERE position LIKE '%DST%'`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();

	return rows as player[];
}
export function getRoster(): player[] {
	const sql = `select * from players_keeper
join players on players.name = players_keeper.player_name
where player_status = 'myteam'`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
// these were changed for the new stuff
export function updateStatusToTaken(id: number) {
	const sql = `UPDATE all_players SET status = 'taken' WHERE id = ?`;
	const stmt = db.prepare(sql);
	stmt.run(id);
}
export function updateStatusToMyTeam(id: number) {
	const sql = `UPDATE all_players SET status = 'myteam' WHERE id = ?`;
	const stmt = db.prepare(sql);
	stmt.run(id);
}
export function updateStatusToWifeTeam(id: number) {
	const sql = `UPDATE all_players SET status = 'wifeteam' WHERE id = ?`;
	const stmt = db.prepare(sql);
	stmt.run(id);
}
export function updateStatusToAvailable(id: number) {
	const sql = `UPDATE all_players SET status = 'available' WHERE id = ?`;
	const stmt = db.prepare(sql);
	stmt.run(id);
}
// start new app stuff
export function getAllPlayers(): player[] {
	const sql = `SELECT * FROM all_players`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
export default db;

export function getCASRoster(): player[] {
	const sql = `select * from all_players
	where status = 'myteam'`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
export function getWifeRoster(): player[] {
	const sql = `select * from all_players
	where status = 'wifeteam'`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as player[];
}
