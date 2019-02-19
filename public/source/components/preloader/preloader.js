let preloader = function () {

    this.show = ($parent, classes) => {
        classes = classes || '';

        let $preloader;

        if ($parent) {
            $preloader = $parent.find('.preloader');
        } else {
            $preloader = $('body > .preloader');
            $parent = $('body');
        }

        if ($preloader.length) {
            return;
        }

        $preloader = $('<div class="preloader"></div>');
        $preloader.addClass(classes);

        $parent.append($preloader);
        setTimeout(function(){
            $preloader.addClass('is-show');
        }, 10);
    };


    this.hide = ($parent) => {
        let $preloader;

        if ($parent) {
            $preloader = $parent.find('.preloader');
        } else {
            $preloader = $('body > .preloader');
        }

        $preloader.removeClass('is-show');
        setTimeout(function(){
            $preloader.remove();
        }, 300);
    };


    return this;

}();