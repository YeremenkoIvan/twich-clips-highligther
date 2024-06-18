class StreamersConfigReadError extends Error {
    name = this.constructor.name;
    stack = 'Failed to read streamers config file!\n' + this.stack;
}

export {StreamersConfigReadError}