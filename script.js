$(document).ready(() => {
    $('.ceil-table').on('click', function() {
        let id = $(this).attr('id');
        let split_id = parseInt(id.split('-')[2])-1;
        let value = $(`td#tb-value-${split_id}`).text();
        let left_move = $(`td#tb-value-${split_id - 1}`);
        let right_move = $(`td#tb-value-${split_id + 1}`);
        let down_move = $(`td#tb-value-${split_id + 3}`);
        let top_move = $(`td#tb-value-${split_id - 3}`);

        if (split_id <= 9 && split_id > 0) {
            console.log(split_id);
            if (right_move && right_move.text() == '' && split_id !== 3 && split_id !== 6 && split_id !== 9) {
                console.log({'right': right_move.text(), 'value' : value});
                $(`td#tb-value-${split_id - 1}`).text(value);
                $(`td#tb-value-${split_id}`).text('');
            }
            else if (left_move && left_move.text() == '' && split_id !== 1 && split_id !== 4 && split_id !== 7) {
                console.log({'left': right_move.text(), 'value' : value});
                $(`td#tb-value-${split_id + 1}`).text(value);
                $(`td#tb-value-${split_id}`).text('');
            }
            else if (top_move && top_move.text() == '' && split_id !== 1 && split_id !== 2 && split_id !== 3) {
                console.log({'top': right_move.text(), 'value' : value});
                $(`td#tb-value-${split_id + 3}`).text(value);
                $(`td#tb-value-${split_id}`).text('');
            }
            else if (down_move && down_move.text() == '' && split_id !== 7 && split_id !== 8 && split_id !== 9) {
                console.log({'down': right_move.text(), 'value' : value});
                $(`td#tb-value-${split_id - 3}`).text(value);
                $(`td#tb-value-${split_id}`).text('');
            }
        }
    });
});