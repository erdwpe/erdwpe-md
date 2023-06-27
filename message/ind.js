const { pasaran } = require("../lib/tgl")

exports.wait = () => {
   return ("*_Mohon tunggu sebentar~_*\n\n*_Please wait a moment~_*")
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*
2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*
3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*
Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

*Note:* Bot Masih Dalam Program Beta.Jika Bot Tidak Merespon Di Grup Silahkan Gunakan Di Private Chat!
    `
}

exports.wrongFormat = (prefix) => {
    return `Command Tersebut Sepertinya Tidak Ada Silakan Cek Lagi Di *${prefix}menu*\n\nIt seems that the command doesn't exist. Please check again on the *${prefix}menu`
}
exports.notfound = (prefix) => {
    return (`Command Tersebut Sepertinya Tidak Ada Silakan Cek Lagi Di *${prefix}menu*\n\nIt Seems That The Command Doesn't Exist. Please Check Again On The *${prefix}menu*`)
}
exports.menu = (prefix, salam, time) => {
return `◪ 𝗜𝗡𝗙𝗢
❏ *Prefix:* 「  ${prefix} 」
❏ *Selamat ${salam}*
❏ 📅 : *${pasaran().hijriyah}*
❏ 📆 : *${pasaran().jawa}*
❏ Website: https://erdwpe.is-a.dev/bot

◪ 𝗠𝗘𝗡𝗨
- _${prefix}tiktok link_
- _${prefix}ytmp3 link_
- _${prefix}ytmp4 link_
- _${prefix}play query_
- _${prefix}facebook link_
- _${prefix}twitter link_
- _${prefix}instagram link_
- _${prefix}igstalk username_
- _${prefix}toimg (reply sticker)_
- _${prefix}sticker (send/reply image/video)_
- _${prefix}stickernobg (send/reply image)_
- _${prefix}triggered (send/reply image)_
- _${prefix}pet (send/reply image)_
- _${prefix}smeme (send/reply image)_
- _${prefix}ttp query_
`

}


exports.getGroupAdmins = function(participants){
    let admins  = []
	for (let i of participants) {
		i.admin  !== null ? admins.push(i.id) : ''
	}
	return admins
}

exports.groupOnly = function(){
    return "Perintah Ini Hanya Bisa Digunakan di Group!\n\nThis Command Can Only Be Used in Groups!"
}

exports.adminsOnly = function(){
    return "Perintah Ini Hanya Bisa Digunakan Admin Group!\n\nThis command can only be used by group admins!"
}

exports.err = (cmd, err) => {
    return `Error ${cmd}: ${err}`
}

exports.noUrl = () => {
    return "Input Harus Berupa Url!\n\nInput Must Be a Url!"
}