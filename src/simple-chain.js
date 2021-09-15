import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.values = [...(this.values || []), value];
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.values.length
    ) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.values = this.values.filter((_, index) => index !== position - 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const chain = this.values.map((value) => `( ${value} )`).join("~~");
    this.values = [];
    return chain;
  },
};
