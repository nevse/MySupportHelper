import * as clipboard from "clipboard-polyfill/build/clipboard-polyfill.promise"
(function () {
  $(".subject").each(function () {
        let subject = this;
        let $btnCopy = $("<span class='icon icon-clipboard'/>");
        $btnCopy.css({
             "display": "inline-block",
         });
        $btnCopy.click(function () {
            let subjectText = subject.innerText;
            let ticketIdText = $("#ticket-friendly-id").get(0).innerText;
            let selectedText = ticketIdText + " " + subjectText;
            clipboard.writeText(selectedText);
        });
        var $parentDiv = $(this).parent().get(0);
        $($parentDiv).append($btnCopy);
    });
})()