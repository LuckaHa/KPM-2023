// Get the modal

var modalparent = document.getElementsByClassName("modal-seminar");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("btn-seminar");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close");

// Get arrows in order to hide them, when the modal is opened
var arrow = document.getElementsByClassName("fp-arrow");

function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++) {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}

for (i = 0; i < modal_btn_multi.length; i++) {
    // When the user clicks the button, open the modal and hide arrows
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
        for (j = 0; j < arrow.length; j++) {
            arrow[j].style.display = "none";
        }
    };

    // When the user clicks on <span> (x), close the modal and show arrows
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
        for (j = 0; j < arrow.length; j++) {
            arrow[j].style.display = "block";
        }
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    // When the user clicks outside the modal, close the modal and show arrows
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
        for (j = 0; j < arrow.length; j++) {
            arrow[j].style.display = "block";
        }
    }
};