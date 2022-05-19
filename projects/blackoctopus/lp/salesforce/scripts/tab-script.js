/* Global namespace */
var FancyTabs = FancyTabs || {};

/* Set up tab accordions
   ========================================================================== */
FancyTabs.setupTabAccordions = {
    init: function() {
        var $tabPanelWrapper = jQuery("#lw-tab-panels"),
            $tabNav = jQuery("#lw-tab-nav"),
            $tabNavItems = $tabNav.find("li"),
            $tabNavLinks = $tabNav.find("a"),
            $accordionNavLinks = jQuery("[data-accordion-header]"),
            $tabPanels = jQuery("#lw-tab-panels").find("[data-tab-panel]"),
            $currentTab = jQuery("#lw-tab-1"),
            $accordionWrapper = jQuery(".lw-accordion");

        if (($tabNav.length > 0) || ($accordionWrapper.length > 0)) {

            //console.log("Initializing tab or accordion");

            // Accordion clicks
            $accordionNavLinks.on("click", function() {

                var targetTabID = "#" + jQuery(this).next().attr("id");

                // Set clicked accordion link to active
                jQuery(this).toggleClass("is-active");

                if ($tabNav.length > 0) {
                    var $targetTabNavLink = $tabNav.find("a[data-tab='" + targetTabID + "']");

                    // Set appropriate tab to active, to keep in sync
                    $tabNavItems.removeClass("is-active");
                    $targetTabNavLink.parent("li").addClass("is-active");
                    $currentTab = jQuery(targetTabID);
                }

                return false;
            });

            // Tab clicks
            $tabNavLinks.on("click", function() {
                if (!jQuery(this).parent("li").hasClass("is-active")) {

                    // Immediately remove any "text-going-out" classes in case of quick-clicking
                    jQuery("[data-tab-panel]").removeClass("text-going-out");

                    var targetTabID = jQuery(this).data("tab"),
                        $targetTab = jQuery(targetTabID);

                    // Have the current text slide out right away
                    $currentTab.addClass("text-going-out");

                    // Set appropriate tab to active
                    $tabNavItems.removeClass("is-active");
                    jQuery(this).parent("li").addClass("is-active");

                    // Set clicked accordion link to active, to keep in sync
                    $accordionNavLinks.removeClass("is-active");
                    $targetTab.prev().addClass("is-active");

                    setTimeout(function() {
                        // After the crossfade is complete, reset the tab text
                        //console.log("Removing text slide class");
                        jQuery("[data-tab-panel]").removeClass("text-going-out");
                    }, 400);

                    $currentTab = jQuery(targetTabID);
                }

                return false;
            });

            // Enquire function, to swap between multiple active and single active states
            enquire.register("screen and (min-width:56.25em)", {
                match: function() {
                    //console.log("Tabs are active");
                    $accordionNavLinks.removeClass("is-active");
                    $currentTab.prev().addClass("is-active");
                },
                unmatch: function() {
                    $tabPanels.removeClass("text-going-out");
                },
                deferSetup: true
            });
        }
    }
};

jQuery(document).ready(function() {
    FancyTabs.setupTabAccordions.init();
});