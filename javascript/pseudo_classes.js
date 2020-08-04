//<p class="bigbluetext">Hover CSS</p>

//<script type="text/javascript">
  var cssRules =
    '.course-content ul.ctopics li.section .content div.toggle {background-color:#fbf0f0 !important;}.course-content ul.ctopics li.section .content div.toggle:hover{background-color:#fdcccc !important;}.bigbluetext{font-size:x-large;color:darkblue;}';

  var styleElement = document.createElement('style');

  styleElement.appendChild(document.createTextNode(cssRules));

  document.getElementsByTagName('head')[0].appendChild(styleElement);
//</script>
