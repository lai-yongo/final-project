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
    var str2 = "麵團 Total = "
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



    var rate2 = 0.0
    var Num = $('#inputNumber').val()
    var Spec2 = $('#inputSpec2').val()
    var Loss2 = $('#inputLoss2').val()
    var Result2
    Result2 = Math.round(Spec2 * Num / ((100 - Loss2) / 100))

    let mylist2 = []
    $("tr").each((index, element) => {
        let $item = $(element)
        item = $item.find('#inputPercentage2').val()
        if (item !== undefined) {
            mylist2.push(item)
        }

    })
    var str2_2 = "餡料 Total = "
    var Total2 = 0
    for (i = 0; i < mylist2.length; i++) {
        Total2 += parseFloat(mylist2[i])
        str2_2 += parseFloat(mylist2[i])
        if (i != (mylist2.length - 1)) {
            str2_2 += " + "
        }

    }

    $('#TotalPercentage2').val(Total2)
    rate2 = Math.round(Result2 / Total2 * 100) / 100

    var TotalWeight2 = 0
    $("tr").each((index, element) => {
        let $item = $(element)

        item = $item.find('#inputPercentage2').val()
        $item2 = $item.find('#outputWeight2')
        $item2.val(Math.round(item * rate2))

        if ($item2.val() !== undefined) {
            TotalWeight2 += parseInt($item2.val())
        }

    })

    $('#TotalWeight2').val(TotalWeight2)

    var str1 = "麵包 ："
    str1 = str1 + Spec + " &times; " + Num + " &divide; " + "(" + " 1" + " - " + Loss + " % " + ")" + " = " + Math.round(Result) + " (" + "g" + ")"
    $('#result1').text("")
    $('#result1').append(str1)
    var str1_2 = "餡料 ："
    str1_2 = str1_2 + Spec2 + " &times; " + Num + " &divide; " + "(" + " 1" + " - " + Loss2 + " % " + ")" + " = " + Math.round(Result2) + " (" + "g" + ")"
    $('#result1_2').text("")
    $('#result1_2').append(str1_2)

    str2 = str2 + " = " + Total
    $('#result2').text("")
    $('#result2').append(str2)

    str2_2 = str2_2 + " = " + Total2
    $('#result2_2').text("")
    $('#result2_2').append(str2_2)

    var str3 = ""
    str3 = str3 + Result + " &divide; " + Total + " = " + rate
    $('#result3').text("")
    $('#result3').append(str3)

    var str3_2 = ""
    str3_2 = str3_2 + Result + " &divide; " + Total2 + " = " + rate2
    $('#result3_2').text("")
    $('#result3_2').append(str3_2)


    var str4 = ""
    str4 += "麵團 ex : " + $($('#name')[0]).text() + " : " + $($('#inputPercentage')[0]).val() + " &times; " + rate + " = " + Math.round($($('#inputPercentage')[0]).val() * rate) + " (" + "g" + ") "
    $('#result4').text("")
    $('#result4').append(str4)

    var str4_2 = ""
    str4_2 += "餡料 ex : " + $($('#name2')[0]).text() + " : " + $($('#inputPercentage2')[0]).val() + " &times; " + rate2 + " = " + Math.round($($('#inputPercentage2')[0]).val() * rate2) + " (" + "g" + ") "
    $('#result4_2').text("")
    $('#result4_2').append(str4_2)

})