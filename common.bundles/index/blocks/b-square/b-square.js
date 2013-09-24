/**
 * The block's BEM declaration can state which block (a block with a modifier or a block
 * with a specific modifier value)
 * a given JavaScript component refers to.
 *
 * You can find various declarations on the i-bem block's wiki page, blocks/i-bem/i-bem.wiki
 */
modules.define('i-bem__dom', ['BEMHTML', 'BEMI18N'], function(provide, BEMHTML, BEMI18N, DOM) {

DOM.decl('b-square', {
    _onSquareClick : function() {
        this.toggleMod('color', '', 'green');
        DOM.update(this.domElem, BEMHTML.apply({ block: 'test', content: BEMI18N('b-square', 'text') }));
    }
}, {
    live : function() {
        this.liveBindTo('click', function() {
            this._onSquareClick();
        });
    }
});

provide(DOM);

});
