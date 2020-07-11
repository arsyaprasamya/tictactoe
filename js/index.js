// JavaScript Document
$(document).ready(function () {
	var x = 'x';
	var o = 'o';
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	var board = 3;
	var square = board * board;

	for (var i = 1; i <= square; i++) {
		board.innerHTML += '<li id=' + i + ' class="btn span1">+</li>';
	}

	function clear() {
		$('#game li').text('+');
		$('#game li').removeClass('disable');
		$('#game li').removeClass('o');
		$('#game li').removeClass('x');
		$('#game li').removeClass('btn-primary');
		$('#game li').removeClass('btn-info');
	}

	function rowCheck(type) {
		if (
			($('#1').hasClass(type) &&
				$('#2').hasClass(type) &&
				$('#3').hasClass(type)) ||
			($('#4').hasClass(type) &&
				$('#5').hasClass(type) &&
				$('#6').hasClass(type)) ||
			($('#7').hasClass(type) &&
				$('#8').hasClass(type) &&
				$('#9').hasClass(type))
		) {
			return true;
		}
		return false;
	}

	function columnCheck(type) {
		if (
			($('#1').hasClass(type) &&
				$('#4').hasClass(type) &&
				$('#7').hasClass(type)) ||
			($('#2').hasClass(type) &&
				$('#5').hasClass(type) &&
				$('#8').hasClass(type)) ||
			($('#3').hasClass(type) &&
				$('#6').hasClass(type) &&
				$('#9').hasClass(type))
		) {
			return true;
		}
		return false;
	}

	function diagonalCheck(type) {
		if (
			($('#1').hasClass(type) &&
				$('#5').hasClass(type) &&
				$('#9').hasClass(type)) ||
			($('#3').hasClass(type) &&
				$('#5').hasClass(type) &&
				$('#7').hasClass(type))
		) {
			return true;
		}
		return false;
	}

	$('#game li').click(function () {
		if (rowCheck('o') || columnCheck('o') || diagonalCheck('o')) {
			alert('O has won the game. Start a new game');
			clear();
		} else if (rowCheck('x') || columnCheck('x') || diagonalCheck('x')) {
			alert('X wins has won the game. Start a new game');
			clear();
		} else if (count === 7) {
			alert('Its a tie. It will restart.');
			clear();
			count = 0;
		} else if ($(this).hasClass('disable')) {
			alert('Already selected');
		} else if (count % 3 === 0) {
			count++;
			$(this).text(o);
			$(this).addClass('disable o btn-primary');
			if (rowCheck('o') || columnCheck('o') || diagonalCheck('o')) {
				alert('O wins');
				count = 0;
				o_win++;
				$('#o_win').text(o_win);
			}
		} else {
			count++;
			$(this).text(x);
			$(this).addClass('disable x btn-info');
			if (rowCheck('x') || columnCheck('x') || diagonalCheck('x')) {
				alert('X wins');
				count = 0;
				x_win++;
				$('#x_win').text(x_win);
			}
		}
	});
	$('#reset').click(function () {
		clear();
		count = 0;
	});
});
