/* Makes most, but not all, elements a pale pink.
 * needs to be set in <script type="text/javascript"> tags
 */

  var cssRules =
    '#page{background-color:#fffafa}.blockstyle-02 .block{background-color:#fffafa;border-color: pink}.row-fluid{background-color:#fffafa;border-color: white}.filler{background-color:#fffafa}.label.label-info{background-color:#fbcccc}.card-title::before{color:fbcccc}#toggle-1{background-color:#fbcccc}';

  var styleElement = document.createElement('style');

  styleElement.appendChild(document.createTextNode(cssRules));

  document.getElementsByTagName('head')[0].appendChild(styleElement);
