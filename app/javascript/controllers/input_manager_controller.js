import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    this.numberOfInputs = 2;
  }

  newInput() {
    const lastInputElement = document.getElementById(`teammate_${this.numberOfInputs}`);

    this.numberOfInputs++;

    lastInputElement
      .insertAdjacentHTML(
        'afterend',
        `
          <label for="teammate_${this.numberOfInputs}">Teammate name</label>
          <input data-attr="teammate_${this.numberOfInputs}" type="text" name="teammate_${this.numberOfInputs}" id="teammate_${this.numberOfInputs}">
        `,
      );
  }
}
