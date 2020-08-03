/* Turns all elements in the moodle page black, grey and green
 * and adds a glowing green style to the 'Light theme' button.
 *
 * A snippet of html is needed to make the 2 buttons:
 *
 *    <div id="button-box" style="padding: 30px">
 *      <button class="" id="lightButton" onclick="goLight();">Light theme</button>
 *      <button class="" id="darkButton" onclick="goDark();">Dark theme</button>
 *    </div>
*/

<script type="text/javascript">
  function goDark() {
    // Add .glowButton class to the 'Light theme' button
    var lightButton = document.getElementById('lightButton');
    lightButton.classList.add('glowButton');
    // Add .hidden class to the 'Dark theme' button
    var darkButton = document.getElementById('darkButton');
    darkButton.classList.add('hidden');
    // Create  element
    var darkElementCss = document.createElement('style');
    // Give the id: 
    darkElementCss.setAttribute('id', 'darkTheme');
    //Set the CSS as a single, unbroken string
    darkElementCss.innerHTML = "*{background-color:black !important; color:#808084 !important;border-color:green !important;}.glowButton{color: black !important; background-color: green !important;border: none; !important;box-shadow: 0px 0px 50px #40ff00 !important;}.hidden{display:none;}";
    // Add element to the document
    document.body.appendChild(darkElementCss);
  }

  function goLight() {
    // Remove Dark theme by stripping the  element from DOM
    var darkTheme = document.getElementById('darkTheme');
    darkTheme.remove();
    // Remove classes from buttons
    // Remove .glowButton class to the 'Light theme' button
    var lightButton = document.getElementById('lightButton');
    lightButton.classList.remove('glowButton');
    // Remove .hidden class to the 'Dark theme' button
    var darkButton = document.getElementById('darkButton');
    darkButton.classList.remove('hidden');
  }
</script>
