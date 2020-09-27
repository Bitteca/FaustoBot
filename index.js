const express = require('express')
const { Client } = require('discord.js')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const client = new Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.login(process.env.BOT_TOKEN)

client.on('message', async (message) => {
  if (!message.content.startsWith('!') || message.author.bot) return

  const [command, ...args] = message.content.slice(1).trim().split(' ')

  switch (command.toLowerCase()) {
    case 'horacerta':
      message.channel.send(`@everyone SETE E TRINTA E SETE BITCHO!`)
      break
    case 'mute': {
      const guild = message.guild
      const voiceChannel = guild.channels.cache.find(
        (channel) => channel.id === '759850223211249674'
      )

      voiceChannel.members.forEach((member) => {
        const voiceState = member.voice
        voiceState.setMute(true)
      })
      break
    }
    case 'unmute': {
      const guild = message.guild
      const voiceChannel = guild.channels.cache.find(
        (channel) => channel.id === '759850223211249674'
      )

      voiceChannel.members.forEach((member) => {
        const voiceState = member.voice
        voiceState.setMute(false)
      })
      break
    }

    default:
      break
  }
})

app.listen(3333, () => {
  console.log('Server started')
})
