import { Plugin } from 'obsidian';

export default class MemexPlugin extends Plugin {
  onload() {
    console.log('Hello World');
  }

  onunload() {
    // Cleanup when plugin is disabled
  }
}
