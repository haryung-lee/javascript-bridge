const { Console } = require('@woowacourse/mission-utils');

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
};

const GAME = {
	START_MESSAGE: '다리 건너기 게임을 시작합니다.',
	END_MESSAGE: '\n최종 게임 결과',
	SUCCESS_MESSAGE: '\n게임 성공 여부: ',
	TRY_COUNT_MESSAGE: '총 시도한 횟수: ',
};

const RESULT = {
	SUCCESS: '성공',
	FAIL: '실패',
};

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
	printStart() {
		Console.print(GAME.START_MESSAGE);
	},
	/**
	 * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printMap(bridge, type, isMovable) {
		let result = '[ ';
		bridge.forEach((item, index) => {
			if (index === bridge.length - 1 && item === type)
				result += isMovable ? BRIDGE.CORRECT : BRIDGE.WRONG;
			else if (item === type) result += BRIDGE.CORRECT;
			else result += ' ';
			if (index !== bridge.length - 1) result += ' | ';
		});
		result += ' ]';
		Console.print(result);
	},

	printGameResultMessage() {
		Console.print(GAME.END_MESSAGE);
	},

	/**
	 * @param {String} userBridge 사용자가 입력한 다리
	 * @param {String} answerBridge 자동으로 생성된 다리
	 * @param {{boolean, number}} result 게임 결과
	 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printResult(result) {
		Console.print(
			`${GAME.SUCCESS_MESSAGE}${
				result.isMovable ? RESULT.SUCCESS : RESULT.FAIL
			}`,
		);
		Console.print(`${GAME.TRY_COUNT_MESSAGE}${result.tryCount}`);
	},

	printError(message) {
		Console.print(`[ERROR] ${message}`);
	},
};

module.exports = OutputView;
