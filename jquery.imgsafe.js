        jQuery.extend({
            imgSafe: function(def_img) {
                $(document).ready(function() {
                    $("img").imgSafe({default:def_img});

                    $('body').on('DOMNodeInserted', 'img', function () {
                        console.log(img);
                        $(this).imgSafe({default:def_img});
                    });
                });
            }
        });

        $.fn.imgSafe = function(params) {
            var default_image_url = null;
            if(typeof params.default != "undefined") {
                default_image_url = params.default;
            }
            this.on("error", function() {
                if(default_image_url == null) {
                    $(this).hide();
                } else {
                    $(this).attr("src", default_image_url);
                }
            });
            return this;
        }
