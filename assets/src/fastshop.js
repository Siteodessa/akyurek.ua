
jQuery(function(a) {
                return "undefined" != typeof wc_single_product_params && (a("body").on("init", ".wc-tabs-wrapper, .woocommerce-tabs", function() {
                    a(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();
                    var b = window.location.hash,
                        c = window.location.href,
                        d = a(this).find(".wc-tabs, ul.tabs").first();
                    b.toLowerCase().indexOf("comment-") >= 0 || "#reviews" === b || "#tab-reviews" === b ? d.find("li.reviews_tab a").click() : c.indexOf("comment-page-") > 0 || c.indexOf("cpage=") > 0 ? d.find("li.reviews_tab a").click() : d.find("li:first a").click()
                }).on("click", ".wc-tabs li a, ul.tabs li a", function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.closest(".wc-tabs-wrapper, .woocommerce-tabs"),
                        e = d.find(".wc-tabs, ul.tabs");
                    e.find("li").removeClass("active"), d.find(".wc-tab, .panel:not(.panel .panel)").hide(), c.closest("li").addClass("active"), d.find(c.attr("href")).show()
                }).on("click", "a.woocommerce-review-link", function() {
                    return a(".reviews_tab a").click(), !0
                }).on("init", "#rating", function() {
                    a("#rating").hide().before('<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>')
                }).on("click", "#respond p.stars a", function() {
                    var b = a(this),
                        c = a(this).closest("#respond").find("#rating"),
                        d = a(this).closest(".stars");
                    return c.val(b.text()), b.siblings("a").removeClass("active"), b.addClass("active"), d.addClass("selected"), !1
                }).on("click", "#respond #submit", function() {
                    var b = a(this).closest("#respond").find("#rating"),
                        c = b.val();
                    if (b.length > 0 && !c && "yes" === wc_single_product_params.review_rating_required) return window.alert(wc_single_product_params.i18n_required_rating_text), !1
                }), void a(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init"))
            });
            lnk = jQuery('.menu-item-3701 a:first').attr('href');
            jQuery('.menu-item-3701 a').attr('ssil', lnk).attr('inax', 'inax1');
            jQuery('.menu-item-3701 a').removeAttr('href');
            lnk = jQuery('.menu-item-3709 a').attr('href');
            jQuery('.menu-item-3709 a').attr('ssil', lnk).attr('inax', 'inax2');
            jQuery('.menu-item-3709 a').removeAttr('href');
            lnk = jQuery('.menu-item-3715 a').attr('href');
            jQuery('.menu-item-3715 a').attr('ssil', lnk).attr('inax', 'inax8');
            jQuery('.menu-item-3715 a').removeAttr('href');
            lnk = jQuery('.menu-item-3716 a').attr('href');
            jQuery('.menu-item-3716 a').attr('ssil', lnk).attr('inax', 'inax9');
            jQuery('.menu-item-3716 a').removeAttr('href');
            lnk = jQuery('.menu-item-3717 a').attr('href');
            jQuery('.menu-item-3717 a').attr('ssil', lnk).attr('inax', 'inax10');
            jQuery('.menu-item-3717 a').removeAttr('href');
            lnk = jQuery('.menu-item-3718 a').attr('href');
            jQuery('.menu-item-3718 a').attr('ssil', lnk).attr('inax', 'inax11');
            jQuery('.menu-item-3718 a').removeAttr('href');
            lnk = jQuery('.menu-item-3719 a').attr('href');
            jQuery('.menu-item-3719 a').attr('ssil', lnk).attr('inax', 'inax12');
            jQuery('.menu-item-3719 a').removeAttr('href');
            lnk = jQuery('.menu-item-3720 a').attr('href');
            jQuery('.menu-item-3720 a').attr('ssil', lnk).attr('inax', 'inax13');
            jQuery('.menu-item-3720 a').removeAttr('href');
            lnk = jQuery('.menu-item-3721 a').attr('href');
            jQuery('.menu-item-3721 a').attr('ssil', lnk).attr('inax', 'inax14');
            jQuery('.menu-item-3721 a').removeAttr('href');
            lnk = jQuery('.menu-item-3722 a').attr('href');
            jQuery('.menu-item-3722 a').attr('ssil', lnk).attr('inax', 'inax15');
            jQuery('.menu-item-3722 a').removeAttr('href');
            lnk = jQuery('.menu-item-3723 a').attr('href');
            jQuery('.menu-item-3723 a').attr('ssil', lnk).attr('inax', 'inax16');
            jQuery('.menu-item-3723 a').removeAttr('href');
            lnk = jQuery('.menu-item-3724 a').attr('href');
            jQuery('.menu-item-3724 a').attr('ssil', lnk).attr('inax', 'inax17');
            jQuery('.menu-item-3724 a').removeAttr('href');
            lnk = jQuery('.menu-item-3725 a').attr('href');
            jQuery('.menu-item-3725 a').attr('ssil', lnk).attr('inax', 'inax18');
            jQuery('.menu-item-3725 a').removeAttr('href');
            lnk = jQuery('.menu-item-3726 a').attr('href');
            jQuery('.menu-item-3726 a').attr('ssil', lnk).attr('inax', 'inax20');
            jQuery('.menu-item-3726 a').removeAttr('href');
            lnk = jQuery('.menu-item-3727 a').attr('href');
            jQuery('.menu-item-3727 a').attr('ssil', lnk).attr('inax', 'inax23');
            jQuery('.menu-item-3727 a').removeAttr('href');
            lnk = jQuery('.menu-item-3701 a').attr('href');
            jQuery('.menu-item-3701 a').attr('ssil', lnk).attr('inax', 'inax20');
            jQuery('.menu-item-3701 a').removeAttr('href');
            lnk = jQuery('.menu-item-3702 a').attr('href');
            jQuery('.menu-item-3702 a').attr('ssil', lnk).attr('inax', 'inax21');
            jQuery('.menu-item-3702 a').removeAttr('href');
            lnk = jQuery('.menu-item-3703 a').attr('href');
            jQuery('.menu-item-3703 a').attr('ssil', lnk).attr('inax', 'inax22');
            jQuery('.menu-item-3703 a').removeAttr('href');
            lnk = jQuery('.menu-item-3704 a').attr('href');
            jQuery('.menu-item-3704 a').attr('ssil', lnk).attr('inax', 'inax23');
            jQuery('.menu-item-3704 a').removeAttr('href');
            lnk = jQuery('.menu-item-3705 a').attr('href');
            jQuery('.menu-item-3705 a').attr('ssil', lnk).attr('inax', 'inax24');
            jQuery('.menu-item-3705 a').removeAttr('href');
            lnk = jQuery('.menu-item-3706 a').attr('href');
            jQuery('.menu-item-3706 a').attr('ssil', lnk).attr('inax', 'inax25');
            jQuery('.menu-item-3706 a').removeAttr('href');
            lnk = jQuery('.menu-item-3707 a').attr('href');
            jQuery('.menu-item-3707 a').attr('ssil', lnk).attr('inax', 'inax26');
            jQuery('.menu-item-3707 a').removeAttr('href');
            lnk = jQuery('.menu-item-3708 a').attr('href');
            jQuery('.menu-item-3708 a').attr('ssil', lnk).attr('inax', 'inax27');
            jQuery('.menu-item-3708 a').removeAttr('href');
            jQuery('.menu-item-3708, .menu-item-3707, .menu-item-3706, .menu-item-3705, .menu-item-3704, .menu-item-3703, .menu-item-3702, .menu-item-3701').on('click', 'a', function() {
                jQuery(this).addClass('loaddin').prepend('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
                var ajaxpos = jQuery(this).attr('inax');
                jQuery('#' + ajaxpos + '').click();
                setTimeout(function() {
                    prepareYourLinks();
                }, 2500)
            });
            function editable() {
                jQuery('p').each(function() {
                    //    jQuery(this).attr('contenteditable', 'true')
                })
            }