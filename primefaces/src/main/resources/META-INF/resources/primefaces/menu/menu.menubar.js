/**
 * __PrimeFaces Menubar Widget__
 *
 * Menubar is a horizontal navigation component.
 *
 * @interface {PrimeFaces.widget.MenubarCfg} cfg The configuration for the {@link  Menubar| Menubar widget}.
 * You can access this configuration via {@link PrimeFaces.widget.BaseWidget.cfg|BaseWidget.cfg}. Please note that this
 * configuration is usually meant to be read-only and should not be modified.
 * @extends {PrimeFaces.widget.TieredMenuCfg} cfg
 *
 * @prop {JQuery | null} [activeitem] The currently active (highlighted) menu item.
 * @prop {number} [timeoutId] Timeout ID, used for the animation when the menu is shown.
 * 
 * @prop {number} cfg.delay Delay in milliseconds before displaying the sub menu. Default is 0 meaning immediate.
 */
PrimeFaces.widget.Menubar = PrimeFaces.widget.TieredMenu.extend({

    /**
     * @override
     * @inheritdoc
     * @param {JQuery} menuitem
     * @param {JQuery} submenu
     */
    showSubmenu: function(menuitem, submenu) {
        var pos = null;

        if(menuitem.parent().hasClass('ui-menu-child')) {
            pos = {
                my: 'left top',
                at: 'right top',
                of: menuitem,
                collision: 'flipfit'
            };
        }
        else {
            pos = {
                my: 'left top',
                at: 'left bottom',
                of: menuitem,
                collision: 'flipfit'
            };
        }

        //avoid queuing multiple runs
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = PrimeFaces.queueTask(function() {
            submenu.css('z-index', PrimeFaces.nextZindex())
                .show()
                .position(pos);
        }, this.cfg.showDelay);
    },

    /**
     * @override
     * @protected
     * @inheritdoc
     */
    bindKeyEvents: function() {
        var $this = this;

        this.keyboardTarget.on('focus.menubar', function(e) {
            $this.highlight($this.links.eq(0).parent());
        })
        .on('blur.menubar', function() {
            $this.reset();
        })
        .on('keydown.menu', function(e) {
            var currentitem = $this.activeitem;
            if(!currentitem) {
                return;
            }

            var isRootLink = !currentitem.closest('ul').hasClass('ui-menu-child');

            switch(e.key) {
                    case 'ArrowLeft':
                        if(isRootLink) {
                            var prevItem = currentitem.prevAll('.ui-menuitem:not(.ui-menubar-options):first');
                            if(prevItem.length) {
                                $this.deactivate(currentitem);
                                $this.highlight(prevItem);
                            }

                            e.preventDefault();
                        }
                        else {
                            if(currentitem.hasClass('ui-menu-parent') && currentitem.children('.ui-menu-child').is(':visible')) {
                                $this.deactivate(currentitem);
                                $this.highlight(currentitem);
                            }
                            else {
                                var parentItem = currentitem.parent().parent();
                                $this.deactivate(currentitem);
                                $this.deactivate(parentItem);
                                $this.highlight(parentItem);
                            }
                        }
                    break;

                    case 'ArrowRight':
                        if(isRootLink) {
                            var nextItem = currentitem.nextAll('.ui-menuitem:not(.ui-menubar-options):first');
                            if(nextItem.length) {
                                $this.deactivate(currentitem);
                                $this.highlight(nextItem);
                            }

                            e.preventDefault();
                        }
                        else {
                            if(currentitem.hasClass('ui-menu-parent')) {
                                var submenu = currentitem.children('.ui-menu-child');

                                if(submenu.is(':visible'))
                                    $this.highlight(submenu.children('.ui-menuitem:first'));
                                else
                                    $this.activate(currentitem);
                            }
                        }
                    break;

                    case 'ArrowUp':
                        if(!isRootLink) {
                            var prevItem = currentitem.prev('.ui-menuitem');
                            if(prevItem.length) {
                                $this.deactivate(currentitem);
                                $this.highlight(prevItem);
                            }
                        }

                        e.preventDefault();
                    break;

                    case 'ArrowDown':
                        if(isRootLink) {
                            var submenu = currentitem.children('ul.ui-menu-child');
                            if(submenu.is(':visible'))
                                $this.highlight(submenu.children('.ui-menuitem:first'));
                            else
                                $this.activate(currentitem);
                        }
                        else {
                            var nextItem = currentitem.next('.ui-menuitem');
                            if(nextItem.length) {
                                $this.deactivate(currentitem);
                                $this.highlight(nextItem);
                            }
                        }

                        e.preventDefault();
                    break;

                    case 'Enter':
                        var currentLink = currentitem.children('.ui-menuitem-link');
                        currentLink.trigger('click');
                        $this.jq.trigger("blur");
                        PrimeFaces.utils.openLink(e, currentLink);
                    break;

            }
        });
    }

});
