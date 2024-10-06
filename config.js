const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "224669094865" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224669094865";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_32_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2ZtTGZRa0x3M0RNcTJEWDZXZFhFVElsQ2Y5dHp3R3ppTUg0dDJXamJPTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM040emRWOFZTa3VmOER5d05HMlBlZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZjE4ZWM0Zi1lMWE0LTQxYzYtYTAxYi03NDViZTUzOTc1OWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxOTUsXG4gICAgICA2NyxcbiAgICAgIDEzOCxcbiAgICAgIDI1MCxcbiAgICAgIDIwNyxcbiAgICAgIDI0NCxcbiAgICAgIDIwMSxcbiAgICAgIDEzOCxcbiAgICAgIDE3OCxcbiAgICAgIDc1LFxuICAgICAgMjAxLFxuICAgICAgMTcxLFxuICAgICAgMTYyLFxuICAgICAgMTYyLFxuICAgICAgMTM0LFxuICAgICAgOTYsXG4gICAgICAxMDEsXG4gICAgICA2NCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTc4LFxuICAgICAgNzAsXG4gICAgICAyNDQsXG4gICAgICAxODMsXG4gICAgICAzMyxcbiAgICAgIDE5MixcbiAgICAgIDI0NixcbiAgICAgIDg0LFxuICAgICAgMzgsXG4gICAgICAyNDUsXG4gICAgICAxNzMsXG4gICAgICAxMixcbiAgICAgIDE4MixcbiAgICAgIDI0MSxcbiAgICAgIDkxLFxuICAgICAgNDYsXG4gICAgICAxMTksXG4gICAgICAyMjUsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRTFXWEFRRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjY5MDk0ODY1OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQyMjM1NjU5ODM4ODM6MjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi5LqXS82czaHJqsm0yaLjgqYg8J+FsPCfhb3wn4W+8J+FvfCfhojwn4W88J+FvvCfhoTwn4aCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Vabi9zRkVOZmRpTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSZEFCNXU2Y0FKSGlRTm9HaUxTaFE2dnRSSXZVd3JZTllRZ1NUN3BGclhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRKdFFXaUkxZ1hhMkJwNzZTbUZPSEo5bmk3MDJ6Q1R1aStHVDNYRzZTWVpDS2NRWWhTMXJldEgwdVBmcHpJZ1NueC9uNnRMMnVlTEY0N2h2MUlWZUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRLM2huUTRiUlBwbjRJb3Myb2ppdXZPYzNuZ1VkMG1CYUUvbVFWL1EyclJPeVMzOEVzOUdNWW0vbTB2NTRpK1JNWk1IanVBUStpanY2MmlpQ0xScURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNDY2OTA5NDg2NToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxOTYzMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTnpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOei5qc29uIjogIntcImtleURhdGFcIjpcIlpWQUFKVFRsdzNydTdxN0kzTzY0dVR2cEo1RzJmYkdUOHNEWTl4RnRXK2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwMDYzODE4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MTk2MzE3NDkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗",
  ownername:process.env.OWNER_NAME|| "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
