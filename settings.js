//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: silasvljunior" //ur yt chanel name
global.socialm = "GitHub: silasvljunior" //ur github or insta name
global.location = "Brasil" //ur location

//new
global.botname = 'Silastor bot MD V1' //ur bot name
global.ownernumber = '5544997433716' //ur owner number
global.ownername = 'Tomioka' //ur owner name
global.websitex = "https://youtube.com/@silasvljunior"
global.wagc = "https://whatsapp.com/channel/0029VaKU0QW8V0tq4npIPg0u"
global.themeemoji = '🪀'
global.wm = "CheemsBot"
global.botscript = 'bahhh' //script link
global.packname = "Feito por (bot)\n\n\nsilasjr.bed.ovh"
global.author = "Silastor bot\n\n+5544991177357"
global.creator = "554497433716@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["5544997433716"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
