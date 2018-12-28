var aCTimeOut = "";
var aCDelay   = 400;
var aCCount   = 10;
var aCResults = new Array();

$(document).click(function () {
    if (aCResults && aCResults[0]) {
        $('#num_0').click();
    }
    $('#suggests').remove();
});

function autoComplete(elem, event) {
    if (elem.val().length >= 2) {
        var id      = elem.attr('id');
        var keys    = [8, 9, 13, 38, 40, 219, 221, 186, 222, 188, 190];
        var funcKey = event.altKey || event.ctrlKey || event.shiftKey;

        if (event.keyCode == 0 || !funcKey || jQuery.inArray(event.keyCode, keys) != -1 || (event.ctrlKey && event.keyCode == 86)) {
            if (event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 9 && event.keyCode != 13) {
                if (aCTimeOut) {
                    clearTimeout(aCTimeOut);
                }
                aCTimeOut = setTimeout('aCSearch("' + id + '")', aCDelay);
                // global = event.keyCode;
            } else if ($('#suggests').is(':visible')) {
                if (event.keyCode === 38) {
                    // Если не первый прыгаем вверх
                    if (!$('.sld-preferred').is(':first-child')) {
                        $('.sld-preferred').removeClass('sld-preferred')
                                           .prev()
                                           .addClass('sld-preferred');

                    }
                } else if (event.keyCode === 40) {
                    // Если не выбран не один
                    if ( $('#suggest .sld-preferred') ){
                        $('#suggest ul li:first-child').addClass('sld-preferred');
                    }
                    // Если не последний прыгаем вниз
                    if (!$('.sld-preferred').is(':last-child')) {
                        $('.sld-preferred').removeClass('sld-preferred')
                                           .next()
                                           .addClass('sld-preferred');

                    }
                }
            }
        }
    }
}

function aCSearch(id) {
    // Заблокировать элемент, добавить ему прелоадер
    $('[id="'+id+'"]').attr('readonly', true).closest('.controls').removeClass('success error').addClass('loaded');

    var deferred = $.ajax({
        type: 'POST',
        url:'/index.php?c=member&m=searchcity',
        dataType:'json',
        data: {
            search: $('#' + id).val().trim(),
            count: aCCount
        }
    });
    deferred.done(function (data) {
        $('[id="' + id + '"]').attr('readonly', false).closest('.controls').removeClass('loaded');

        if (data.result == "OK" && data.data.length) {
            aCResults    = data.data;
            var inputVal = $('#' + id).val().toLowerCase().trim();

            var city = (aCResults[0]['city'] ? aCResults[0]['city'] : (aCResults[0]['area'] ? aCResults[0]['area'] : aCResults[0]['region']));
            if (city.toLowerCase() == inputVal && data.data.length == 1) {
                cSApplyResult(0, id);
            } else {
                aCShowResults(id);
            }
        }
        //TODO: обработать событие отсутсвия городов
    });
    deferred.fail(function (data) {
        //TODO: Обрабоать ошибку при отправке данных
        alert('error');
        $('[id="'+id+'"').attr('readonly', false).closest('.controls').removeClass('loaded');

    });
}

function aCShowResults(id) {
    $('#suggests').remove();
    var ul = $("<ul>").addClass("ui-autocomplete").attr("id", "suggests");
    if (aCResults.length > 1) {
        for (var i in aCResults) {
            var value = "";
            var label = '';
            if (aCResults[i]['city']) {
                label = aCResults[i]['city'] + ' • ' + aCResults[i]['area'] + ' • ' + aCResults[i]['region'];
                value = '<div title="' + label + '"><b>' + aCResults[i]['city'] + ' • ' + aCResults[i]['area'] + '</b><span> • ' + aCResults[i]['region'] + '</span></div>';
            } else if (aCResults[i]['area']) {
                label = aCResults[i]['area'] + ' • ' + aCResults[i]['region'];
                value = '<div title="' + label + '"><b>' + aCResults[i]['area'] + '</b><span> • ' + aCResults[i]['region'] + '</span></div>';
            } else {
                label = aCResults[i]['region'];
                value = '<div title="' + label + '"><b>' + aCResults[i]['region'] + '</b></div>';
            }

            var li = $('<li>').append(value).attr("id", "num_" + i).attr("number", i).click(function (e) {
                e.stopPropagation();
                cSApplyResult($(this).attr('number'), id);
            }).mouseenter(function () {
                $('#suggests li').removeClass('sld-preferred');
                $(this).addClass('sld-preferred');
            });

            if (i == 0) {
                li.addClass('sld-preferred');
            }
            ul.append(li);
        }
        $('#' + id).parent().append(ul);
        $('#suggests').show();
    } else {
        cSApplyResult(0, id);
    }
}

function cSApplyResult(i, id) {
    var label = '';
    if (aCResults[i]['city']) {
        label = aCResults[i]['city'] + ' • ' + aCResults[i]['area'] + ' • ' + aCResults[i]['region'];
    } else if (aCResults[i]['area']) {
        label = aCResults[i]['area'] + ' • ' + aCResults[i]['region'];
    } else {
        label = aCResults[i]['region'];
    }
    var address_id = aCResults[i]['region_id'] + (aCResults[i]['area_id'] ? "_" + aCResults[i]['area_id'] + (aCResults[i]['city_id'] ? "_" + aCResults[i]['city_id'] : "") : "");
    $("#" + id + "_hidden").val(address_id);
    $("#" + id).val(label.trim()).change().blur();
    // addFieldMemberInfo(id, address_id);
    var add_data = {};
    add_data[id] = address_id;
    if ($("#act_same").is(":checked") && /reg_/.test(id)) {
        add_data[id.replace("reg_", "act_")] = address_id;
    }
    addFieldMemberInfo(add_data);

    $('#suggests').remove();
}

function highlight(value, term) {
    return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
}
