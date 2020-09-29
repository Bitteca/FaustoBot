const express = require('express')
const { Client, Attachment } = require('discord.js')
const app = express()
const dotenv = require('dotenv')
const ytdl = require('ytdl-core')

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
      if (!message.member.voice.channel) {
        message.channel.send(
          `<@${message.author.id}> vc precisa estar dentro de um canal de voz, nao seja burro!`
        )
      } else {
        const connection = await message.member.voice.channel.join()
        connection.play(ytdl('https://www.youtube.com/watch?v=MJ75-s9p-k8'), {
          filter: 'audioonly',
        })
      }

      break

    case 'errou': {
      if (!message.member.voice.channel) {
        message.channel.send(
          `<@${message.author.id}> vc precisa estar dentro de um canal de voz, nao seja burro!`
        )
      } else {
        const connection = await message.member.voice.channel.join()
        connection.play(ytdl('https://www.youtube.com/watch?v=MFa9pvnVe0w'), {
          filter: 'audioonly',
        })
      }
      break
    }
    case 'eita': {
      if (!message.member.voice.channel) {
        message.channel.send(
          `<@${message.author.id}> vc precisa estar dentro de um canal de voz, nao seja burro!`
        )
      } else {
        const connection = await message.member.voice.channel.join()
        connection.play(
          ytdl(
            'https://www.youtube.com/watch?v=AUt1SpEwEvk&ab_channel=QuintanilhaJunior'
          ),
          {
            filter: 'audioonly',
          }
        )
      }
      break
    }
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
      message.channel.send(
        `<@${message.author.id}> errou o comando, nao seja burro`
      )
      if (!message.member.voice.channel) {
        message.channel.send(
          `<@${message.author.id}> vc precisa estar dentro de um canal de voz, nao seja burro!`
        )
      } else {
        const connection = await message.member.voice.channel.join()
        connection.play(ytdl('https://www.youtube.com/watch?v=MFa9pvnVe0w'), {
          filter: 'audioonly',
        })
      }
      break
  }
})

app.listen(3333, () => {
  console.log('Server started')
})
