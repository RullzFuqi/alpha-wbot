import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'database.json');
const TMP_FILE = path.join(__dirname, 'database.tmp.json');

const DEFAULT_USER = {
  id: '',
  name: '',
  premium: false,
  owner: false,
  banned: false,
  limit: 20,
  exp: 0,
  level: 1,
  lastClaim: null,
  rpg: { health: 100, money: 0, inventory: [] },
  createdAt: null,
  updatedAt: null
};

const DEFAULT_GROUP = {
  id: '',
  name: '',
  welcome: false,
  welcomeText: '',
  antilink: false,
  nsfw: false,
  admins: [],
  premiumOnly: false,
  createdAt: null,
  updatedAt: null
};

const DEFAULT_DB = {
  users: {},
  groups: {},
  owners: [],
  banned: [],
  settings: {
    prefix: '.',
    botName: 'Bot',
    locale: 'id'
  },
  stats: {
    messages: {},
    commands: {}
  },
  meta: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
};

let db = {};

function fileExists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

function atomicWrite(file, tmp, data) {
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, file);
}

function load() {
  if (!fileExists(DB_FILE)) {
    db = DEFAULT_DB;
    atomicWrite(DB_FILE, TMP_FILE, JSON.stringify(db, null, 2));
    return db;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    db = JSON.parse(raw);
    if (!db.meta) db.meta = DEFAULT_DB.meta;
    return db;
  } catch {
    db = DEFAULT_DB;
    atomicWrite(DB_FILE, TMP_FILE, JSON.stringify(db, null, 2));
    return db;
  }
}

function save() {
  db.meta.updatedAt = new Date().toISOString();
  atomicWrite(DB_FILE, TMP_FILE, JSON.stringify(db, null, 2));
}

load();

export function getAllUsers() { return Object.values(db.users); }
export function getAllGroups() { return Object.values(db.groups); }

export function getUser(id) {
  if (!db.users[id]) {
    const now = new Date().toISOString();
    db.users[id] = { ...DEFAULT_USER, id, createdAt: now, updatedAt: now };
    save();
  }
  return db.users[id];
}

export function createUser(payload) {
  const id = payload.id || payload.jid || payload.phone;
  if (!id) throw new Error('missing id');
  const now = new Date().toISOString();
  db.users[id] = { ...DEFAULT_USER, ...payload, id, createdAt: now, updatedAt: now };
  save();
  return db.users[id];
}

export function setUser(id, patch) {
  if (!db.users[id]) getUser(id);
  db.users[id] = { ...db.users[id], ...patch, id, updatedAt: new Date().toISOString() };
  save();
  return db.users[id];
}

export function deleteUser(id) {
  if (db.users[id]) {
    delete db.users[id];
    save();
    return true;
  }
  return false;
}

export function isOwner(id) {
  return db.owners.includes(id) || (db.users[id] && db.users[id].owner === true);
}

export function addOwner(id) {
  if (!db.owners.includes(id)) {
    db.owners.push(id);
    if (db.users[id]) db.users[id].owner = true;
    save();
  }
}

export function removeOwner(id) {
  db.owners = db.owners.filter(x => x !== id);
  if (db.users[id]) db.users[id].owner = false;
  save();
}

export function banUser(id) {
  if (!db.banned.includes(id)) db.banned.push(id);
  if (db.users[id]) db.users[id].banned = true;
  save();
}

export function unbanUser(id) {
  db.banned = db.banned.filter(x => x !== id);
  if (db.users[id]) db.users[id].banned = false;
  save();
}

export function isBanned(id) {
  return db.banned.includes(id) || (db.users[id] && db.users[id].banned === true);
}

export function incLimit(id, n = 1) {
  const u = getUser(id);
  u.limit += n;
  u.updatedAt = new Date().toISOString();
  save();
  return u.limit;
}

export function decLimit(id, n = 1) {
  const u = getUser(id);
  u.limit = Math.max(0, u.limit - n);
  u.updatedAt = new Date().toISOString();
  save();
  return u.limit;
}

export function addExp(id, n = 1) {
  const u = getUser(id);
  u.exp += n;
  while (u.exp >= expToLevel(u.level + 1)) u.level += 1;
  u.updatedAt = new Date().toISOString();
  save();
  return { exp: u.exp, level: u.level };
}

function expToLevel(l) { return Math.floor(50 * Math.pow(1.2, l - 1)); }

export function getGroup(id) {
  if (!db.groups[id]) {
    const now = new Date().toISOString();
    db.groups[id] = { ...DEFAULT_GROUP, id, createdAt: now, updatedAt: now };
    save();
  }
  return db.groups[id];
}

export function createGroup(payload) {
  const id = payload.id || payload.jid;
  if (!id) throw new Error('missing id');
  const now = new Date().toISOString();
  db.groups[id] = { ...DEFAULT_GROUP, ...payload, id, createdAt: now, updatedAt: now };
  save();
  return db.groups[id];
}

export function setGroup(id, patch) {
  if (!db.groups[id]) getGroup(id);
  db.groups[id] = { ...db.groups[id], ...patch, id, updatedAt: new Date().toISOString() };
  save();
  return db.groups[id];
}

export function deleteGroup(id) {
  if (db.groups[id]) {
    delete db.groups[id];
    save();
    return true;
  }
  return false;
}

export function groupAddAdmin(groupId, jid) {
  const g = getGroup(groupId);
  if (!g.admins.includes(jid)) g.admins.push(jid);
  g.updatedAt = new Date().toISOString();
  save();
}

export function groupRemoveAdmin(groupId, jid) {
  const g = getGroup(groupId);
  g.admins = g.admins.filter(x => x !== jid);
  g.updatedAt = new Date().toISOString();
  save();
}

export function pushMessageStat(userId, key = 'total') {
  db.stats.messages[userId] = (db.stats.messages[userId] || 0) + 1;
  db.stats.commands[key] = (db.stats.commands[key] || 0) + 1;
  save();
}

export function setSetting(key, value) {
  db.settings[key] = value;
  save();
}

export function getSetting(key) { return db.settings[key]; }

export function backup(filePath) {
  const dest = filePath || path.join(__dirname, `backup-${Date.now()}.json`);
  fs.writeFileSync(dest, JSON.stringify(db, null, 2));
  return dest;
}

export function restore(filePath) {
  if (!fileExists(filePath)) throw new Error('backup not found');
  const raw = fs.readFileSync(filePath, 'utf8');
  db = JSON.parse(raw);
  save();
  return db;
}

export function exportDB() { return JSON.parse(JSON.stringify(db)); }
export function flushToDisk() { save(); }

export function stopAutosave() {
  if (autosaveTimer) clearInterval(autosaveTimer);
}

export function updateUser(id, updater) {
  if (!db.users[id]) getUser(id);
  const updated = updater(db.users[id]);
  db.users[id] = { ...updated, updatedAt: new Date().toISOString() };
  save();
  return db.users[id];
}

export function updateGroup(id, updater) {
  if (!db.groups[id]) getGroup(id);
  const updated = updater(db.groups[id]);
  db.groups[id] = { ...updated, updatedAt: new Date().toISOString() };
  save();
  return db.groups[id];
}

export function getTotalUsers() { return Object.keys(db.users).length; }
export function getTotalGroups() { return Object.keys(db.groups).length; }
export function getBanned() { return [...db.banned]; }
export function getOwners() { return [...db.owners]; }
export function getStats() { return db.stats; }
export function getMessageCount(userId) { return db.stats.messages[userId] || 0; }
export function getCommandCount(command) { return db.stats.commands[command] || 0; }
export function resetStats() { 
  db.stats = { messages: {}, commands: {} };
  save();
}

export function addItem(userId, item) {
  updateUser(userId, user => {
    if (!user.rpg) user.rpg = DEFAULT_USER.rpg;
    user.rpg.inventory.push(item);
    return user;
  });
}

export function removeItem(userId, itemIndex) {
  updateUser(userId, user => {
    if (user.rpg?.inventory && user.rpg.inventory.length > itemIndex) {
      user.rpg.inventory.splice(itemIndex, 1);
    }
    return user;
  });
}

export function setMoney(userId, amount) {
  updateUser(userId, user => {
    if (!user.rpg) user.rpg = DEFAULT_USER.rpg;
    user.rpg.money = amount;
    return user;
  });
}

export function setHealth(userId, health) {
  updateUser(userId, user => {
    if (!user.rpg) user.rpg = DEFAULT_USER.rpg;
    user.rpg.health = health;
    return user;
  });
}

export function getInventory(userId) {
  return getUser(userId).rpg?.inventory || [];
}

export function getRPGData(userId) {
  const user = getUser(userId);
  return user.rpg || DEFAULT_USER.rpg;
}

let autosaveTimer = setInterval(() => save(), 15_000);

export default db;