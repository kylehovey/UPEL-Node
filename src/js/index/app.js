import Example from "../components/example/example.js";

/**
 * Main application code for one view
 */
export default class App {
  /**
   * Construct the view from components
   */
  constructor() {
    /**
     * Example component
     * @type {Example}
     */
    this.example = new Example;
  }
}
