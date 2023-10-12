onload = function () {
    var ele = document.querySelectorAll('.validanumericos')[0];
    ele.onkeypress = function (e) {
        if (isNaN(this.value + String.fromCharCode(e.charCode)))
            return false;
    }
    ele.onpaste = function (e) {
        e.preventDefault();
    }
}