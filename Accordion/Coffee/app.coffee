###!
 *    Accordions Tabs in Jade/Sass/CoffeeScript
 *    Simple Accordion Tabs without any Framework. Inspired to DevMarketer Accordion Tabs. Original here: https://github.com/DevMarketer/NoFrameworks
 *    @author: Sir Xiradorn - http://xiradorn.it
 *    @original_author: Jacurtis - https://github.com/jacurtis
###

accordions = document.getElementsByClassName "accordion-tab-title"

for i in accordions
    i.addEventListener "click", () ->
        this.classList.toggle "is-open"

        content = this.nextElementSibling
        if content.style.maxHeight
            content.style.maxHeight = null
            return
        else
            content.style.maxHeight = content.scrollHeight + "px"
            return
