// Nedislav G. Kamburov
// https://nedkamburov.com
// November, 2020
// Nifty script for Photoshop allowing the user to offset every character of a word to a new line
//
// Different ways to run Photoshop scripts
// https://medium.com/photoshop-tips/how-to-run-script-465d45031de6

var layer = app.activeDocument.activeLayer;
(function main() {
    if (layer && layer.kind == 'LayerKind.TEXT') {
        var text = layer.textItem.contents;
        text = text.replace(/\s/g, '');
        if (text.length >= 1) {
            executeOffset(layer.textItem);
            layer.name = text;
        }
        else {
            alert('The text layer is empty. Nothing to offset...')
        }

    } else {
        alert('You haven\'t selected a Text layer.\nPlease, make a new layer and perform the action again.')
    }

})();

function executeOffset(layer) {
    var text = layer.contents;
    var newText = '';
    var offset = '';

    for (var i = 0; i < text.length; i++) {
        newText += offset + text[i] + '\r'
        offset += ' ';
    }
    layer.contents = newText;
    return layer;
}