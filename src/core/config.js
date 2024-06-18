import yaml from 'js-yaml'
import fs from 'fs'
import {StreamersConfigReadError} from './exceptions.js'

const config = () => {
    try {
        const config = yaml.load(fs.readFileSync('./core/data/streamers.yml', 'utf8'));
        return config
    } catch (e) {
        throw new StreamersConfigReadError(e);
    }
}

export default config;