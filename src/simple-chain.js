const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainComplete : false,
  //linksNumber : 0, 
  theChain : [], // array of links.  ~~ only add at output

  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.theChain.length;
  },
  addLink(value) {
    //if (!this.chainComplete) {
      //this.linksNumber++;
      let link = '';
      if (arguments.length == 0) {
        link = '(  )'; // empty link 
      } else {
        link = `( ${value} )`;
      } 
      this.theChain.push(link);
    //}

    return this
  },
  removeLink(position) {
    const ERROR_MSG = 'You can\'t remove incorrect link!';

    //if (!this.chainComplete) {
      if (isNaN(position) || (!Number.isInteger(position))) {
        this.theChain =[];
        throw new Error(ERROR_MSG)
      };



      if (position>0 && position <= this.getLength()) {
        this.theChain.splice(position - 1, 1);
      } else {
        this.theChain =[];
        throw new Error(ERROR_MSG);
      }

    //}

    return this
  },
  reverseChain() {
    //if (!this.chainComplete) {
      this.theChain.reverse();
    //}

    return this
  },
  finishChain() {
    //this.chainComplete = true;
    let output = this.theChain.join('~~');
    this.theChain = [];// todo check?

    return output;
  }
};




module.exports = {
  chainMaker
};
