const fs = require('fs')

global.owner = "923278084152" //owner number
global.footer = "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝘽𝙊𝙏" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['9231893872737828828177378']
global.xprefix = '.'
global.gambar = "https://cdn.phototourl.com/free/2026-06-26-9a089063-aa0d-4ae1-a61e-00a9ea32a1b8.jpg"
global.OWNER_NAME = "@IBNE_RAUF" //
global.DEVELOPER = ["7297849559"] //
global.BOT_NAME = "ABDULQADDUS"
global.bankowner = "⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝘽𝙊𝙏🇦🇱🚯"
global.creatorName = "⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝘽𝙊𝙏 🇦🇱🚯"
global.ownernumber = '923278084152'  //creator number
global.location = "Pakistan, Panjab, Chiniot"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "ABDULQADDUS-MDX" //footer section
global.link = "https://chat.whatsapp.com/"
global.autobio = true//auto update bio
global.botName = "𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝙈𝘿"
global.version = "2.0"
global.botname = "𝙏𝙝𝙚 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝙈𝘿"
global.author = "⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 🇦🇱🚯"
global.themeemoji = ''
global.wagc = 'https://chat.whatsapp.com/'
global.thumbnail = 'https://cdn.phototourl.com/free/2026-06-26-9a089063-aa0d-4ae1-a61e-00a9ea32a1b8.jpg'
global.richpp = ' '
global.packname = "⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 🇦🇱🚯"
global.author = "\n\n\n\n\nCreate by ⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎"
global.creator = "920000@s.whatsapp.net"
global.ownername = '𒁍͟͟͞͞ QADDUS𒉽💀🚩' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𓆩 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𓆪 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝙏𝙝𝙚 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎 𝙈𝘿*`
  global.mess = {
wait: "```WAIT FOR ⌞☠︎︎⌝ •ᅳ 𝘼𝘽𝘿𝙐𝙇 𝙌𝘼𝘿𝘿𝙐𝙎🇱🚯```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔",
   on: "bot active", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "bot off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by silver",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for silver beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
