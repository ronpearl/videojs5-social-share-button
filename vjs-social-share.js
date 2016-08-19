/**
 * addShareButton()
 *
 * Creates share button/icons for the video.js player
 *
 * REFERENCE: https://simplesharebuttons.com/html-share-buttons/
 *
 * @param player
 * @param link
 * @param title
 * @param image
 */
function addShareButton(player, link, title) {
    var Button = videojs.getComponent('Button');
    var MyButton = videojs.extend(Button, {
        constructor: function() {
            Button.apply(this, arguments);
            /* initialize your button */
        },
        handleClick: function() {
            $('.vjs-share-button #video-share-icons').slideToggle("slow");
            // alert("Coming Soon!");
        }
    });

    videojs.registerComponent('MyButton', MyButton);
    var newButton = player.getChild('controlBar').addChild('myButton', {});

    newButton.addClass('vjs-share-button');
    newButton.el().innerHTML = '<span class="vjs-control-text">Share</span>' +
        '<div id="video-share-icons">' +
        '<a href="mailto:?Subject=Check Out This Video!&amp;Body=I%20thought%20you%20might%20like%20to%20see%20this!%20 %0D%0A  %0D%0A' + title + '%0D%0A' +link+'">' +
        '<span class="fa fa-2x fa-envelope"></span>' +
        '</a>' +
        '<a href="http://www.facebook.com/sharer.php?u=' + link + '" target="_blank">' +
        '<span class="fa fa-2x fa-facebook"></span>' +
        '</a>' +
        '<a href="https://twitter.com/share?url=' + link + '&amp;text=' + title + '&amp;hashtags=SomeTag" target="_blank">' +
        '<span class="fa fa-2x fa-twitter"></span>' +
        '</a>' +
        '<a href="https://plus.google.com/share?url=' + link + '" target="_blank">' +
        '<span class="fa fa-2x fa-google-plus"></span>' +
        '</a>' +
        '<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + link + '" target="_blank">' +
        '<span class="fa fa-2x fa-linkedin"></span>' +
        '</a>' +
        '</div>';
}