enum RadioMessage {
    message1 = 49434
}
// 無線帯1001
input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(1001)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 右：メッセージリカバリー
// 左：送信文字確認
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (傾き == 0) {
        if (送信済 == 1) {
            送信用文字 = 送信用文字_送信時バックアップ
            カナ文字_メモリ = カナ文字_送信時バックアップ
            送信済 = 0
            katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
        } else {
            basic.clearScreen()
            katakana.showString("/")
            basic.pause(500)
            basic.clearScreen()
            katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
        }
    } else {
        basic.clearScreen()
        katakana.showString(カナ文字_メモリ)
        basic.clearScreen()
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (傾き == 1) {
        basic.showArrow(ArrowNames.East)
        basic.pause(500)
        basic.clearScreen()
    }
    傾き = 0
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
input.onButtonPressed(Button.A, function () {
    送信済 = 0
    if (傾き == 0) {
        basic.clearScreen()
        if (文字セレクター == 67) {
            文字セレクター = 0
        } else {
            文字セレクター += 1
        }
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    } else {
        basic.clearScreen()
        if (文字セレクター == 0) {
            文字セレクター = 67
        } else {
            文字セレクター += -1
        }
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (傾き == 0) {
        basic.showArrow(ArrowNames.West)
        basic.pause(500)
        basic.clearScreen()
    }
    傾き = 1
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 無線帯1005
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(1005)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// メッセージ保存
// メッセージ暗号化
input.onButtonPressed(Button.AB, function () {
    送信用文字_メモリ = "" + 送信用文字 + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij\\k\\lmnopqr\\\\stuvw\\xyz1234567890!".substr(文字セレクター, 1)
    カナ文字_メモリ = "" + カナ文字 + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1)
    送信用文字_取り消し時バックアップ = 送信用文字
    カナ文字_取り消し時バックアップ = カナ文字
    送信用文字 = 送信用文字_メモリ
    カナ文字 = カナ文字_メモリ
})
// メッセージ受信
// メッセージ複号化
radio.onReceivedString(function (receivedString) {
    カナ文字_受信時メモリ = ""
    カナ文字_受信時 = ""
    受信文字数カウンター = 0
    while (receivedString.length > 受信文字数カウンター) {
        復号化用カウンター = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!".indexOf(receivedString.charAt(受信文字数カウンター))
        カナ文字_受信時 = "" + カナ文字_受信時メモリ + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".charAt(復号化用カウンター)
        カナ文字_受信時メモリ = カナ文字_受信時
        受信文字数カウンター += 1
    }
    basic.pause(200)
    basic.clearScreen()
    katakana.showString(カナ文字_受信時)
    basic.pause(1000)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 文字選択(ｘ５)
input.onButtonPressed(Button.B, function () {
    送信済 = 0
    if (傾き == 0) {
        basic.clearScreen()
        if (文字セレクター >= 67) {
            文字セレクター = 0
        } else {
            文字セレクター += 5
            文字セレクター += -1 * (文字セレクター % 5)
        }
        if (文字セレクター >= 67) {
            文字セレクター = 0
        }
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    } else {
        basic.clearScreen()
        if (文字セレクター == -1) {
            文字セレクター = 67
        } else {
            文字セレクター += -5
            文字セレクター += -1 * (文字セレクター % 5)
        }
        if (文字セレクター <= -1) {
            文字セレクター = 67
        }
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    }
})
// 無線帯1003
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(1003)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// メッセージ送信
// メッセージバックアップ
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(送信用文字)
    カナ文字_送信時バックアップ = カナ文字_メモリ
    送信用文字_送信時バックアップ = 送信用文字
    カナ文字 = ""
    カナ文字_メモリ = ""
    送信用文字 = ""
    送信済 = 1
})
// 初期設定(リセット)
let 復号化用カウンター = 0
let 受信文字数カウンター = 0
let カナ文字_受信時 = ""
let カナ文字_受信時メモリ = ""
let カナ文字_取り消し時バックアップ = ""
let 送信用文字_取り消し時バックアップ = ""
let カナ文字 = ""
let 送信用文字_メモリ = ""
let カナ文字_送信時バックアップ = ""
let カナ文字_メモリ = ""
let 送信用文字_送信時バックアップ = ""
let 送信用文字 = ""
let 送信済 = 0
let 傾き = 0
let 文字セレクター = 0
katakana.setScrollTime(100)
radio.setGroup(1001)
文字セレクター = 0
katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
傾き = 0
