$(function () {

    initializePopup({id: 'history_popup', src: '.js_history_popup'});

    $('.js_open_history_popup').on('click', function (e) {
        e.preventDefault();

        const loanNum = $(this).data('loanNum');

        insertActualData(loanNum); // Может стоит вызывать через колбэк у попапа?!
        easyPopup.open('history_popup');
    });


    function insertActualData (loanNum) {
        const loan = loansHistory[loanNum];
        let loanStatus = '—',
            $popupRows = $('.js_history_row');

        $popupRows.hide();

        if (loan.approved === '-1') {
            loanStatus = 'Отклонен';
            $popupRows.filter('[data-name="adoption_date"]').show().find('.js_history_value').html(dateFormat(loan.date_create));
            $popupRows.filter('[data-name="duration"]').show().find('.js_history_value').html(pluralization(loan.duration, '', true));
        } else if (loan.approved === '1' && loan.repaid) {
            loanStatus = 'Погашен';
            $popupRows.filter('[data-name="loan_date"]').show().find('.js_history_value').html(dateFormat(loan.date_from));
            $popupRows.filter('[data-name="maturity_date"]').show().find('.js_history_value').html(dateFormat(loan.repaid));
            $popupRows.filter('[data-name="return_sum"]').show().find('.js_history_value').html(formatPrice(loan.full_return_sum, 's', true));
        }

        $popupRows.filter('[data-name="status"]').show().find('.js_history_value').html(loanStatus);

        $('.js_history_loan_sum').html(formatPrice(loan.amount, 's', true));
        $('.js_history_return_date').html(dateFormat(loan.date_to, 1));
    }

});