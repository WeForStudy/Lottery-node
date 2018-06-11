"use strict";

module.exports = class MemoryStore {
  constructor() {
    this.sessions = {};
    this.timeouts = {};
  }

  get(sid) {
    return this.sessions[sid];
  }

  set(sid, val, ttl) {
    if (sid in this.timeouts) clearTimeout(this.timeouts[sid]);

    this.sessions[sid] = val;
    this.timeouts[sid] = setTimeout(() => {
      delete this.sessions[sid];
      delete this.timeouts[sid];
    }, ttl);
  }

  destroy(sid) {
    if (sid in this.timeouts) {
      clearTimeout(this.timeouts[sid]);

      delete this.sessions[sid];
      delete this.timeouts[sid];
    }
  }
};