/*
$(function () {

    if ($('select').length) {
        $('select').change(function () {
            $(this).parent().removeClass("error success");
            var id = $(this).attr('id');
            var selects = ["work_position", "work_employment"];

            if (selects.indexOf(id) != -1) {
                var value = $(this).val();
                if (id == "work_employment") {
                    $("#work_place, #work_phone, #work_position, #income").attr('disabled', false).parent().removeClass('disabled');
                    if (value == 17) {
                        $("#work_place, #work_phone, #work_position, #income").val('').attr('disabled', 'disabled').parent().removeClass('success error').addClass('disabled');
                        addFieldMemberInfo({"work_place": '', "work_phone": '', "work_position": '', "income": ''});
                    }
                }

                $(this).parent().find(".error-msg").remove();
                $(this).parent().addClass((value == -1 ? "error" : "success"));
            }
        });

        if (is_touch_device()) {
            $('select').parent().addClass('select-mobile');
        } else {
            $('select').selecter({mobile: true});
        }

        if ($(".modalbox").length && $(".selecter-selected").length) {
            $(".modalbox:not(.selecter-selected)").click(function () {
                $(".open .selecter-selected").click();
            });
        }
    }

});*/
