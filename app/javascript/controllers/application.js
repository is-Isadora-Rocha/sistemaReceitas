import { Application } from "@hotwired/stimulus"
import "@hotwired/stimulus";
import "/.controllers"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
