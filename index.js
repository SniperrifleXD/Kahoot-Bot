var _0x7007 = ['console-title', 'catch', 'last', 'TwoFactorCorrect', 'question', '14992ZEODVM', 'open_ended', 'questionIndex', 'type', '8097FlppgS', 'Duplicate\x20name', 'POSITIVE_INFINITY', 'QuestionReady', 'botCount:\x20', 't\x20for\x20triangle,\x20d\x20for\x20diamond>\x20', 'kahoot.js-updated', 'jumble', '10dJxJzf', 'random', '81724YFKzWy', 'name', 't\x20for\x20triangle,\x20d\x20for\x20diamond,\x20c\x20for\x20circle\x20or\x20s\x20for\x20square\x20>\x20', 'replace', 'QuizEnd', 'Created\x20by\x20corruption\x20V1', 'ceil', 'clear', 'first', 'twoFactorAuth', 'join', 'oops\x20fucked\x20up', 'length', 'quizQuestionAnswers', '395816EbaWFZ', 'setMaxListeners', 'quiz', 'leave', 'answerTwoFactorAuth', 'ECHO\x20version,\x20NEW>\x20random\x20names.', '57WkTdgv', 'Joined', '9921rTpKuV', 'beepbeep', 'log', 'survey', 'answer', 'SIGINT', 'all\x20clients\x20joined', 'request', '409189EqwTql', 'random-name', 'Kahoot\x20flooder', 'https://apis.kahoot.it/namerator', '95TTXNmw', 'middle', 'Ruh Roh Raggy\x20 Fucked up', 'QuestionEnd', 'type\x20your\x20answer>\x20', 'exit', 'Flood\x20started\x20:0', 'parse', 'word_cloud', 'Echo\x20version', 'floor', '446203PZQuhU', 'isCorrect', 'Disconnect', 'running', 'Quiz\x20Locked', 't\x20for\x20triangle,\x20d\x20for\x20diamond,\x20c\x20for\x20circle>\x20'];
var _0x137e = function (_0xcca91, _0x173849) {
    _0xcca91 = _0xcca91 - 0xa3;
    var _0x700753 = _0x7007[_0xcca91];
    return _0x700753;
};
var _0x78553f = _0x137e;
(function (_0x4f3ee9, _0x2bb69c) {
    var _0x5bdae8 = _0x137e;
    while (!![]) {
        try {
            var _0x2ec26d = parseInt(_0x5bdae8(0xdf)) + -parseInt(_0x5bdae8(0xbf)) * -parseInt(_0x5bdae8(0xd7)) + -parseInt(_0x5bdae8(0xc1)) + parseInt(_0x5bdae8(0xa8)) + parseInt(_0x5bdae8(0xd5)) * parseInt(_0x5bdae8(0xb7)) + parseInt(_0x5bdae8(0xcf)) + parseInt(_0x5bdae8(0xb3)) * -parseInt(_0x5bdae8(0xe3));
            if (_0x2ec26d === _0x2bb69c) break;
            else _0x4f3ee9['push'](_0x4f3ee9['shift']());
        } catch (_0x3f8564) {
            _0x4f3ee9['push'](_0x4f3ee9['shift']());
        }
    }
}(_0x7007, 0x4ab3f), console[_0x78553f(0xd9)](_0x78553f(0xab)), console[_0x78553f(0xd9)](_0x78553f(0xa6)), readline = require('readline-sync'));
const Kahoot = require(_0x78553f(0xbd));
var words = require('an-array-of-english-words');
const request = require(_0x78553f(0xde));
var random = require(_0x78553f(0xe0)),
    setTitle = require(_0x78553f(0xae));
setTitle(_0x78553f(0xe1));
var beep = require(_0x78553f(0xd8));

function getRandomInt(_0x227c08, _0x1b4b38) {
    var _0x1a4b88 = _0x78553f;
    return _0x227c08 = Math[_0x1a4b88(0xc7)](_0x227c08), _0x1b4b38 = Math[_0x1a4b88(0xa7)](_0x1b4b38), Math[_0x1a4b88(0xa7)](Math[_0x1a4b88(0xc0)]() * (_0x1b4b38 - _0x227c08 + 0x1)) + _0x227c08;
}

function getName() {
    var _0x5014e7 = _0x78553f;
    ran = getRandomInt(0x1, 0x5);
    ran == 0x5 && request(_0x5014e7(0xe2), function (_0x5273f6, _0x20bddb, _0x527d93) {
        var _0xdecf49 = _0x5014e7;
        return _0x5273f6 && console['log'](_0x5273f6), JSON[_0xdecf49(0xa4)](_0x527d93)[_0xdecf49(0xc2)];
    });
    if (ran == 0x4) return words[getRandomInt(0x1, words[_0x5014e7(0xcd)])];
    if (ran == 0x3) return random[_0x5014e7(0xc9)]();
    if (ran == 0x2) return random[_0x5014e7(0xc9)]() + random[_0x5014e7(0xe4)]() + random[_0x5014e7(0xb0)]();
    if (ran == 0x1) return random[_0x5014e7(0xc9)]() + random[_0x5014e7(0xb0)]();
}

function shuffle(_0x49c610) {
    var _0x1dc814 = _0x78553f,
        _0x17fcbb = _0x49c610['length'],
        _0x3d207b, _0x57f6e6;
    while (0x0 !== _0x17fcbb) {
        _0x57f6e6 = Math[_0x1dc814(0xa7)](Math[_0x1dc814(0xc0)]() * _0x17fcbb), _0x17fcbb -= 0x1, _0x3d207b = _0x49c610[_0x17fcbb], _0x49c610[_0x17fcbb] = _0x49c610[_0x57f6e6], _0x49c610[_0x57f6e6] = _0x3d207b;
    }
    return _0x49c610;
}
process['setMaxListeners'](Number[_0x78553f(0xb9)]), console[_0x78553f(0xc8)](), console[_0x78553f(0xd9)](_0x78553f(0xc6)), console[_0x78553f(0xd9)](_0x78553f(0xd4)), readline[_0x78553f(0xb2)]('Press\x20enter\x20to\x20continue'), antibotmode = readline[_0x78553f(0xb2)]('random\x20Name(y/n):\x20'), pin = readline[_0x78553f(0xb2)]('Pin:\x20'), bots = readline['question'](_0x78553f(0xbb));
antibotmode == 'y' ? (ranname = !![], er = 'n') : (ranname = 'n', ranname == 'y' ? ranname = !![] : (ranname = ![], botname = readline['question']('Name:\x20'), botprefix = ''), er = 'n');
usercontrolled = 'n';
usercontrolled == 'y' ? (usercontrolled = !![], beepis = 'y') : (usercontrolled = ![], beepis = 'n');
console[_0x78553f(0xc8)](), repeattimes = 0x0;

function sendjoin(_0x5a9eb1, _0x426054) {
    ranname ? join(getName(), _0x426054) : join(_0x5a9eb1, _0x426054);
}

function spam() {
    var _0x3e0759 = _0x78553f;
    repeattimes == bots ? console[_0x3e0759(0xd9)](_0x3e0759(0xdd)) : (repeattimes++, ranname ? rt = getRandomInt(0x5a, 0xc8) : rt = 0xf, setTimeout(() => {
        spam();
    }, rt), setTimeout(() => {
        ranname ? sendjoin('This\x20will\x20become\x20a\x20random\x20name!', bots - repeattimes - 0x1) : sendjoin(botname + (bots - repeattimes - 0x1), bots - repeattimes - 0x1);
    }, rt));
}
process[_0x78553f(0xd0)](Number['POSITIVE_INFINITY']), Arandomint = 0x0, todo = ![];

function join(_0x57aba3, _0x1e9a42) {
    var _0x92146b = _0x78553f;
    while (_0x57aba3 == undefined) {
        _0x57aba3 = getName();
    }
    const _0x39e1f6 = new Kahoot();
    _0x39e1f6[_0x92146b(0xd0)](Number['POSITIVE_INFINITY']);
    er == 'y' ? _0x39e1f6[_0x92146b(0xcb)](pin, _0x57aba3['replace'](/a/g, 'ᗩ')[_0x92146b(0xc4)](/b/g, 'ᗷ')[_0x92146b(0xc4)](/c/g, 'ᑕ')[_0x92146b(0xc4)](/d/g, 'ᗪ')[_0x92146b(0xc4)](/e/g, 'E')[_0x92146b(0xc4)](/f/g, 'ᖴ')['replace'](/g/g, 'G')[_0x92146b(0xc4)](/h/g, 'ᕼ')[_0x92146b(0xc4)](/i/g, 'I')[_0x92146b(0xc4)](/j/g, 'ᒍ')['replace'](/k/g, 'K')['replace'](/l/g, 'ᒪ')['replace'](/m/g, 'ᗰ')[_0x92146b(0xc4)](/n/g, 'ᑎ')[_0x92146b(0xc4)](/o/g, 'O')[_0x92146b(0xc4)](/p/g, 'ᑭ')['replace'](/q/g, 'ᑫ')[_0x92146b(0xc4)](/r/g, 'ᖇ')[_0x92146b(0xc4)](/s/g, 'ᔕ')[_0x92146b(0xc4)](/t/g, 'T')[_0x92146b(0xc4)](/u/g, 'ᑌ')['replace'](/v/g, 'ᐯ')[_0x92146b(0xc4)](/w/g, 'ᗯ')[_0x92146b(0xc4)](/x/g, '᙭')[_0x92146b(0xc4)](/y/g, 'Y')['replace'](/z/g, 'ᘔ')['replace'](/A/g, 'ᗩ')[_0x92146b(0xc4)](/B/g, 'ᗷ')[_0x92146b(0xc4)](/C/g, 'ᑕ')[_0x92146b(0xc4)](/D/g, 'ᗪ')[_0x92146b(0xc4)](/E/g, 'E')[_0x92146b(0xc4)](/F/g, 'ᖴ')['replace'](/G/g, 'G')[_0x92146b(0xc4)](/H/g, 'ᕼ')[_0x92146b(0xc4)](/I/g, 'I')[_0x92146b(0xc4)](/J/g, 'ᒍ')[_0x92146b(0xc4)](/K/g, 'K')[_0x92146b(0xc4)](/L/g, 'ᒪ')[_0x92146b(0xc4)](/M/g, 'ᗰ')[_0x92146b(0xc4)](/N/g, 'ᑎ')[_0x92146b(0xc4)](/O/g, 'O')['replace'](/P/g, 'ᑭ')[_0x92146b(0xc4)](/Q/g, 'ᑫ')[_0x92146b(0xc4)](/R/g, 'ᖇ')[_0x92146b(0xc4)](/S/g, 'ᔕ')[_0x92146b(0xc4)](/T/g, 'T')['replace'](/U/g, 'ᑌ')[_0x92146b(0xc4)](/V/g, 'ᐯ')['replace'](/W/g, 'ᗯ')[_0x92146b(0xc4)](/X/g, '᙭')[_0x92146b(0xc4)](/Y/g, 'Y')[_0x92146b(0xc4)](/Z/g, 'ᘔ'), [random[_0x92146b(0xc9)](), random[_0x92146b(0xb0)]()])[_0x92146b(0xaf)](_0x3aee8a => {
        var _0x3c0b2a = _0x92146b;
        _0x3aee8a['description'] == _0x3c0b2a(0xb8) & ranname ? sendjoin(_0x57aba3, _0x1e9a42) : (console[_0x3c0b2a(0xd9)](_0x3c0b2a(0xcc)), _0x39e1f6[_0x3c0b2a(0xd2)]());
    }) : _0x39e1f6['join'](pin, _0x57aba3, [random[_0x92146b(0xc9)](), random[_0x92146b(0xb0)]()])[_0x92146b(0xaf)](_0xd64c85 => {
        var _0x17ac03 = _0x92146b;
        _0xd64c85['description'] == 'Duplicate\x20name' & ranname ? sendjoin(_0x57aba3, _0x1e9a42) : (console[_0x17ac03(0xd9)](_0x17ac03(0xe5)), _0x39e1f6[_0x17ac03(0xd2)]());
    });
    var _0x425dc1 = [0x0, 0x1, 0x2, 0x3];
    todo = ![], _0x39e1f6['on'](_0x92146b(0xd6), _0x3617cc => {
        var _0x4f6a81 = _0x92146b;
        _0x3617cc[_0x4f6a81(0xca)] && setInterval(() => {
            var _0xbae7a4 = _0x4f6a81;
            !todo == ![] && _0x39e1f6[_0xbae7a4(0xd3)](todo), shuffle(_0x425dc1), _0x39e1f6[_0xbae7a4(0xd3)](_0x425dc1);
        }, 0x3e8);
    }), _0x39e1f6['on'](_0x92146b(0xb1), function () {
        var _0x22828c = _0x92146b;
        console[_0x22828c(0xd9)](''), todo = _0x425dc1;
    }), _0x39e1f6['on'](_0x92146b(0xba), _0x440b91 => {
        var _0x4ab7e7 = _0x92146b;
        _0x1e9a42 == 0x1 & beepis == 'y' && beep();
        everyoneanswerthis = ![];
        if (_0x440b91[_0x4ab7e7(0xb6)] == _0x4ab7e7(0xa5)) {
            if (usercontrolled) {
                if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline[_0x4ab7e7(0xb2)]('type\x20your\x20answer>\x20'), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                    _0x39e1f6['answer'](answer - 0x1);
                }, getRandomInt(0x1, 0x4e20));
                else var _0x17dc9f = setInterval(() => {
                    (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                        var _0xce9e0c = _0x137e;
                        _0x39e1f6[_0xce9e0c(0xdb)](Arandomint);
                    }, getRandomInt(0x1, 0x4e20)));
                }, 0x64);
            } else console[_0x4ab7e7(0xd9)](''), setTimeout(() => {
                var _0xddbe0f = _0x4ab7e7;
                _0x39e1f6[_0xddbe0f(0xdb)]('f');
            }, getRandomInt(0x1, 0x4e20));
        }
        _0x440b91['type'] == _0x4ab7e7(0xbe) && (console[_0x4ab7e7(0xd9)](''), setTimeout(() => {
            var _0x4a0da3 = _0x4ab7e7;
            _0x39e1f6[_0x4a0da3(0xdb)](getRandomInt(0x0, _0x440b91[_0x4a0da3(0xce)][_0x440b91[_0x4a0da3(0xb5)]] - 0x1));
        }, getRandomInt(0x1, 0x4e20)));
        if (_0x440b91[_0x4ab7e7(0xb6)] == _0x4ab7e7(0xd1)) {
            if (usercontrolled) {
                if (_0x440b91[_0x4ab7e7(0xce)][_0x440b91[_0x4ab7e7(0xb5)]] == 0x2) {
                    if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline[_0x4ab7e7(0xb2)](_0x4ab7e7(0xbc)), answer = answer[_0x4ab7e7(0xc4)]('t', 0x1)['replace']('d', 0x2), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                        var _0x46755d = _0x4ab7e7;
                        _0x39e1f6[_0x46755d(0xdb)](answer - 0x1);
                    }, getRandomInt(0x1, 0x4e20));
                    else var _0x17dc9f = setInterval(() => {
                        (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                            _0x39e1f6['answer'](Arandomint - 0x1);
                        }, getRandomInt(0x1, 0x4e20)));
                    }, 0x64);
                }
                if (_0x440b91['quizQuestionAnswers'][_0x440b91[_0x4ab7e7(0xb5)]] == 0x3) {
                    if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline[_0x4ab7e7(0xb2)](_0x4ab7e7(0xad)), answer = answer[_0x4ab7e7(0xc4)]('t', 0x1)[_0x4ab7e7(0xc4)]('d', 0x2)[_0x4ab7e7(0xc4)]('c', 0x3), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                        _0x39e1f6['answer'](answer - 0x1);
                    }, getRandomInt(0x1, 0x4e20));
                    else var _0x17dc9f = setInterval(() => {
                        (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                            _0x39e1f6['answer'](Arandomint - 0x1);
                        }, getRandomInt(0x1, 0x4e20)));
                    }, 0x64);
                }
                if (_0x440b91[_0x4ab7e7(0xce)][_0x440b91[_0x4ab7e7(0xb5)]] == 0x4) {
                    if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline[_0x4ab7e7(0xb2)](_0x4ab7e7(0xc3)), answer = answer[_0x4ab7e7(0xc4)]('t', 0x1)[_0x4ab7e7(0xc4)]('d', 0x2)[_0x4ab7e7(0xc4)]('c', 0x3)[_0x4ab7e7(0xc4)]('s', 0x4), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                        var _0x3923e3 = _0x4ab7e7;
                        _0x39e1f6[_0x3923e3(0xdb)](answer - 0x1);
                    }, getRandomInt(0x1, 0x4e20));
                    else var _0x17dc9f = setInterval(() => {
                        (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                            _0x39e1f6['answer'](Arandomint - 0x1);
                        }, getRandomInt(0x1, 0x4e20)));
                    }, 0x64);
                }
            } else setTimeout(() => {
                var _0x4e737d = _0x4ab7e7;
                toanswer = getRandomInt(0x0, _0x440b91[_0x4e737d(0xce)][_0x440b91[_0x4e737d(0xb5)]] - 0x1), console['log'](''), _0x39e1f6[_0x4e737d(0xdb)](toanswer);
            }, getRandomInt(0x1, 0x4e20));
        }
        if (_0x440b91[_0x4ab7e7(0xb6)] == _0x4ab7e7(0xda)) {
            if (usercontrolled) {
                if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline['question']('t\x20for\x20triangle,\x20d\x20for\x20diamond,\x20c\x20for\x20circle\x20or\x20s\x20for\x20square\x20>\x20'), answer = answer[_0x4ab7e7(0xc4)]('t', 0x1)[_0x4ab7e7(0xc4)]('d', 0x2)['replace']('c', 0x3)[_0x4ab7e7(0xc4)]('s', 0x4), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                    _0x39e1f6['answer'](answer - 0x1);
                }, getRandomInt(0x1, 0x4e20));
                else var _0x17dc9f = setInterval(() => {
                    (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                        var _0x1fc75c = _0x137e;
                        _0x39e1f6[_0x1fc75c(0xdb)](Arandomint - 0x1);
                    }, getRandomInt(0x1, 0x4e20)));
                }, 0x64);
            } else setTimeout(() => {
                var _0x4f54f4 = _0x4ab7e7;
                toanswer = getRandomInt(0x0, _0x440b91[_0x4f54f4(0xce)][_0x440b91[_0x4f54f4(0xb5)]] - 0x1), console['log'](''), _0x39e1f6[_0x4f54f4(0xdb)](toanswer);
            }, getRandomInt(0x1, 0x4e20));
        }
        if (_0x440b91[_0x4ab7e7(0xb6)] == _0x4ab7e7(0xb4)) {
            if (usercontrolled) {
                if (_0x1e9a42 == 0x1) everyoneanswerthis = !![], answer = readline['question'](_0x4ab7e7(0xe7)), everyoneanswerthis = answer, Arandomint = answer, setTimeout(() => {
                    _0x39e1f6['answer'](answer - 0x1);
                }, getRandomInt(0x1, 0x4e20));
                else var _0x17dc9f = setInterval(() => {
                    (!everyoneanswerthis == ![] || !everyoneanswerthis == !![]) && (clearInterval(_0x17dc9f), setTimeout(() => {
                        var _0x97aa8a = _0x137e;
                        _0x39e1f6[_0x97aa8a(0xdb)](Arandomint);
                    }, getRandomInt(0x1, 0x4e20)));
                }, 0x64);
            } else console[_0x4ab7e7(0xd9)](''), setTimeout(() => {
                _0x39e1f6['answer']('x');
            }, getRandomInt(0x1, 0x4e20));
        }
    }), _0x39e1f6['on'](_0x92146b(0xaa), _0x5d4fa5 => {
        var _0x34cd3c = _0x92146b;
        !_0x5d4fa5 == _0x34cd3c(0xac) && sendjoin(_0x57aba3, _0x1e9a42);
    }), _0x39e1f6['on'](_0x92146b(0xe6), _0x53632d => {
        var _0x493666 = _0x92146b;
        _0x53632d[_0x493666(0xa9)] ? console[_0x493666(0xd9)]('') : console[_0x493666(0xd9)]('');
    }), _0x39e1f6['on'](_0x92146b(0xc5), _0x1f1aac => {
        var _0x6c56a2 = _0x92146b;
        console[_0x6c56a2(0xd9)]('');
    }), process['on'](_0x92146b(0xdc), function () {
        var _0x4b5ee8 = _0x92146b;
        process[_0x4b5ee8(0xe8)]();
    });
}
console[_0x78553f(0xc8)](), console[_0x78553f(0xd9)](_0x78553f(0xa3)), spam();
