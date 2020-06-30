$('#calculate_btn').on('click', () => {
    //麵糊2
    var rate2 = 0.0
    var Num = $('#inputNumber').val()
    var Spec = $('#inputSpec').val()
    var Loss = $('#inputLoss').val()
    var Result
    Result = Math.round(Spec * Num / ((100 - Loss) / 100))

    var df = $('#dFirst').val()
    

    var ds = $('#dSecond').val()
    var nf = parseInt(df) + parseInt(ds)
    var ns = parseInt(df) + parseInt(ds)

    var ResultS = Math.round(Result * ds / ns)
    var ResultF = Math.round(Result * df / nf)


    let mylist2 = []
    $("tr").each((index, element) => {
        let $item = $(element)
        item = $item.find('#inputPercentage2').val()
        if (item !== undefined) {
            mylist2.push(item)
        }

    })
    var str2_2 = $('#name_2').val() + " Total = "
    var Total2 = 0
    for (i = 0; i < mylist2.length; i++) {
        Total2 += parseFloat(mylist2[i])
        str2_2 += parseFloat(mylist2[i])
        if (i != (mylist2.length - 1)) {
            str2_2 += " + "
        }

    }

    $('#TotalPercentage2').val(Total2)
    rate2 = Math.round(ResultS / Total2 * 100) / 100

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





    var rate = 0.0


    let mylist = []
    $("tr").each((index, element) => {
        let $item = $(element)
        item = $item.find('#inputPercentage').val()
        if (item !== undefined) {
            mylist.push(item)
        }

    })
    var str2 = $('#name_1').val() + " Total = "
    var Total = 0
    for (i = 0; i < mylist.length; i++) {
        Total += parseFloat(mylist[i])
        str2 += parseFloat(mylist[i])
        if (i != (mylist.length - 1)) {
            str2 += " + "
        }

    }

    $('#TotalPercentage').val(Total)
    rate = Math.round((ResultF + rate2 * 100) / Total * 100) / 100

    var TotalWeight = 0
    $("tr").each((index, element) => {
        let $item = $(element)

        item = $item.find('#inputPercentage').val()
        $item2 = $item.find('#outputWeight')
        $item2.val(Math.round(item * rate))
        console.log(($item2.val()))

        if ($item2.val() !== undefined) {
            TotalWeight += parseInt($item2.val())
        }




    })

    $('#TotalWeight').val(TotalWeight)

    var str1 = ""
    str1 = str1 + Spec + " &times; " + Num + " &divide; " + "(" + " 1" + " - " + Loss + " % " + ")" + " = " + Math.round(Result) + " (" + "g" + ")"
    $('#result1').text("")
    $('#result1').append(str1)

    $('#resultS').text("")
    var strS = ""
    strS = $('#name_2').val() + " " + Result + " &times; " + ds + "/" + ns + " = " + ResultS + " (" + "g" + ")"
    $('#resultS').append(strS)

    $('#resultF').text("")
    var strF = ""
    strF = $('#name_1').val() + " " + Result + " &times; " + df + "/" + nf + " = " + ResultF + " ; " + ResultF + " + " + Math.round(rate2 * 100) + " = " + (ResultF + rate2 * 100) + " (" + "g" + ")"

    $('#resultF').append(strF)

    str2 = str2 + " = " + Total
    str2_2 = str2_2 + " = " + Total2

    $('#result2').text("")
    $('#result2').append(str2)
    $('#result2_2').text("")
    $('#result2_2').append(str2_2)

    var str3 = ""
    str3 = str3 + (ResultF + rate2 * 100) + " &divide; " + Total + " = " + rate
    $('#result3').text("")
    $('#result3').append(str3)
    var str3_2 = ""
    str3_2 = str3_2 + ResultS + " &divide; " + Total2 + " = " + rate2
    $('#result3_2').text("")
    $('#result3_2').append(str3_2)


    var str4 = ""
    str4 += "ex : " + $($('#name')[0]).text() + " : " + $($('#inputPercentage')[0]).val() + " &times; " + rate + " = " + Math.round($($('#inputPercentage')[0]).val() * rate) + " (" + "g" + ") "
    $('#result4').text("")
    $('#result4').append(str4)

    var str4_2 = ""
    str4_2 += "ex : " + $($('#name2')[0]).text() + " : " + $($('#inputPercentage2')[0]).val() + " &times; " + rate2 + " = " + Math.round($($('#inputPercentage2')[0]).val() * rate2) + " (" + "g" + ") "
    $('#result4_2').text("")
    $('#result4_2').append(str4_2)



})