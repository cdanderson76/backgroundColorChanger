var index = 0;

function changeColors() {
    
    var colors = [
        'red',
        'orange',
        'blue',
        'green',
        'yellow',
        'purple',
        'brown',
        'gold',
    ];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
}