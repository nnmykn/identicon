module.exports = {
    trailingSlash: true,
    env: {
        serviceName: 'identicon', //大文字小文字を区別する正式名称
        serviceNamePlain: 'identicon', //大文字小文字を区別しない正式名称
        serviceDomain: 'identicon.go5.run', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '📒Generates an icon from the input text', //サービスの説明文を入力
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f4d2.png' //サービスのアイコンを指定するためのURL
    }
};