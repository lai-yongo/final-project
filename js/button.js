$('#calculate_btn').on('click', () => {

    var rate = 0.0
    var Num = $('#inputNumber').val()
    var Spec = $('#inputSpec').val()
    var Loss = $('#inputLoss').val()
    var Result
    Result = Math.round(Spec * Num / ((100 - Loss) / 100))

    let mylist = []
    $("tr").each((index, element) => {
        let $item = $(element)
        item = $item.find('#inputPercentage').val()
        if (item !== undefined) {
            mylist.push(item)
        }

    })
    var str2 = "Total = "
    var Total = 0
    for (i = 0; i < mylist.length; i++) {
        Total += parseFloat(mylist[i])
        str2 += parseFloat(mylist[i])
        if (i != (mylist.length - 1)) {
            str2 += " + "
        }

    }

    $('#TotalPercentage').val(Total)
    rate = Math.round(Result / Total * 100) / 100

    var TotalWeight = 0
    $("tr").each((index, element) => {
        let $item = $(element)

        item = $item.find('#inputPercentage').val()
        $item2 = $item.find('#outputWeight')
        $item2.val(Math.round(item * rate))

        if ($item2.val() !== undefined) {
            TotalWeight += parseInt($item2.val())
        }

    })

    $('#TotalWeight').val(TotalWeight)

    var str1 = ""
    str1 = str1 + Spec + " &times; " + Num + " &divide; " + "(" + " 1" + " - " + Loss + " % " + ")" + " = " + Math.round(Result) + " (" + "g" + ")"
    $('#result1').text("")
    $('#result1').append(str1)

    str2 = str2 + " = " + Total
    $('#result2').text("")
    $('#result2').append(str2)

    var str3 = ""
    str3 = str3 + Result + " &divide; " + Total + " = " + rate
    $('#result3').text("")
    $('#result3').append(str3)


    var str4 = ""
    str4 += "ex : " + $($('#name')[0]).text() + " : " + $($('#inputPercentage')[0]).val() + " &times; " + rate + " = " + Math.round($($('#inputPercentage')[0]).val() * rate) + " (" + "g" + ") "
    $('#result4').text("")
    $('#result4').append(str4)

})