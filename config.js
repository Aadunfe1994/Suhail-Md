const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136514115";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_09_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzVsZkI4YzB6cG4rNW1CR0xGYlVKNmNJQmxyMVJwNHJ6Rkc4NmpZYlFGQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3ppWWdpSnZUWktaRU0ybTlSVk0wd1wiLFxuICBcInBob25lSWRcIjogXCJlNGQ2OWFlMy0yZDg5LTRiZjgtYTk1OS01NDQxYjU1YzY1MDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDE2MSxcbiAgICAgIDI1NCxcbiAgICAgIDIxNSxcbiAgICAgIDM3LFxuICAgICAgMTg2LFxuICAgICAgMTg1LFxuICAgICAgMjI5LFxuICAgICAgNDMsXG4gICAgICA3LFxuICAgICAgMTM2LFxuICAgICAgNjAsXG4gICAgICAyNTIsXG4gICAgICAxMjYsXG4gICAgICAxNzcsXG4gICAgICAxODEsXG4gICAgICAxMDMsXG4gICAgICAxNSxcbiAgICAgIDc4LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMzIsXG4gICAgICAxMTQsXG4gICAgICAyMjAsXG4gICAgICAxMjYsXG4gICAgICAxMjAsXG4gICAgICAxMzMsXG4gICAgICAyMDEsXG4gICAgICAzMixcbiAgICAgIDIzMyxcbiAgICAgIDEyMyxcbiAgICAgIDY4LFxuICAgICAgMzcsXG4gICAgICAxNTAsXG4gICAgICA0MSxcbiAgICAgIDE4LFxuICAgICAgMTQyLFxuICAgICAgODIsXG4gICAgICAzMyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTUpRSlhOUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjUxNDExNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWRlYmF5byBPbGFpZGVcIixcbiAgICBcImxpZFwiOiBcIjIxMzgxMjMzMDM4MTQ4NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzM2djTUJFSUxjanJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1p6MTdNQ3gzQittMXp2eWFXeEtJTWZiRjdSaUxoMi92YUNVZDRtNXJDaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2T3Zrc3JPZTdpazVDaW9YVVNNLzJGQ2FsQjlNUWtRaXloZllLa2d1a2xMYm1vdnQ0dEtDVW02TTBpa05qajBUTDdUNjQydFJFMzlPbi91TUpwVm1Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0Y3Njc1hXOGU3NS9ZOHgrbnR1V3VqVUlmay91ZlIxQlN6WFlBODgvOXNmOTRuZG9xYXdWZ1I4emhOWFo5NEN1Q1RJNW0wMFV0a2MzVjN1S0s3Q0dCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2NTE0MTE1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAwMjk1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
