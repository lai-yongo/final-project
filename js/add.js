$('#new').on('click', () => {




    new_name = $('#NewName').val()
    $name = $('<th>').attr('scope', "row").attr('id', "name").text(new_name)
    $td = $('<td>')
    new_percentage = $('#NewInputPercentage').val()
    $percentage = $('<input>').attr('type', "number").attr('id', "inputPercentage").attr('placeholder', "請輸入烘焙百分比").attr('value', new_percentage)
    $tdpercentage = $td.append($percentage)
    $output = $('<input>').attr('type', "number").attr('readonly', "true").attr('class', "form-control-plaintext").attr('id', "outputWeight")
    $td = $('<td>')
    $tdoutput = $td.append($output)
    $th = $('<th>').attr('scope', "row")
    $btn = $('<button>').attr('type', "button").attr('class', "btn btn-outline-danger").text("刪除")
    $thbtn = $th.append($btn)
    $row = $('<tr>').append($name).append($tdpercentage).append($tdoutput).append($thbtn)

    if (new_name !== "" && new_percentage !== "") {
        $('#Total').before($row)
    }

})

$('#new2').on('click', () => {




    new_name = $('#NewName2').val()
    $name = $('<th>').attr('scope', "row").attr('id', "name").text(new_name)
    $td = $('<td>')
    new_percentage = $('#NewInputPercentage2').val()
    $percentage = $('<input>').attr('type', "number").attr('id', "inputPercentage2").attr('placeholder', "請輸入烘焙百分比").attr('value', new_percentage)
    $tdpercentage = $td.append($percentage)
    $output = $('<input>').attr('type', "number").attr('readonly', "true").attr('class', "form-control-plaintext").attr('id', "outputWeight2")
    $td = $('<td>')
    $tdoutput = $td.append($output)
    $th = $('<th>').attr('scope', "row")
    $btn = $('<button>').attr('type', "button").attr('class', "btn btn-outline-danger").text("刪除")
    $thbtn = $th.append($btn)
    $row = $('<tr>').append($name).append($tdpercentage).append($tdoutput).append($thbtn)

    if (new_name !== "" && new_percentage !== "") {
        $('#Total2').before($row)
    }

})