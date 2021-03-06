/**
 * @module functions__throttle
 */

modules.define('functions__throttle', function(provide) {

var global = this.global;

provide(function(fn, timeout, invokeAsap, ctx) {
    var typeofInvokeAsap = typeof invokeAsap;
    if(typeofInvokeAsap === 'undefined') {
        invokeAsap = true;
    } else if(arguments.length === 3 && typeofInvokeAsap !== 'boolean') {
        ctx = invokeAsap;
        invokeAsap = true;
    }

    var timer, args, needInvoke,
        wrapper = function() {
            if(needInvoke) {
                fn.apply(ctx, args);
                needInvoke = false;
                timer = global.setTimeout(wrapper, timeout);
            } else {
                timer = null;
            }
        };

    return function() {
        args = arguments;
        ctx || (ctx = this);
        needInvoke = true;

        if(!timer) {
            invokeAsap?
                wrapper() :
                timer = global.setTimeout(wrapper, timeout);
        }
    };
});

});