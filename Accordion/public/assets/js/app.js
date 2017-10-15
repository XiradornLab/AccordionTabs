
/*!
 *    Accordions Tabs in Jade/Sass/CoffeeScript
 *    Simple Accordion Tabs without any Framework. Inspired to DevMarketer Accordion Tabs. Original here: https://github.com/DevMarketer/NoFrameworks
 *    @author: Sir Xiradorn - http://xiradorn.it
 *    @original_author: Jacurtis - https://github.com/jacurtis
 */
var accordions, i, j, len;

accordions = document.getElementsByClassName("accordion-tab-title");

for (j = 0, len = accordions.length; j < len; j++) {
  i = accordions[j];
  i.addEventListener("click", function() {
    var content;
    this.classList.toggle("is-open");
    content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
