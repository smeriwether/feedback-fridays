import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { index: Number }

  add(e){
    this.indexValue++

    e.preventDefault()
    e.target.insertAdjacentHTML(
      'beforebegin', e.target.dataset.fields.replace(/new_field/g, this.indexValue)
    )
  }
}
